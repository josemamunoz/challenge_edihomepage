import "../../styles/navbar.css"

import {Link} from 'react-scroll';
import React, { useState } from "react";

function Navbar(){
    const [showLinks, setShowLinks] = useState(false);

    return(
        <div className="navbar">
            <div className="brand">
                <p className="developer">Edie</p>
            </div>
            <nav id={showLinks ? "hidden" : ""}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="navitems">Home</Link>
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500} className="navitems">Services</Link>
                <Link activeClass="active" to="ourworks" spy={true} smooth={true} offset={-70} duration={500} className="navitems">Our Works</Link>
                <Link activeClass="active" to="us" spy={true} smooth={true} offset={-70} duration={500} className="navitems">Us</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="navitems">Clients</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="navitems">Contact</Link>
            </nav>
            <div className="dropdown">
            {/* <ul>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="dropitems">Home</Link></li>
                    <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500} className="dropitems">Services</Link></li>
                    <li><Link activeClass="active" to="ourworks" spy={true} smooth={true} offset={-70} duration={500} className="dropitems">Our Works</Link></li>
                    <li><Link activeClass="active" to="us" spy={true} smooth={true} offset={-70} duration={500} className="dropitems">Us</Link></li>
                    <li><Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="dropitems">Clients</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="dropitems">Contact</Link></li>
                </ul> */}
                <button className="dropbtn" onClick={()=> setShowLinks(!showLinks)}> 
                    <span class="material-icons-outlined">
                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                    </span>
                </button>
                
            </div> 
        </div>
    )
}

export default Navbar;