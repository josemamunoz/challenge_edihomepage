import React from "react";
/* import { BrowserRouter, Route, Switch } from "react-router-dom"; */

/* import injectContext from "./js/store/appContext"; */

import Navbar from "./js/views/navbar"
/* import { Footer } from "./js/component/footer"; */
/* import { Search } from "./js/component/search"; */
import Home from "./js/views/home";
import Services from "./js/views/services";
import Ourwork from "./js/views/ourwork";
import Clients from "./js/views/clients"
import Contact from "./js/views/contact";
import Us from "./js/views/us";



//create your first component
export const Layout = () => {

	return (
		<div className="Layout">
			<div className="container">
				<Navbar />
				<Home/>
				<Services/>
				<Ourwork/>
				<Us/>
				<Clients/>
			</div>
			<Contact/>
		</div>
	);
};

export default Layout;
