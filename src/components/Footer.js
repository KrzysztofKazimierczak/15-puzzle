import React from 'react';
import heart from '../images/heart.png';
import '../styles/Footer.css'
const Footer = () => {
  return (
    <p>created with <img src={heart} alt="heart" /> by <a href="https://github.com/KrzysztofKazimierczak" rel="noopener noreferrer" target="_blank">Krzysztof Kazimierczak</a></p>
  )
}

export default Footer;