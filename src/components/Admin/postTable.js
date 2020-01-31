import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Table, Button } from 'reactstrap';
import * as ROUTES from '../../constants/routes';

const PostTable = ({ history }) => {
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

  const deletePost = () => {
    fire()
      .database()
      .ref()
      .child(`posts/${blogPosts.slug}`)
      .remove()
  };

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
          <Table dark hover>
            <thead>
              <tr>
                <th>Post Title</th>
                <th>Date Posted</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map(blogPost => (
                <tr>
                  <td>{blogPost.title}</td>
                  <td>{blogPost.datePretty}</td>
                  <td>
                    <Button outline color="danger" onClick={deletePost}>Delete</Button>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
      }
}

  export default PostTable;
