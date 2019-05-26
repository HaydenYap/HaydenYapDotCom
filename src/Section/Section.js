import React from 'react';
import './Section.scss';


class Section extends React.Component{

  render(){
    return(
      <div id={this.props.id} aria-label='section'className='section container-fluid m-0 p-0'>
        <div className='topSection d-block'>
          <div className='dblock sectionSpace'></div>
          <div className='topRound dblock bg-dark'></div>
        </div>
        <div className='midSection row bg-dark m-0 p-0 align-items-center'>
          <div className='col'>
            <div>
              <h1 aria-label='Name' className='sectionTitle text-white mx-auto glitchClass' data-text={this.props.title}>{this.props.title}</h1>
            </div>
            <div>
              <h2>{this.props.subTitle}</h2>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className='bottomSection d-block'>
          <div className='bottomRound dblock bg-dark'></div>
          <div className='dblock sectionSpace'></div>
        </div>
      </div>
    )
  }
}

export default Section;
