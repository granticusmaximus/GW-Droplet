import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import data from './data';
import Project from './Project';

class PortolioPage extends Component {
  state = {}
  render() {
    return (
      <div className="container">

        <div>
          <h1 className='heading'>
            <Fade bottom cascade>
              <Typography variant="h4" component="h1" gutterBottom>
                My Current Work
              </Typography>
            </Fade>
          </h1>
          <center>
            <div className='work-content'>
              {data.projects.map((project) => (
                <Project key={project.id}
                  title={project.title}
                  service={project.service}
                  imageSrc={project.imageSrc}
                  url={project.url}
                ></Project>
              ))}
            </div>
          </center>
        </div>
      </div>

    );
  }
}

export default PortolioPage;