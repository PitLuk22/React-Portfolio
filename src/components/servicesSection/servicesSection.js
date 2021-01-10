import React from 'react';
// Import img
import servicesImg from '../../img/home2.png';
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';
// Styles
import * as S from './style';
//Animation
import { serviceScrollImg, serviceScrollCards } from '../animation';
import useScroll from '../useScroll';

const ServicesSection = () => {

	// Scrolling animation
	const [element, controls] = useScroll();

	return (
		<S.Service ref={element}>
			<S.Image variants={serviceScrollImg} animate={controls} initial='hidden'>
				<img src={servicesImg} alt="services" />
			</S.Image>
			<S.Description variants={serviceScrollCards} animate={controls} initial='hidden'>
				<div className="descr__title">
					<h2>High <span>quality</span> service.</h2>
				</div>
				<S.Cards>
					<S.Card>
						<div className="card__img">
							<img src={clock} alt="icon" />
							<h3 className='card__title'>Efficient</h3>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</S.Card>
					<S.Card>
						<div className="card__img">
							<img src={diaphragm} alt="icon" />
							<h3 className='card__title'>Affordable</h3>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</S.Card>
					<S.Card>
						<div className="card__img">
							<img src={money} alt="icon" />
							<h3 className='card__title'>Pro Grade Gear</h3>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</S.Card>
					<S.Card>
						<div className="card__img">
							<img src={teamwork} alt="icon" />
							<h3 className='card__title'>Teamwork</h3>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</S.Card>
				</S.Cards>
			</S.Description>
		</S.Service>
	)
}

export default ServicesSection;
