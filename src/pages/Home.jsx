

import React from 'react'
import './Home.css'
import   logo   from '../images/nes_controller.webp';
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <div className='home'>
        <div className="wrapper">
            <h1 className='start'>PRESS START TO BEGIN</h1>
            <button className='btn'>  <Link to={"/main"} style={{color: 'black'}}>ssddsss</Link></button>
            <img className='logo' src={logo} alt="NES contoller" />
            
        </div>
    </div>
  )
}


