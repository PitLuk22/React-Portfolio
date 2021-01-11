import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainColor } from '../GlobalStyle';

export const Hide = styled.div`
	overflow: hidden;
`;
export const Block = styled(motion.div)`
	display: flex;
	align-items: center;
	padding-bottom: 1.5rem;
	cursor: pointer;
`;

export const Title = styled(motion.h2)`
	padding-bottom: 2rem ;
	color: ${mainColor};
`;

export const ContactsContainer = styled.div`
	padding: 5rem 10rem;
	min-height: 60vh;  
	overflow: hidden; 
	h3 {
		font-size: 1.5rem;
		font-weight: 500;
	}
	@media (max-width: 1300px) {
		padding: 3rem;
	}
`;
export const Circle = styled(motion.div)`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	margin-right: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Frame = styled(motion.div)`
	position: fixed;
	min-height: 1000px;
	width: 2000px;
	background-color: #ff9900;
`;