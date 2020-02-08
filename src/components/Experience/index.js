import React, { Component } from "react";
import SkillBar from "react-skillbars";
import Timeline from "./Timeline";
import { Button } from "reactstrap";
import Fade from 'react-reveal/Fade';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const TITLE = 'My Experience | GWS'

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
          <Helmet>
            <title>{TITLE}</title>
            <meta name="description" content="This is the visual resume of Grant Watson. You find the confidence levels of programming languages I use, my job history, and full resume." />
            <link rel="canonical" href="https://www.grantwatson.app/experience" />
          </Helmet>
          <div className="pageHeader">
            Current Skills
        </div>
          <div className="row">
            <div className="col-md-12">
              <hr />
              <center>
                <h4>The following percentages are my confidence levels of each skill. </h4>
              </center>
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
              <hr />
              <center>
                <h4>The following is my relevant work related to the technical world.</h4>
              </center>
              <hr />
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