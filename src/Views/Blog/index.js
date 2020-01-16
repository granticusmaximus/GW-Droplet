import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

class BlogPage extends Component {
  state = {}
  render() {
    return (
      <div className="container">

        <div>
          <h1 className='heading'>
              <Typography variant="h4" component="h1" gutterBottom>
                Blog
              </Typography>
          </h1>
          <center>
              <p>Hello!</p>
          </center>
        </div>
      </div>

    );
  }
}

export default BlogPage;