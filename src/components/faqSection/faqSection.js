import React from 'react';
// Styles 
import * as S from './style';

const FaqSection = () => {
	return (
		<S.Faq>
			<div className="faq__title">
				<h2>
					Any questions?
					<span>FAQ</span>
				</h2>
			</div>
			<S.Question>
				<h4>How do I start?</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
				<div className="faq-line"></div>
			</S.Question>
			<S.Question>
				<h4>What products do you offer?</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
				<div className="faq-line"></div>
			</S.Question>
			<S.Question>
				<h4>Different payments methods</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
				<div className="faq-line"></div>
			</S.Question>
			<S.Question>
				<h4>Daily schedule</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
				<div className="faq-line"></div>
			</S.Question>
		</S.Faq>
	)
}


export default FaqSection;
