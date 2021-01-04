import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
	body {
		background: #1b1b1b;
	}
	button {
		position: relative;
		overflow: hidden;
		font-weight: bold;
		font-size: 1.1rem;
		border: 3px solid #23d997;
		color: #fff;
		cursor: pointer;
		padding: 1rem 2rem;
		background: transparent;
		transition: all .5s ease;
		&:hover {
			background-color: #23d997;
			color: #000;
		}
		b {
			position: relative;
			z-index: 10;
			pointer-events: none;
		}
		span {
			position: absolute;
			transform: translate(-50%, -50%);
			background: #fff;
			border-radius: 50%;
			animation: ripple 0.6s linear infinite;
			pointer-events: none;
		}
		
	}
	h1,h2 {
		font-weight: bold;
		font-size: 4rem;
		color: #fff;
	}
	h3 {
		font-weight: lighter;
		color: #fff;
		font-size: 3rem;
	}
	h4 {
		font-weight: bold;
		color: #fff;
		font-size: 3rem;
	}
	p {
		padding: 3rem 0rem;
		font-size: 1.4rem;
		line-height: 150%;
		color: #ccc;
	}
	span {
		color: #23d997;
	}
	a {
		font-size: 1.1rem;
	}



	@keyframes ripple {
	0% {
		width: 0px;
		height: 0px;
		opacity: 1;
	}

	100% {
		width: 500px;
		height: 500px;
		opacity: 0;
	}
}

`;

export default GlobalStyle;
