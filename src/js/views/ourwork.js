import smarthome from "../../img/smarthome.jpg"
import onboard from "../../img/onboard.png"
import booking from "../../img/booking.png"
import juice from "../../img/juice-product.png"



function Ourwork(){
    return(
        <div className="ourwork" id="ourworks">
            <p className="work">Good design means <br/>
            good business</p>
            <div className="designs">
                <div className="design1">
                    <img className="smarthome" src={smarthome} alt="smarthome"/>
                    <div className="typeproduct">Full stack application</div>
                    <div className="product">Smart home dashboard</div>
                </div>
                <div className="design2">
                    <img className="onboard" src={onboard}/>
                    <div className="typeproduct">UX/UI design</div>  
                    <div className="product">Onboard application</div> 
                </div>
                <div className="design3">
                    <img className="booking" src={booking}/>
                    <div className="typeproduct">Mobile application</div>
                    <div className="product">Booking system</div>
                </div>
                <div className="design4">
                    <img className="juice" src={juice}/>
                    <div className="typeproduct">Front End application</div>
                    <div className="product">Juice product homepage</div>
                </div>
                <div className="container1">
                    <a className="more">see more 
                        <span className="material-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>                            </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ourwork;