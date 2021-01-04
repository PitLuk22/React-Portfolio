import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import * as S from './style';

const Nav = () => {
	return (
		<S.Nav>
			<Link to="/about">
				<S.Logo>Portfolio</S.Logo>
			</Link>
			<ul>
				<li>
					<Link to="/about">About Us</Link>
				</li>
				<li>
					<Link to="/works">Our Works</Link>
				</li>
				<li>
					<Link to="/contacts">Contacts</Link>
				</li>
			</ul>
		</S.Nav>
	)
}

export default Nav;
