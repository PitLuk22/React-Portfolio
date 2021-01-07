import React from 'react';
// Components
import Wave from './wave';
// Import img
import home from '../../img/home1.png';
// Styles
import * as S from './style';
// Animation
import { motion } from 'framer-motion';
import { title, subtitle, fade, image } from '../animation';
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
				<motion.div>
					<div>
						<motion.h2 variants={title}>We work to make</motion.h2>
					</div>
					<div>
						<motion.h2 variants={title}>your <span>dreams</span> come</motion.h2>
					</div>
					<div>
						<motion.h2 variants={title}>true.</motion.h2>
					</div>
					<S.Hide>
						<motion.p variants={subtitle}>
							Contact us for any website or photography ideas that you have.
						<br />
						We have professionals with amazing skills to help you achieve it.
						</motion.p>
					</S.Hide>
				</motion.div>
				<motion.button
					variants={fade}
					onClick={rippleEffect}
					className='about__btn btn'>
					<b>Contact Us</b>
				</motion.button>
			</S.Descr>
			<S.Image >
				<motion.img variants={image} initial='hidden' animate='show' src={home} alt="home" />
			</S.Image>
			<Wave />
		</S.About>
	)
}

export default aboutSection;
