import styled from 'styled-components';
import { mainColor } from '../GlobalStyle';

export const Nav = styled.nav`
	position: relative;
	min-height: 80px;
	width: 100%;
	background-color: #131313;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	padding: 0 10rem;
	z-index: 1000;
	a {
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style:none;
		li {
			position: relative;
			padding-right: 6rem;
			
			a {
				text-decoration: none;
				color: #fff;
				transition: all .3s ease;
				&:hover {
					color: ${mainColor}; 
				}
			}
			.active {
				color: ${mainColor};
			}
		}
		li:last-child {
			padding-right: 0;
		}
	}
	
`;

export const Logo = styled.h1`
	font-size: 1.5rem;
	font-family: 'Lobster', cursive;
	font-weight: lighter;
`;