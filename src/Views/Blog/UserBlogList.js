import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Firebase from '../../components/Firebase/firebase';

class BlogList extends Component {
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Current Posts
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Key</td>
                    <td>Whatever</td>
                    <td>Author</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;