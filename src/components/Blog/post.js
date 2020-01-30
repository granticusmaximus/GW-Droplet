import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import { Redirect } from "react-router-dom";

class Post extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { match } = this.props
    const slug = match.params.slug;
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState();
    if (loading && !currentPost) {
      fire()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
    }
    return (
      (currentPost.map(post =>
        <div>
        <img src={post.coverImage} alt={post.coverImageAlt}>
        <h1>{post.title}</h1>
        <em>{post.datePretty}</em>
        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </img>
        </div>
      )));
    }
  }

export default Post;
