import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

function about() {
    return (
    
        <div>
            <div className='about'>
            <h1>Who am I?</h1>
            </div> 
            <div >   
            <p className='description'> Hi! My name is Rafael Columna, <br />
            I have been in the sales industry for about <br /> 
            8 years where I developed my ability to listen <br />
            to one's needs.<br /> <br />
            I graduated from General Assenbly, earning the <br />
            ability to now help you make the the most beautiful <br />
            and functional website for your business entity.<br /> <br />
            </p>
            <img src="https://i.ibb.co/0FZrMD4/Screen-Shot-2021-07-21-at-2-04-19-PM.png" className='profile'>

            </img>
            </div>
            <div>
           <Link to='/projects'> <button className='buttonA'> Look at my most recent projects </button>
           </Link>
            </div>
        </div>
   
    )
}

export default about; 