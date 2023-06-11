import React from 'react'
import './TrainingStyle.css'
import {Link} from 'react-router-dom'

import astro from '../assets/astronaut.jpg'
import moon from '../assets/astro3.png'


const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Thorough training is a necessary when traveling to space. We offer scenarios.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={astro} alt='astronaut' className='img' />
                </div>
                <div className='image-stack bottom'>
                    <img src={moon} alt='moon' className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training