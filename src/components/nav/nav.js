import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Styles
import * as S from './style';

const Nav = () => {

	const location = useLocation();
	const setActiveClass = (selectedLink) => {
		return selectedLink === location.pathname ? 'active' : '';
	}

	return (
		<S.Nav>
			<S.Logo>Portfolio</S.Logo>
			<ul>
				<li>
					<Link to="/" className={setActiveClass('/')}>About</Link>
				</li>
				<li>
					<Link to="/work" className={setActiveClass('/work')}>Works</Link>
				</li>
				<li>
					<Link to="/contacts" className={setActiveClass('/contacts')}>Contacts</Link>
				</li>
			</ul>
		</S.Nav>
	)
}

export default Nav;
