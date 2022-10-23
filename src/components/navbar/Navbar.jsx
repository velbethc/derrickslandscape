import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
         <div className="dl__navbar_links_container"> 
         <p><a href="/home">Home</a></p>
         <p><a href="/about">About</a></p>
         <p><a href="/services">Services</a></p>
         <p><a href="/projects">Projects</a></p>
         <p><a href="/testimonials">Testimonials</a></p>
         <p><a href="/contact">Contact</a></p>
         </div>
        </div>
    )
}

export default Navbar

