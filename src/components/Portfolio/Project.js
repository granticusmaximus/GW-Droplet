import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() {
        return (
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1 className='portfolioCard-header'>{this.props.title}</h1>
            <div className='portfolioCard-content'>{this.props.service}</div>
            <div className='portfolioCard-content'>{this.props.tech}</div>
            <div className='portfolioCard-action'>{this.props.service}</div>
        </div>
            </Fade>);
    }
}

export default Project;
