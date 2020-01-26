import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class ProjectCard extends Component {
    state = {}
    render() {
        return (
            <Fade bottom>
                <div className='portfolioCard'>
                    <img src={this.props.imageSrc} alt={this.props.title}></img>
                    <div className='portfolioCard-content'>
                        <h1>{this.props.title}</h1>
                        <div>{this.props.service}</div>
                        <div>{this.props.tech}</div>
                    </div>
                </div>
            </Fade>);
    }
}

export default ProjectCard;
