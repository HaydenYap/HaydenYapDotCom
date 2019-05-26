import React from 'react';
import './Section.scss';
import Display from '../Content/Display/Display'



class Section extends React.Component{
  
  render(){
    return(
      <div id={this.props.state.id} aria-label='section'className='section container-fluid m-0 p-0 '>
        <div className='midSection row bg-dark m-auto p-0 align-items-center'>
          <div className='mx-auto'>
            <Display command={this.props.state.command}/>
            <h1 id='SectionTitle' aria-label='Name' className='sectionTitle titleType text-white mx-auto glitchClass my-5' data-text={this.props.state.title}>{this.props.state.title}</h1>
            <div className='row'>
              <div className='mx-auto'>
                <h2 id='SectionSubTitle' className='sectionSubTitle typing typeAnimation mx-auto p-0'>{this.props.state.subTitle}</h2>
              </div>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section;
