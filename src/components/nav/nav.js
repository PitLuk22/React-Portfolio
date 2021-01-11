import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Styles
import * as S from './style';

const Nav = () => {

	const { pathname } = useLocation();
	const getWidth = (path) => pathname === path ? '100%' : '0%';

	return (
		<S.Nav>
			<S.Logo>Portfolio</S.Logo>
			<ul>
				<li>
					<Link to="/">About</Link>
					<S.Line
						transition={{ duration: 0.5 }}
						initial={{ width: '0%' }}
						animate={{ width: getWidth('/') }} />
				</li>
				<li>
					<Link to="/work">Works</Link>
					<S.Line
						transition={{ duration: 0.5 }}
						initial={{ width: '0%' }}
						animate={{ width: getWidth('/work') }} />
				</li>
				<li>
					<Link to="/contacts">Contacts</Link>
					<S.Line
						transition={{ duration: 0.5 }}
						initial={{ width: '0%' }}
						animate={{ width: getWidth('/contacts') }} />
				</li>
			</ul>
		</S.Nav>
	)
}

export default Nav;
