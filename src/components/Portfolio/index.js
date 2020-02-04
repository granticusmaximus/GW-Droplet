import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import data from './data';
import Info from './Info';
import ProjectCard from "./ProjectCard";
import { Helmet } from 'react-helmet'

const TITLE = 'Portforlio | GWS'

class PortolioPage extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div>
          <h4 className='heading'>
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
          </h4>
            <div className='work'>
              {data.projects.map((project) => (
                  <div className="col-md-4">
                    <ProjectCard key={project.id}
                      title={project.title}
                      service={project.service}
                      imageSrc={project.imageSrc}
                      tech={project.tech}
                      url={project.url}
                    ></ProjectCard>
                  </div>
              ))}
            </div>
            
        </div>
      </div>
    );
  }
}

export default PortolioPage;
