import React from 'react';
// Import GlobalStyle
import { GlobalStyle } from '../GlobalStyle';
// Import Components
import { AboutPage } from '../pages';
import Nav from '../nav';;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AboutPage />
		</div>
	);
}

export default App;


