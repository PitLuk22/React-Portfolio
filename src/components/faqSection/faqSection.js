import React from 'react';
// Styles 
import * as S from './style';
// Animation
import { AnimateSharedLayout } from "framer-motion";
import { tabs, onScroll } from '../animation';
import useScroll from '../useScroll';
// Components
import Toggle from '../toggle';

const FaqSection = () => {

	const [element, controls] = useScroll();

	return (
		<S.Faq ref={element} variants={onScroll} initial='hidden' animate={controls}>
			<div className="faq__title">
				<h2>
					Any questions?
					<span>FAQ</span>
				</h2>
			</div>
			<AnimateSharedLayout>
				<Toggle title={'How do I start?'}>
					<S.Answer layout variants={tabs} initial='hidden' animate='show' exit='exit'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.
						Lorem ipsum dolor sit amet.
						</p>
					</S.Answer>
				</Toggle>
				<Toggle title={'What products do you offer?'}>
					<S.Answer layout variants={tabs} initial='hidden' animate='show' exit='exit'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed cupiditate aut sapiente vitae laboriosam.
						</p>
					</S.Answer>
				</Toggle>
				<Toggle title={'Different payments methods'}>
					<S.Answer layout variants={tabs} initial='hidden' animate='show' exit='exit'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum assumenda odio laudantium consequatur. Corrupti illum et mollitia earum eligendi ducimus ratione rerum. Voluptate, laborum.
						</p>
					</S.Answer>
				</Toggle>
				<Toggle title={'Daily schedule'}>
					<S.Answer layout variants={tabs} initial='hidden' animate='show' exit='exit'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore eaque sapiente, et maxime quisquam animi velit magni eius voluptatum quam dolores fugit hic doloribus voluptate similique itaque illum assumenda labore nam placeat quod ex aspernatur. Natus fugit illo quasi autem ut aspernatur harum distinctio tenetur quas in tempore ipsam odio beatae, explicabo repellendus aliquam!
						</p>
					</S.Answer>
				</Toggle>
			</AnimateSharedLayout>
		</S.Faq>
	)
}


export default FaqSection;
