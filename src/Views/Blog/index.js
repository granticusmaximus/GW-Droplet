import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: []
    }
  }
  render() {
    if (!this.state.loading) {
      return (
        <div className="ProductList">
          <h2 className="ProductList-title">Available Products ({this.state.posts.length})</h2>
          <div className="ProductList-container">
            {this.state.posts.map((posts, index) => {
              return (
                <div className="ProductList-product" key={posts.id}>
                  <Link to={`/blog/${posts.id}`}>
                    <h3>{posts.title}</h3>
                    <img src={`https://gw-blogbackend.herokuapp.com/${posts.image.url}`} alt={posts.title} />
                    <div>{posts.description}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default BlogPage;