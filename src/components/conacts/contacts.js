import React from 'react'
// Style
import * as S from './style';
// Animation
import { motion } from 'framer-motion';
import { title, subtitle, fromLeftToRight, block } from '../animation';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
	return (
		<>
			<S.ContactsContainer>
				<S.Hide>
					<S.Title variants={subtitle}>Get in touch</S.Title>
				</S.Hide>
				<div className='links'>
					<S.Block variants={block}>
						<S.Circle variants={fromLeftToRight}>
							<FontAwesomeIcon icon={faTelegramPlane} size='2x' color='#fff' />
						</S.Circle>
						<motion.h3 variants={title}>Send a message</motion.h3>
					</S.Block>
					<S.Block variants={block}>
						<S.Circle variants={fromLeftToRight}>
							<FontAwesomeIcon icon={faEnvelope} size='2x' color='#fff' />
						</S.Circle>
						<motion.h3 variants={title}>Send an email</motion.h3>
					</S.Block>
					<S.Block variants={block}>
						<S.Circle variants={fromLeftToRight}>
							<FontAwesomeIcon icon={faFacebook} size='2x' color='#fff' />
						</S.Circle>
						<motion.h3 variants={title}>Social media</motion.h3>
					</S.Block>
				</div>
			</S.ContactsContainer>
		</>
	)
}

export default Contacts;
