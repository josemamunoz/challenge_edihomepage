import "../../styles/home.css"
import heroImage from "../../img/heroImage.jpg"

function Home(){
    return(
        <div className="home" id="home">
            <p className="question1">Unhappy with your website?</p>
            <h1 className="hometitle">We create beautiful<br/>
            and fast web services</h1>
            <img src={heroImage} alt="HeroImage"/>
            <h1 className="text2">Story, emotion <br/>
            and purpose</h1>
            <p className="text3">We help transform your ideas into real <br/>
            world applications that will outperform <br/>
            your toughest competition and help you <br/>
            achieve your strategic goals in short <br/> 
            period of time.</p>
            <p className="question2">
                Whant us to contact you?
            </p>
            <form className="contactform">
                <input className="rectangle32" type="email" name="mail" placeholder="Email"/>
                <input className="rectangle33" type="submit" value="Join"/>
            </form>
            
        </div>
    )
}

export default Home;