import React, { Component } from "react";
import SkillBar from "react-skillbars";

class HomePage extends Component {
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
        <div className="row">
          <div className="col-md-6">
            <div className="card card-1">
              <h4>Georgia Native | Colorado Transplant</h4>
              <p>
                I got my degree from Middle Georgia State University in 2018,
                and moved to Colorado with my wife in 2019.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-2">
              <h4>Top Notch Dev</h4>
              <p>
                As per the arena, I love learning the newest languages, trends,
                and features that the provide the Internet it's glory.
              </p>
            </div>
          </div>
        </div>
        <hr />
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

export default HomePage;
