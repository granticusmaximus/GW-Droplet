import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

class ProjectCard extends Component {
    state = {}
    render() {
        return (
            <Fade bottom>
                <div className='portfolioCard'>
                    <img src={this.props.imageSrc} alt={this.props.title}></img>
                    <div className='portfolioCard-header'>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className='portfolioCard-content'>
                        <div>{this.props.service}</div>
                        <div>{this.props.tech}</div>
                    </div>
                    <div className='portfolioCard-action'>
                        <Button outline color="primary"><a href={this.props.url} target="_blank">Demo</a></Button>
                        <span></span>
                    </div>
                </div>
            </Fade>);
    }
}

export default ProjectCard;
