import React from 'react';
// Import img
import servicesImg from '../../img/home2.png';
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';

const ServicesSection = () => {
	return (
		<div className='services'>
			<div className="services__img">
				<img src={servicesImg} alt="services img" />
			</div>
			<div className="services__descr descr">
				<div className="descr__title">
					<h2>High quality service.</h2>
				</div>
				<div className="sescr__cards">
					<div className="card">
						<div className="card__img">
							<img src={clock} alt="icon" />
							<div className='card__title'>Efficient</div>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
					<div className="card">
						<div className="card__img">
							<img src={diaphragm} alt="icon" />
							<div className='card__title'>Affordable</div>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
					<div className="card">
						<div className="card__img">
							<img src={money} alt="icon" />
							<div className='card__title'>Pro Grade Gear</div>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
					<div className="card">
						<div className="card__img">
							<img src={teamwork} alt="icon" />
							<div className='card__title'>Teamwork</div>
						</div>
						<p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServicesSection;
