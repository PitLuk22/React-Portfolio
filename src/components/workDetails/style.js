import styled from 'styled-components';
import { mainColor } from '../GlobalStyle';
export const ProjectContainer = styled.div`
	max-height: 100vh;
	width: 100%;
	position: relative;
`;
export const HeadLine = styled.div`
	h2 {
		position: absolute;
		bottom: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		z-index: 2;
		font-size: 5rem;
		text-shadow: 4px 4px 3px rgba(0, 0, 0, 1);	}
	img {
		width: 100%;
		max-height: 70vh;
		object-fit: cover;
		object-position: 50% 20%;
	}
`;
export const Description = styled.div`
	min-height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap:wrap;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;
	margin: 4rem;
	h3 {
		font-size: 1.5rem;
	}
	.divider {
		height: .4rem;
		width: 100%;
		background-color: ${mainColor};
		margin: 1rem 0;
		border-radius: 5px;
	}
	p {
		padding: 2rem 0;
	}
`;
export const ImageDispaly = styled.div`
	min-height: 80vh;
	img {
		width: 100%;

	}
`;