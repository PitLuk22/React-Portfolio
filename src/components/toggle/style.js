import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToggleDiv = styled(motion.div)`
	cursor: pointer;
	h4 {
		font-size: 1.6rem;
		font-weight: lighter;
		padding: 3rem 2rem 1rem 0;
		transition: color .3s ease;
	}
	.faq-line {
		height: 4px;
		width: 100%;
		background-color: #fff;
		border-radius: 5px;
	}
`;