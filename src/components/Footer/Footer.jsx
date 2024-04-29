import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>SAMMY GILDEA-TROTT</h1>
            <p>Fashion Stylist & Creative</p>
        <div className="footer-content-right">
            <img src={assets.linkedin} alt="linkedin image" className="linkedin" />
            <img src={assets.instagram} alt="instagram image" className="instagram" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
