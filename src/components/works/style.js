import styled from 'styled-components';
import { mainColor } from '../GlobalStyle';
import { Hide } from '../aboutSection/style';
import { motion } from 'framer-motion';

export const WorksContainer = styled.div`
	position: relative;
	min-height: 100vh;
	padding: 2rem 10rem;
	overflow: hidden;
	.work {
		margin-bottom: 3rem;
	}
	h2 {
		color: #2e2e2e;
		padding: 2rem 0 1rem 0;
	}
	.divider {
		height: .4rem;
		width: 100%;
		background-color: ${mainColor};
		margin-bottom: 2rem;
	}
	img {
		width: 100%;
		max-height: 70vh;
		object-fit: cover;
	}
`;

export const Frame1 = styled(motion.div)`
	position: fixed;
	top: 80px;
	left: 0;
	width:150%;
	height: 150vh; 
	background-color:#FF6B66;
	z-index: 2;
`;

export const Frame2 = styled(Frame1)`
	background-color: #FFB866;
`;
export const Frame3 = styled(Frame1)`
	background-color: #80C4B7;
`;
export const Frame4 = styled(Frame1)`
	background-color: #16204D;
`;
export { Hide };