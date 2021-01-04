import React from 'react';
import styled from 'styled-components';

const FaqSection = () => {
	return (
		<div className='faq'>
			<div className="faq__title">
				<h3>
					Any question?
					<span>FAQ</span>
				</h3>
			</div>
			<div className="faq__question question">
				<h4>How do I start?</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
			</div>
			<div className="faq__question question">
				<h4>What products do you offer?</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
			</div>
			<div className="faq__question question">
				<h4>Different payments methods</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
			</div>
			<div className="faq__question question">
				<h4>Daily schedule</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, cumque.</p>
				</div>
			</div>
		</div>
	)
}


export default FaqSection;
