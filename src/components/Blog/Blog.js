import React, { Component } from 'react'
import { withFirebase } from './Firebase'
import Post from './post'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            posts:[],
            post_id:[],
            lastVisible:null,
            limit:2
        }

        this.handlePageNext = this.handlePageNext.bind(this);
    }
    componentDidMount() {
        let newPosts=[];
        let postsId=[];

        this.setState({ loading: true });

        this.props.firebase.posts()
        .orderBy('date', 'desc')
        .limit(2)
        .get().then(querySnapshot => {
            let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
            this.setState({ lastVisible: lastVisible});

            querySnapshot.forEach(doc => {
                newPosts = newPosts.concat(doc.data());
                postsId = postsId.concat(doc.id);           
                this.setState({
                    posts:newPosts,
                    post_id:postsId,
                    loading:false
                });
            })
        })



    }

    handlePageNext() {
        let newPosts=[];
        let postsId=[];

        this.setState({ loading: true });

        this.props.firebase.posts()
        .orderBy('date', 'desc')
        .startAt(this.state.lastVisible)
        .limit(this.state.limit)
        .get().then(querySnapshot => {
            let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];

            this.setState({ lastVisible:lastVisible });
            querySnapshot.forEach(doc => {
                newPosts = newPosts.concat(doc.data());
                postsId = postsId.concat(doc.id);           
                this.setState({
                    posts:newPosts,
                    post_id:postsId,
                    loading:false
                });
            })
        })
    }

    handlePagePrev() {
        let newPosts=[];
        let postsId=[];

        this.setState({ loading: true });

        this.props.firebase.posts()
        .orderBy('date', 'desc')
        .startAt(this.state.lastVisible)
        .limit(this.state.limit)
        .get().then(querySnapshot => {
            let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];

            this.setState({ lastVisible:lastVisible});
            querySnapshot.forEach(doc => {
                newPosts = newPosts.concat(doc.data());
                postsId = postsId.concat(doc.id);           
                this.setState({
                    posts:newPosts,
                    post_id:postsId,
                    loading:false
                });
            })
        })
    }

    render() {
        return (
            <div className='posts'>
                <div className='row'>
                    {this.state.posts.map((post, i) => (
                        <Post 
                            key={i}
                            title={post.title}
                            author={post.author}
                            desc={post.desc}
                            text={post.text}
                            id={this.state.post_id[i]}
                            date={post.date}
                            imgURL={post.imgURL}/>
                    ))}

                    {this.state.loading && <p>Loading...</p>}
                    <button className='btn' onClick={() => this.handlePagePrev()}>&larr;</button>
                    <button className='btn' onClick={() => this.handlePageNext()}>></button>

                </div>

            </div>
        )
    }
}

export default withFirebase(PostList);