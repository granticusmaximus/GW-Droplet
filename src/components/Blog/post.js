import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import { Redirect } from "react-router-dom";

const Post = ({ match }) => {
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
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
        <h1 className="pageHeader">{currentPost.title}</h1>
        <em>{currentPost.datePretty}</em>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </img>
    </div>
  );
};

export default Post;