import React from 'react'
import {Link} from 'react-router-dom';

function projects() {
    return (
     <>
        <div className='projects'>
            <h1>Projects</h1>
        </div>

        <div>
            <li className='projectOne'>
                <a href='https://github.com/rafaelcolumna/meetTheWorld'>
                <img src="https://i.ibb.co/YtyQ7zt/Screen-Shot-2021-07-22-at-1-43-34-PM.png">
                </img>
                </a>
            </li>
        </div>
        <div>
            <Link to='/contact'>  <button className='buttonP'> Contact Me! </button>
           </Link>
        </div>
        
     </>
    )
}

export default projects; 