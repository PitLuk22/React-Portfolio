import styled from 'styled-components';


export const About = styled.div`
	min-height: 90vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 5rem 10rem;
	color: #fff;
`;
export const Descr = styled.div`
	padding-right: 5rem;
`;
export const Image = styled.div`
	overflow: hidden;
	img {
		width: 32vw;
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

