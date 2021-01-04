import React from 'react';
// Import GlobalStyle
import GlobalStyle from '../GlobalStyle';
// Import Pages
import { AboutPage } from '../pages';;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<AboutPage />
		</div>
	);
}

export default App;


