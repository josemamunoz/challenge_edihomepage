import "../../styles/contact.css"

import {Link} from 'react-scroll';

import Instagram from "../../svg/instagram.svg"
import Linkedin from "../../svg/linkedin.svg"
import Twitter from "../../svg/twitter.svg"


function Contact(){
    return(
        <div className="containerContact">
            <div className="contact" id="contact">
            <div className="navigation">
                <ul>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="footeritems">Home</Link></li>
                    <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500} className="footeritems">Services</Link></li>
                    <li><Link activeClass="active" to="ourworks" spy={true} smooth={true} offset={-70} duration={500} className="footeritems">Our Works</Link></li>
                    <li><Link activeClass="active" to="us" spy={true} smooth={true} offset={-70} duration={500} className="footeritems">Us</Link></li>
                    <li><Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="footeritems">Clients</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="footeritems">Contact</Link></li>
                </ul>
            </div>
            <div className="socialmedia">
                <div classname="socialmediaName">
                    Edie
                </div>
                <div className="socialmediaLinks">
                    <img src={Instagram} alt="Instagram1"/>
                    <img src={Linkedin} alt="Linkedin1"/>
                    <img src={Twitter} alt="Twitter1"/>
                </div>
            </div>
            <div className="contactus">
                <p className="question3">
                Whant us to contact you?
            </p>
            <form className="contactusform">
                <input className="rectangle32" type="email" name="mail" placeholder="Email"/>
                <input className="rectangle33" type="submit" value="Join"/>
            </form>
            </div>
        </div>
        <div className="credits">
            created by <a target="_blank" rel="noreferrer" href="https://devchallenges.io/portfolio/josemamunoz" className="linksexternos">josemamunoz</a> - <a target="_blank" rel="noreferrer" href="https://devchallenges.io/" className="linksexternos">devchallenges.io</a>
        </div>
        </div>
        
            
        
    )
}

export default Contact;