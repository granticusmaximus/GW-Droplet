import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import { Redirect } from "react-router-dom";

const Post = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState()
  const slug = match.params.slug;

  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  if (loading) {
    return <div className="container"><h1>Loading...</h1></div>;
  }

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
    <div className="container">
      <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}>
        <h1>{currentPost.title}</h1>
        <em>{currentPost.datePretty}</em>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </img>
    </div>
  );
}

export default Post;