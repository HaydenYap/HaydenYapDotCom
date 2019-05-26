import Section from '../Section/Section';
import React from 'react'
import './Contact.scss';

class Contact extends Section{
    constructor(props){
        super(props);
        this.state = {
            id: 'Contact',
            title: 'Contact'            
        }

    }
    render(){
        return(
            <Section id={this.state.id} title={this.state.title} />
        )
    }
}

export default Contact;
