import "../../styles/navbar.css"

import {Link} from 'react-scroll';

function Navbar(){
    return(
        <div className="navbar">
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
                className="navitems">Home</Link>
                <Link 
                to="services" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navitems">Services</Link>
                <Link 
                to="ourworks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                className="navitems">Our Works</Link>
                <Link 
                activeClass="active" 
                to="us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                className="navitems">Us</Link>
                <Link 
                to="clients"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                className="navitems">Clients</Link>
                <Link 
                to="contact" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navitems">Contact</Link>
            </nav>
            <div className="dropdown">
                <button className="dropbtn"> 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div className="hamburguer">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div> 
        </div>
    )
}

export default Navbar;