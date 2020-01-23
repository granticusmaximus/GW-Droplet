import React, { Component } from "react";
import SkillBar from "react-skillbars";
import Timeline from "./Timeline";
import { Button } from "reactstrap";
import Fade from 'react-reveal/Fade';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';


class ExperiencePage extends Component {
  render() {
    const colors = {
      bar: 'linear-gradient(to right, #00c6ff, #0072ff)',
      title: {
        text: '#fff',
        background: '#ff3300'
      }
    }
    const skills = [
      { type: "C#", level: 85 },
      { type: "ASP.NET", level: 85 },
      { type: "ReactJS", level: 88 },
      { type: "Java", level: 75 },
      { type: "Python", level: 70 },
      { type: "PHP", level: 80 },
      { type: "Firebase", level: 56 },
      { type: "MySQL", level: 65 },
      { type: "SQL Server", level: 68 },
      { type: "Javascript", level: 75 }
    ];
    return (
      <Fade bottom cascade>
        <div className="container">
          <div className="pageHeader">
            Current Skills
        </div>
          <div className="row">
            <div className="col-md-12">
              <hr />
              <SkillBar skills={skills} colors={colors} />
            </div>
          </div>

          <hr />

          <div className="pageHeader">
            Work Experience
          </div>
          <div className="row">
            <div className="col-md-12">
              <Timeline />
              <center><Button outline color="primary"><Link to={ROUTES.RESUME}>View Full Resume</Link></Button></center>
            </div>
          </div>

        </div>
      </Fade>
    );
  }
}

export default ExperiencePage;