import React, { Component, useState } from "react";
import { fire } from "../Firebase/fire";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'
import { Helmet } from 'react-helmet'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const TITLE = 'Blog | GWS'
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
    return <div className="container"><center>
      <Loader
        type="Grid"
        color="#04C2C9"
        height={100}
        width={100}
        timeout={3000} //3 secs

      />
    </center></div>;
  }
  else {
    return (
      <div className="container">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="container">
          <h1 className="pageHeader">Blog posts</h1>
          <div className="row">
            {blogPosts.map(blogPost => (
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
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default BlogPage;