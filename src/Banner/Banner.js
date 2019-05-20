import React from 'react';
import './Banner.scss';

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
            <h1 title='Name' id="bannerName" className='text-white mx-auto' data-text='Hayden Yap'>Hayden Yap</h1>
          </div>

            <div id='linkContainer' className='row d-block text-white mx-auto'>
              <ul title='list of personal links' id='links'>
                <li className='col-2 d-inline-block mx-auto'>
                  Link1
                </li>
                <li className='col-2 d-inline-block mx-auto'>
                  Link2
                </li>
                <li className='col-2 d-inline-block mx-auto'>
                  Link3
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
