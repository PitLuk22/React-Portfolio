import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
//Images
import athlete from '../../img/athlete-small.png';
import theracer from '../../img/theracer-small.png';
import goodtimes from '../../img/goodtimes-small.png';
// Animation 
import { motion } from 'framer-motion';
import { colorFanContainer, colorFan, fade, fadeDelay, increaseWidth, increaseWidthDelay, image } from '../animation';
import useScroll from '../useScroll';

const Works = () => {

	const [element, controls] = useScroll();
	const [element1, controls1] = useScroll();
	const [element2, controls2] = useScroll();

	return (
		<S.WorksContainer>

			<motion.div variants={colorFanContainer}>
				<S.Frame1 variants={colorFan} />
				<S.Frame2 variants={colorFan} />
				<S.Frame3 variants={colorFan} />
				<S.Frame4 variants={colorFan} />
			</motion.div>

			<motion.div ref={element1} animate={controls1} initial='hidden' className='work' >
				<motion.h2 variants={fadeDelay} >Athlete</motion.h2>
				<motion.div variants={increaseWidthDelay} className="divider"></motion.div>
				<Link to='/work/the-athlete'>
					<S.Hide>
						<motion.img variants={image} src={athlete} alt="athlete" />
					</S.Hide>
				</Link>
			</motion.div>
			<motion.div ref={element} animate={controls} initial='hidden' className='work'>
				<motion.h2 variants={fade}>The racer</motion.h2>
				<motion.div variants={increaseWidth} className="divider"></motion.div>
				<Link to='/work/the-racer'>
					<S.Hide>
						<motion.img variants={image} src={theracer} alt="theracer" />
					</S.Hide>
				</Link>
			</motion.div>
			<motion.div ref={element2} animate={controls2} initial='hidden' className='work'>
				<motion.h2 variants={fade}>Good times</motion.h2>
				<motion.div variants={increaseWidth} className="divider"></motion.div>
				<Link to='/work/good-times'>
					<S.Hide>
						<motion.img variants={image} src={goodtimes} alt="goodtimes" />
					</S.Hide>
				</Link>
			</motion.div>
		</S.WorksContainer>
	)
}

export default Works;
