import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import GlobalStyle
import { GlobalStyle } from '../GlobalStyle';
// Import Components
import { AboutPage, WorksPage, ContactsPage } from '../pages';
import Nav from '../nav';
import WorkDetails from '../workDetails';

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalStyle />
				<Nav />
				<Switch>
					<Route path='/' exact component={AboutPage} />
					<Route path='/work' exact component={WorksPage} />
					<Route path='/work/:id' render={
						({ match }) => {
							const url = match.url;
							return <WorkDetails url={url} />;
						}
					} />
					<Route path='/contacts' component={ContactsPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;


