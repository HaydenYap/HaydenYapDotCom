import Section from '../Section/Section';
import React from 'react'
import './Contact.scss';

class About extends Section{
    constructor(props){
        super(props);
        this.state = {
            id: 'About',
            title: 'About Me'            
        }

    }
    render(){
        return(
            <Section id={this.state.id} title={this.state.title} />
        )
    }
}

export default About;
