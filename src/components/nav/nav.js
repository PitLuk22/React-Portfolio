import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import * as S from './style';

const Nav = () => {
	return (
		<S.Nav>
			<Link to="/">
				<S.Logo>Portfolio</S.Logo>
			</Link>
			<ul>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/work">Works</Link>
				</li>
				<li>
					<Link to="/contacts">Contacts</Link>
				</li>
			</ul>
		</S.Nav>
	)
}

export default Nav;
