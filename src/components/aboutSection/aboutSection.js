import React from 'react';
// Import img
import home from '../../img/home1.png';
// Styles
import * as S from './style';
// Animation
import { motion } from 'framer-motion';

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

	const container = {
		hidden: {},
		show: { transition: { duration: 1, staggerChildren: 0.4 } }
	}

	const title = {
		hidden: { opacity: 0, x: 100 },
		show: { opacity: 1, x: 0 }
	}


	return (
		<S.About>
			<S.Descr>
				<motion.div variants={container} initial='hidden' animate='show'>
					<S.Hide>
						<motion.h2 variants={title}>We work to make</motion.h2>
					</S.Hide>
					<S.Hide>
						<motion.h2 variants={title}>your <span>dreams</span> come</motion.h2>
					</S.Hide>
					<S.Hide>
						<motion.h2 variants={title}>true.</motion.h2>
					</S.Hide>
					<p>
						Contact us for any website or photography ideas that you have.
						<br />
						We have professionals with amazing skills to help you achieve it.
					</p>
				</motion.div>
				<button
					onClick={rippleEffect}
					className='about__btn btn'>
					<b>Contact Us</b>
				</button>
			</S.Descr>
			<S.Image>
				<img src={home} alt="home" />
			</S.Image>
		</S.About>
	)
}

export default aboutSection;
