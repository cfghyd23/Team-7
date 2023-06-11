import React from 'react'
import './FooterStyle.css'
import { FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#ffffff',marginRight :'2rem'}}/>
                    <div>
                    <p>123 Pragati St.</p>
                    <h4>Hyderabad, Telangana</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>1800-890-789</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>galaxytravel@lky.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>"Hypothesis space refers to the set of 
                    all possible hypotheses that a machine
                     learning algorithm can choose from to
                     explain or predict a given dataset. "
                </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                    <FaTwitter size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer