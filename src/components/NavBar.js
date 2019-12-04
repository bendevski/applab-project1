import React from 'react';
import {Link} from 'react-router-dom';



export default function NavBar(){
    return(
    <div className='navBar'>
       
            <Link to='/' >
                Home
            </Link>

            <Link to='/Trending' >
                Trending
            </Link>

            <Link to='/HallOfFame' >
                Hall of Fame
            </Link>
    </div>
    )
}