import React, { useState } from 'react';
// style
import * as S from './style';
// Animation
import { AnimatePresence, motion } from 'framer-motion';
import { mainColor } from '../GlobalStyle';
const Toggle = ({ title, children }) => {

	const [toggle, setToggle] = useState(true);
	const activeTab = toggle ? mainColor : '#fff'
		; return (
			<S.ToggleDiv layout onClick={() => setToggle(!toggle)}>
				<motion.h4 layout style={{ color: activeTab }}>{title}</motion.h4>
				<AnimatePresence>{toggle && children}</AnimatePresence>
				<div className="faq-line"></div>
			</S.ToggleDiv>
		)
}

export default Toggle;

// {toggle && children}  === {toggle ? children : null}