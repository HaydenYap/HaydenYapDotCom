import React from 'react';
import './Nav.scss';
import { FaGithub , FaLinkedin, FaFilePdf} from "react-icons/fa";

class Nav extends React.Component{
    render(){
        return(
            <div aria-label="Navigation Bar" className='navbar'>
                <div id='linkContainer' className='row d-sm-block'>
                    <ul aria-label='list of links' id='links' className='p-0 mx-auto'>
                        <li className='d-inline-block px-2'>
                        <a className='link' href='https://github.com/HaydenYap'>
                            <FaGithub className='d-none d-sm-inline pb-1 text-white'/><span data-text='GitHub' className='glitchClass'>GitHub</span>
                        </a>
                        </li>
                        <li className='d-inline-block px-2'>
                        <a className='link' href='https://www.linkedin.com/in/hayden-yap/'>
                            <FaLinkedin className='d-none d-sm-inline pb-1 text-white'/><span data-text='LinkedIn' className='glitchClass'>LinkedIn</span>
                        </a> 
                        </li>
                        <li className=' d-inline-block px-2'>
                        <a className='link' href='./Dev5212019final.pdf'>
                            <FaFilePdf className='d-none d-sm-inline pb-1 text-white'/><span data-text='Resume' className='glitchClass'>Resume</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;