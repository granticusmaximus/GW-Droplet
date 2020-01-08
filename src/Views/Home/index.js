import React from 'react';
import Typography from '@material-ui/core/Typography';

const HomePage = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card card-1">
          <h4>Georgia Native | Colorado Transplant</h4>
          <p>I got my degree from Middle Georgia State University in 2018, and moved to Colorado with my wife in 2019.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-2">
          <h4>Top Notch Dev</h4>
          <p>As per the arena, I love learning the newest languages, trends, and features that the provide the Internet it's glory.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-3">
          <h3>Current Tech Stacks</h3>
          <p>Every developer has their favorite tech stack, or tools attached to their belt. I am no different</p>
          <ul>
            <li>C#</li>
            <li>ASP.NET</li>
            <li>ReactJS</li>
            <li>Firebase</li>
            <li>MeteorJS</li>
            <li>NextJS</li>
          </ul>
        </div>
      </div>

      <hr />
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome! I am Grant Watson
      </Typography>
    </div>










  </div>
);

export default HomePage;