import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import { Redirect } from "react-router-dom";

const Post = ({ match }) => {
  const slug = match.params.slug;
  const postSlugs = [];
  const [blogPosts] = useState([]);

  if ( !blogPosts.length) {
    fire()
      .database()
      .ref("/posts")
      .orderByChild("date")
      .once("value")
      .then(snapshot => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }
      });
  }

  const postDoesNotExist = postSlugs.indexOf(slug) === -1;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }
  else {
    return (
      <div className="container">
          <section key={blogPosts.slug} className="blogCard">
            <img src={blogPosts.coverImage} alt={blogPosts.coverImageAlt} />
            <div className="blogCard-content">
              <h2>
                {blogPosts.title} &mdash;{" "}
                <span style={{ color: "#5e5e5e" }}>{blogPosts.datePretty}</span>
              </h2>
              <p>
                {blogPosts.content}
              </p>
            </div>
          </section>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>This is a template for blog posts.</h1>
      <p>We'll get to this once we've hooked up Firebase!</p>
    </div>
  );
};

export default Post;