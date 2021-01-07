import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
// Import GlobalStyle
import { GlobalStyle } from '../GlobalStyle';
// Import Components
import { AboutPage, WorksPage, ContactsPage } from '../pages';
import Nav from '../nav';
import WorkDetails from '../workDetails';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {

	const location = useLocation();

	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
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
			</AnimatePresence>
		</div>
	);
}

export default App;


