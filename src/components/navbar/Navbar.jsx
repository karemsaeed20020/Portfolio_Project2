import React from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className='wrapper'>
            <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Kareem</motion.span>
            <div className='social'>
                <a href="#"><img src="https://github.com/safak/animated-portfolio/blob/completed/public/facebook.png?raw=true" alt="" /></a>
                <a href="#"><img src="https://github.com/safak/animated-portfolio/blob/completed/public/instagram.png?raw=true" alt="" /></a>
                <a href="#"><img src="https://github.com/safak/animated-portfolio/blob/completed/public/youtube.png?raw=true" alt="" /></a>
                <a href="#"><img src="https://github.com/safak/animated-portfolio/blob/completed/public/dribbble.png?raw=true" alt="" /></a>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
