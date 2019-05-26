import Section from '../Section/Section';
import React from 'react'
import './Hero.scss';

class Hero extends Section{
    constructor(props){
        super(props);
        this.state = {
            id: 'Hero',
            title: 'Hayden Yap',
            subTitle:  'Web Developer & Designer'
        }

    }
    render(){
        return(
            <Section id={this.state.id} title={this.state.title} subTitle={this.state.subTitle} />
        )
    }
}

export default Hero;
