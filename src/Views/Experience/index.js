import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import SkillBar from "react-skillbars";

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
      
      <div className="container">
        <Typography variant="h2" component="h1" gutterBottom>
          Current Skills
        </Typography>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <SkillBar skills={skills} colors={colors} />
            </div>
          </div>
        </div>

        <hr />

        <Typography variant="h2" component="h1" gutterBottom>
          Work Experience
        </Typography>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ExperiencePage;