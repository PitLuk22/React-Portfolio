import React from 'react';
import styled from 'styled-components';
// Import img
import home from '../../img/home1.png';


const aboutSection = () => {

	const rippleEffect = (event) => {
		let x = event.pageX - event.target.offsetLeft;
		let y = event.pageY - event.target.offsetTop;
		const ripple = document.createElement("span");
		ripple.style.left = `${x}px`;
		ripple.style.top = `${y}px`;
		event.target.appendChild(ripple);
		setTimeout(function () {
			ripple.remove();
		}, 600);
	}

	return (
		<S.About>
			<S.Descr>
				<div className="about__title title">
					<S.Hide>
						<h2>We work to make</h2>
					</S.Hide>
					<S.Hide>
						<h2>your <span>dreams</span> come</h2>
					</S.Hide>
					<S.Hide>
						<h2>true.</h2>
					</S.Hide>
					<p className='subtitle'>
						Contact us for any website or photography ideas that you have.
						<br />
						We have professionals with amazing skills to help you achieve it.
					</p>
				</div>
				<button
					onClick={rippleEffect}
					className='about__btn btn'>
					<b>Contact Us</b>
				</button>
			</S.Descr>
			<S.Image>
				<img src={home} alt="a man" />
			</S.Image>
		</S.About>
	)
}

// Styled components
const S = {};

S.About = styled.div`
	min-height: 90vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5rem 10rem;
	color: #fff;
`;
S.Descr = styled.div`
	padding-right: 5rem;
`;
S.Image = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;
S.Hide = styled.div`
	overflow: hidden;
`;


export default aboutSection;
