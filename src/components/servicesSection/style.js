import styled from 'styled-components';
import { About, Descr, Image } from '../aboutSection/style';

export const Service = styled(About)`
	h2 {
		padding-bottom: 2.8rem;
	}
	p {
		width: 70%;
		padding: 2rem 0 4rem 0;
	}
	@media(max-width: 1300px) {
		flex-direction: column-reverse;
	}
`;
export const Description = styled(Descr)`
	padding-left: 5rem;
	padding-right:0;
	width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media(max-width: 1300px) {
		padding: 0;
		width: 80%;
	}
`;

export const Cards = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 3rem 0 0 0;
	@media(max-width: 1300px) {
		justify-content: space-around;
		padding: 3rem 0 3rem 0;
	}
	@media(max-width: 490px) {
		justify-content: center;
	}
`;
export const Card = styled.div`
	flex-basis: 18rem;
	@media(max-width: 1300px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.card__img {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		img {
			margin-right: 2rem;
		}
		.card__title {
			padding: .4rem 1rem;
			background-color: #fff;
			border-radius: 5px;
			color: #000;
		}
	}
`;


export { Image }