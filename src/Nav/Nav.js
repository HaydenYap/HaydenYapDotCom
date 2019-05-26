import React from 'react';
import './Nav.scss';

class Nav extends React.Component{

    render(){
        let defaultState = Object.assign({}, this.props.state);
        defaultState.title = 'Hayden Yap';
        defaultState.subTitle = 'Web Developer & Designer';
        defaultState.command = 'HaydenYap.exe';

        let contactState = Object.assign({}, this.props.state);
        contactState.title = 'Contact Me';
        contactState.subTitle = 'Contact Me Here';
        contactState.command = 'ContactMe.exe';

        let aboutState = Object.assign({}, this.props.state);
        aboutState.title = 'About Me';
        aboutState.subTitle = 'I\'m Hayden';
        aboutState.command = 'AboutMe.exe';


        return(
            <div aria-label="Navigation Bar" className='navbar p-0'>
                <ul  id='links' className='p-0 my-0'>
                    <li className='d-inline-block px-2'>
                        <a className='link' href='#Hayden' onClick={() => this.props.changeState(defaultState)}>
                            <span className='glitchClass' data-text='Hayden'>Hayden</span>
                        </a>
                    </li>
                    <li className='d-inline-block px-2'>
                        <a className='link' href='#Contact' onClick={() => this.props.changeState(contactState)}>
                            <span className='glitchClass' data-text='Contact'>Contact</span>
                        </a> 
                    </li>
                    <li className=' d-inline-block px-2'>
                        <a className='link' href='#About' onClick={() => this.props.changeState(aboutState)}>
                            <span className='glitchClass' data-text='About'>About</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Nav;/* <div id='linkContainer' className='row d-sm-block'>
    <ul aria-label='list of links' id='links' className='p-0 mx-auto'>
        <li className='d-inline-block px-2'>
        <a className='link' href='https://github.com/HaydenYap'>
            <FaGithub className='d-none d-sm-inline pb-1'/><span data-text='GitHub' className='glitchClass'>GitHub</span>
        </a>
        </li>
        <li className='d-inline-block px-2'>
        <a className='link' href='https://www.linkedin.com/in/hayden-yap/'>
            <FaLinkedin className='d-none d-sm-inline pb-1'/><span data-text='LinkedIn' className='glitchClass'>LinkedIn</span>
        </a> 
        </li>
        <li className=' d-inline-block px-2'>
        <a className='link' href='./Dev5212019final.pdf'>
            <FaFilePdf className='d-none d-sm-inline pb-1'/><span data-text='Resume' className='glitchClass'>Resume</span>
        </a>
        </li>
    </ul>
</div> */