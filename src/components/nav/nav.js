import React from 'react';
// Styles
import * as S from './style';

const Nav = () => {
	return (
		<S.Nav>
			<S.Logo>Portfolio</S.Logo>
			<ul>
				<li>
					<a href="#1">About Us</a>
				</li>
				<li>
					<a href="#2">Our Works</a>
				</li>
				<li>
					<a href="#3">Contacts</a>
				</li>
			</ul>
		</S.Nav>
	)
}

export default Nav;
