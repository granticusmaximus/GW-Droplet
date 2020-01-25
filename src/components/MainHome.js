import React from "react";
import "../assets/css/App.css";
import Fade from 'react-reveal/Fade';


const MainHome = () => (
  <div className="container">
    <Fade bottom cascade>
      <div className="homeHeader">
        <div className="headerAvatar">
        </div>
        <center><h2 className="headerColor">Welcome!</h2></center>
        <center><h4 className="headerColor">Innovating Inspiration in A Digital Realm </h4></center>
      </div>
      <div className="container">



        <hr />

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
            <div className="card card-1">
              <h4>Top Notch Dev</h4>
              <p>
                As per the arena, I love learning the newest languages, trends,
                and features that provide the Internet in all it's glory.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="card card-3">
              <h4>A little more about me</h4>
              <p>
                I have my most fun in the developmental realm working with ReactJS and C#. With these two items,
                it seems more problems can find a solution in these languages. I am currently working with the
                Department of Commerce on a few open source applications.
              </p>
              <p>
                Outside of code, I enjoy creating and supporting others that in other ways. From working on my blog,
                to finding new music, or reading a new (to me) book, there is so much in the realm of creation and arts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </div>
);

export default MainHome;