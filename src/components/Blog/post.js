import React, { useState } from "react";
import { CommonLoading } from 'react-loadingg';
import { fire } from "../Firebase/fire";
import { Redirect } from "react-router-dom";

const Post = ({ match }) => {
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

  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  if (loading) {
    return <div className="container"><CommonLoading /> </div>;
  }

  return (
    <div>
      <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}>
        <h1>{currentPost.title}</h1>
        <em>{currentPost.datePretty}</em>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </img>
    </div>
  );
};

export default Post;