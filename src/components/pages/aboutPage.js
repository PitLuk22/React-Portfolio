import React from 'react'
import AboutSection from '../aboutSection';
import ServicesSection from '../servicesSection';
import FaqSection from '../faqSection';
import ScrollTop from '../scrollTop';
// Animation
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

const AboutPage = () => {
	return (
		<motion.div variants={pageAnimation} exit='exit' initial='hidden' animate='show' style={{ overflow: 'hidden' }}>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
			<ScrollTop />
		</motion.div>
	)
}

export default AboutPage;
