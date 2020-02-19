import React, { Component, useState  } from 'react';
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import FirebaseContext from "../Firebase/context";

export default class BlogList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dbItems: [],
      currentPage: 1,
      itemsPerPage: 6,
      totalItemCount: 1,
      activePage: 15
    }
    
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  async getItems() {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);
    const { currentPage, itemsPerPage } = this.state;
    const startAt = currentPage * itemsPerPage - itemsPerPage;
    const usersQuery = FirebaseContext.datbase().ref('/post').orderByChold("date").once("value").then(snapshot => {
      let posts = [];
      const snapshotVal = snapshot.val();
      for (let slug in snapshotVal) {
        posts.push(snapshotVal[slug]);
      }

      const newestFirst = posts.reverse();
      setBlogPosts(newestFirst);
      setLoading(false);
    }).startAt(startAt).limit(itemsPerPage)
    const snapshot = await usersQuery.get()
    const items = snapshot.docs.map(doc => doc.data())
    return this.setState({
      dbItems: items,
      totalItemCount: FirebaseContext.database().ref('/posts').orderByChild("date").get().then(res => console.log(res.size))
    })

  }

  componentDidMount() {
    this.getItems()
  }

  componentDidUpdate(prevProps, prevState) {
    const isDifferentPage = this.state.currentPage !== prevState.currentPage
    if (isDifferentPage) this.getItems()
  }

  render() {
    return (
      <div>
        {this.state.dbItems.map((blogPost, index) => {
          return (
            <p key={index}>
              <div className="col-md-4">
                <section key={blogPost.slug} className="blogCard">
                  <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
                  <div className="blogCard-content">
                    <h2>
                      {blogPost.title} &mdash;{" "}
                      <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
                    </h2>
                    <hr />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${blogPost.content.substring(0, 350)}...`
                      }}
                    ></p>
                    <Link to={`/posts/${blogPost.slug}`}>Continue reading</Link>
                  </div>
                </section>
              </div>
            </p>
          )
        })
        }
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsPerPage}
          totalItemsCount={this.state.totalItemCount}
          pageRangeDisplayed={this.state.itemsPerPage}
          onChange={this.handlePageChange}
        />
      </div>
    )
  }
}