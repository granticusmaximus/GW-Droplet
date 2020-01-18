import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import data from './data';
import Project from './Project';
import Info from './Info';

class PortolioPage extends Component {
  state = {}
  render() {
    return (
      <div className="container">

        <div>
          <h1 className='heading'>
            <Fade bottom cascade>
              <div className="pageHeader">
                Current Works
             </div>
              <center>
                <div className='work-content'>
                  {data.info.map((info) => (
                    <Info key={info.name}
                      abouttext={info.abouttext}
                    ></Info>
                  ))}
                </div>
              </center>
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