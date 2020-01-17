import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Info extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='info'>
            <h1>{this.props.name}</h1>
            <span>{this.props.headerTagline}</span>
            <span>{this.props.abouttext}</span>
        </div> 
            </Fade>);
    }
}
 
export default Info;
