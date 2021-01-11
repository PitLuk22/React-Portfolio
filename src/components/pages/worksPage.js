import React from 'react'
import Works from '../works';
// Animation
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';
// Components 
import ScrollTop from '../scrollTop';

const WorksPage = () => {
	return (
		<motion.div
			style={{ backgroundColor: '#fff' }}
			variants={pageAnimation}
			exit='exit'
			initial='hidden'
			animate='show'>
			<Works />
			<ScrollTop />
		</motion.div>
	)
}

export default WorksPage;
