import "../../styles/us.css"

import person1 from "../../img/person1.png"
import person2 from "../../img/person2.png"
import person3 from "../../img/person3.png"


function Us(){
    return(
        <div className="usContainer" id="us">
            <div className="usContent">
                <p className="us1">Meet the team</p>
                <p className="us2">We are chilled and laidback team</p>
                <p className="us3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="usImg">
                <img src={person1} alt="Person1" id="person1"/>
                <img src={person2} alt="Person2" id="person2"/>
                <img src={person3} alt="Person3" id="person3"/>
            </div>
        </div>
            
        
    )
}

export default Us;