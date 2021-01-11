import styled from 'styled-components';
import { mainColor } from '../GlobalStyle';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
	position: sticky;
	top:0;
	min-height: 80px;
	width: 100%;
	background-color: #171717;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	padding: 0 10rem;
	z-index: 10;
	@media(max-width: 1300px) {
		flex-direction: column;
		justify-content: space-around;
		min-height: 100px;
		padding-bottom: 1rem;
	}
	a {
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style:none;
		li {
			position: relative;
			margin-right: 3rem;
			padding: 0 1rem 0 1rem;
			a {
				text-decoration: none;
				color: #fff;
				transition: all .3s ease;
				font-family: 'Hachi Maru Pop', cursive;
				&:hover {
					color: ${mainColor}; 
				}
			}
		}
		li:last-child {
			margin-right: 0;
		}
	}
	
`;

export const Logo = styled.h1`
	font-size: 1.5rem;
	font-family: 'Hachi Maru Pop', cursive;
	font-weight: lighter;
`;

export const Line = styled(motion.div)`
	position: absolute;
	height: .3rem;
	width: 100%;
	background-color: ${mainColor};
	border-radius: 2px;
	bottom: -80%;
	left: 0;
`;