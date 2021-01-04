import React from 'react'
import home from '../../img/home1.png';

const aboutSection = () => {
	return (
		<div className='about'>
			<div className="descr">
				<div className="about__title title">
					<div className="hide">
						<h2>We work to make</h2>
					</div>
					<div className="hide">
						<h2>your <span>dreams</span></h2>
					</div>
					<div className="hide">
						<h2>come true.</h2>
					</div>
					<p className='subtitle'>
						Contact us for any website or photography ideas that you have.
						<br />
						We have professionals with amazing skills to help you achieve it.
					</p>
				</div>
				<button className='about__btn btn'>Contact Us</button>
			</div>
			<div className="about__img">
				<img src={home} alt="a man" />
			</div>
		</div>
	)
}

export default aboutSection;
