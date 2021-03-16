import "../../styles/clients.css"

import person4 from "../../img/person4.png"


function Clients(){
    return(
        <div className="clients">
            <div className="clientsContainer" id="clients">
                <div className="clientsSupport">
                    <p className="message">“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”</p>
                    <div className="firstClient">
                        <img src={person4} alt="Person4" id="person4"/>
                        <p className="clientsName">Carlos Tran</p>
                        <p className="clientsCompany">The Decorate Gatsby</p>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Clients;