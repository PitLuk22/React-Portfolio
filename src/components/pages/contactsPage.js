import React from 'react'
// Animation
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

const ContactsPage = () => {
	return (
		<motion.div variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
			<h1>Contacts</h1>
		</motion.div>
	)
}

export default ContactsPage;
