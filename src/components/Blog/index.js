import React, { Component, useState } from "react";
import { fire } from "../Firebase/fire";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  if (loading && !blogPosts.length) {
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

        const newestFirst = posts.reverse();
        setBlogPosts(newestFirst);
        setLoading(false);
      });
  }

  if (loading) {
    return <div className="container"><h1>Loading...</h1></div>;
  }

  return (
    <div className="container">
      <div className="container">
        <h1 className="pageHeader">Blog posts</h1>
        {blogPosts.map(blogPost => (
          <section key={blogPost.slug} className="blogCard">
            <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
            <div className="blogCard-content">
              <h2>
                {blogPost.title} &mdash;{" "}
                <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${blogPost.content.substring(0, 200)}...`
                }}
              ></p>
              <Link to={`/${blogPost.slug}`}>Continue reading...</Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;