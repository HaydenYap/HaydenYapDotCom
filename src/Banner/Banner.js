import React from 'react';
import './Banner.scss';
import { FaGithub , FaLinkedin, FaFilePdf} from "react-icons/fa";

class Banner extends React.Component{
  render(){
    return(

      
      <div title='banner' id='banner' className='container-fluid m-0 p-0'>
        <div id='topBanner' className='d-block'>
          <div className='dblock bannerSpace'></div>
          <div id='topRound' className='dblock bg-dark'></div>
        </div>
        <div id='midBanner'className='row bg-dark m-0 p-0 align-items-center'>
          <div className='col'>
          <div>
            <h1 title='Name' id="bannerName" className='text-white mx-auto glitchClass' data-text='Hayden Yap'>Hayden Yap</h1>
          </div>

            <div id='linkContainer' className='row mx-auto d-sm-block'>
              <ul title='list of personal links' id='links'>
                <li className='col-md-2 col-xs-12 d-inline-block mx-auto p-0'>
                  <span className='btn btn-dark d-block bannerLink glitchClass'>
                    <FaGithub className='pb-1'/> <span className='glitchClass' data-text='GitHub'>GitHub</span>
                  </span>
                </li>
                <li className='col-md-2 col-xs-12 d-inline-block mx-auto p-0'>
                <span className='btn btn-dark d-block bannerLink glitchClass'>
                    <FaLinkedin className='pb-1'/> <span className='glitchClass' data-text='LinkedIn'>LinkedIn</span>
                  </span> 
                </li>
                <li className='col-md-2 col-xs-12 d-inline-block mx-auto p-0'>
                <span className='btn btn-dark d-block bannerLink glitchClass'>
                    <FaFilePdf className='pb-1'/> <span className='glitchClass' data-text='Resume'>Resume</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id='bottomBanner' className='d-block'>
          <div id='bottomRound' className='dblock bg-dark'></div>
          <div className='dblock bannerSpace'></div>
        </div>
      </div>
    )
  }
}

export default Banner;
