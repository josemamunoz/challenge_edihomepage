import "../../styles/navbar.css"
/* import { Link } from "react-router-dom"; */
import {Link} from 'react-scroll';

/* import Home from "./home";
import Services from "./services";
import Ourwork from "./ourwork";
import Clients from "./clients"
import Contact from "./contact"; */

function Navbar(){
    return(
        <div className="header">
            <div className="brand">
                <p className="developer">Edie</p>
            </div>
            <nav>
                <Link 
                activeClass="active" 
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                className="navbar">Home</Link>
                <Link 
                to="services" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar">Services</Link>
                <Link 
                to="ourworks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                className="navbar">Our Works</Link>
                <Link 
                to="clients"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                className="navbar">Clients</Link>
                <Link 
                to="contact" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar;