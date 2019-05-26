import React from 'react'
import './Display.scss'

class Display extends React.Component{

    render(){
        return(
            <div id='display' className='row mx-auto mb-2 px-1 align-self-start'>
                <span>
                    >
                </span>
                <span className='mx-0'>
                    <h2 id='command' className='typing mx-0 p-0 commandType'> {this.props.command}</h2>
                </span>
            </div>
        )
    }
}

export default Display