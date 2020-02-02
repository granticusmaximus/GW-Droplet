import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

const RecentPost = () => {
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
        

        const topRecent = posts.reverse();
        setBlogPosts(topRecent);
        setLoading(false);
      });
  }
  return (
    <div className="container-body">
        {blogPosts.map(blogPost => (
          <div className="readMore">
            <p>{blogPost.title}</p>
            <Button><Link to={`/posts/${blogPost.slug}`}>Read</Link></Button>
          </div>
        ))}
    </div>
  );
}

export default RecentPost;