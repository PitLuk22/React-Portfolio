import styled from 'styled-components';
import { About } from '../aboutSection/style';
import { motion } from 'framer-motion';

export const Faq = styled(About)`
	padding-top:0 ;
	display: block;
	@media(max-width: 1300px) {
		padding-top: 3rem;
		text-align: left;
	}
	.faq__title {
		span {
			display: block;
		}
	}
`;

export const Answer = styled(motion.div)`
	padding-bottom: 3rem;
	p {
		padding: .5rem 0;
	}
`;