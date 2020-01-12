import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import SkillBar from "react-skillbars";

class ExperiencePage extends Component {
  render() {
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
        <Typography variant="h4" component="h1" gutterBottom>
          Experience Page
        </Typography>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-3">
              <h5 className="mb-3 text-black">
                <strong>Skills</strong>
              </h5>
              <SkillBar skills={skills} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;