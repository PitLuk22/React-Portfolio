import React from 'react'
// Components
import Contacts from '../conacts';
import ScrollTop from '../scrollTop';
// Animation
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

const ContactsPage = () => {
	return (
		<motion.div
			variants={pageAnimation}
			exit='exit'
			initial='hidden'
			animate='show'>
			<Contacts />
			<ScrollTop />
		</motion.div>
	)
}

export default ContactsPage;
