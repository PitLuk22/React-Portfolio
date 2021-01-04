import styled from 'styled-components';
import { About } from '../aboutSection/style';

export const Faq = styled(About)`
	display: block;
	.faq__title {
		padding-bottom: 2rem;
		span {
			display: block;
		}
	}
	
`;

export const Question = styled.div`
	padding: 3rem 0;
	cursor: pointer;
	h4 {
		font-size: 2rem;
		font-weight: lighter;
	}
	.answer {
		padding: 2rem 0;
	}
	p {
		padding: 1rem 0;
	}
	.faq-line {
		height: 4px;
		width: 100%;
		background-color: #fff;
		border-radius: 5px;
	}
`;