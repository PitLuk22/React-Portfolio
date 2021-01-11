import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 5rem 10rem;
	color: #fff;
	@media(max-width: 1300px) {
		flex-direction: column;
		text-align: center;
	}
	@media(max-width: 700px) {
		padding: 3rem 3rem;
	}
`;
export const Descr = styled(motion.div)`
	padding-right: 5rem;
	@media(max-width: 1300px) {
		padding: 0 0 4rem 0;
		p {
			padding: 2rem 0 2rem 0;
		}
	}
`;
export const Image = styled(motion.div)`
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

export const Hide = styled.div`
	overflow: hidden;
`;

// Wave
export const WaveSvg = styled.svg`
	position: absolute;
	left:-20px;
	z-index:-1;
`;

