import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import GlobalStyle
import { GlobalStyle } from '../GlobalStyle';
// Import Components
import { AboutPage, WorksPage, ContactsPage } from '../pages';
import Nav from '../nav';;

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalStyle />
				<Nav />
				<Switch>
					<Route path='/about' component={AboutPage} />
					<Route path='/works' component={WorksPage} />
					<Route path='/contacts' component={ContactsPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;


