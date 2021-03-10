import "../../styles/services.css"



function Services(){
    return(
        <div className="services" id="services">
            <p className="offer">We offer high <br/>
            hdemand services</p>
            <div className="cards">
                <div className="card1">
                    <div className="rectangle37">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="40px" height="40px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>                    
                        </div>
                    <div className="title">
                        UI/UX Design
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit. Duis a <br/>
                        metus ac nulla consequat aliquet<br/>
                         id quis turpis.
                    </div>
                    <div>
                        <input className="startbutton" type="submit" value="Get started"/>
                    </div>
                </div>
                <div className="card2">
                    <div className="rectangle38">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="40px" height="40px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>                    </div>
                    <div className="title">
                        Front End Design
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit. Duis a <br/>
                        metus ac nulla consequat aliquet<br/>
                         id quis turpis.
                    </div>
                    <div>
                        <input className="startbutton" type="submit" value="Get started"/>
                    </div>
                </div>
                <div className="card3">
                    <div className="rectangle39">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="40px" height="40px"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>                    </div>
                    <div className="title">
                        Back End
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit. Duis a <br/>
                        metus ac nulla consequat aliquet<br/>
                         id quis turpis.
                    </div>
                    <div>
                        <input className="startbutton" type="submit" value="Get started"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;

