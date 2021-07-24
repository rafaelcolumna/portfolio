import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

function home() {
    return (
        <>
        <div>
            <div className='home'>
                <h2>Welcome to</h2>
                <img 
                src="https://i.ibb.co/LC85wnS/Screen-Shot-2021-07-20-at-4-36-28-PM-removebg-preview-1.png"
                height='280' width='280'> 
                 </img>
            </div> 
            <div>
            <h4 className='dicho'>I am built to listen to your needs to succesfully develop your dream application.</h4>
            </div>
            <div className='button'>
           <Link to='/about'>  <button className='buttonH'> Learn More About Your Future 
           Sofware Developer </button>
           </Link>
            </div>
        </div>
       </>
    )
}

export default home; 