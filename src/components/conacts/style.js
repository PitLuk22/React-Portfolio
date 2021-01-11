import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

export const ContactsContainer = styled.div`
	padding: 5rem 10rem;
	min-height: 90vh;  
	h3 {
		font-size: 1.5rem;
		font-weight: 500;
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