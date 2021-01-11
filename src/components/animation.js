export const pageAnimation = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { duration: .25, staggerChildren: 0.3 },

	},
	exit: {
		opacity: 0,
		y: 300,
		transition: { duration: .25 }
	}
}

export const block = {
	hidden: { opacity: 0 },
	show: { opacity: 1 }
}

export const title = {
	hidden: { opacity: 0, x: 100 },
	show: { opacity: 1, x: 0, }
}
export const fromLeftToRight = {
	hidden: { opacity: 0, x: -100 },
	show: { opacity: 1, x: 0, }
}

export const subtitle = {
	hidden: { y: 200 },
	show: { y: 0, transition: { ease: 'easeOut' } }
}

export const fade = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: .5 } }
}

export const image = {
	hidden: { opacity: 0, scale: 1.5 },
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1, delay: .5 }
	}
}

export const increaseWidth = {
	hidden: { width: '0%' },
	show: { width: '100%', transition: { duration: 1 } }
}

// ColorFan 
export const colorFanContainer = {
	hidden: { opacity: 1 },
	show: { opacity: 1, transition: { ease: 'easeOut', staggerChildren: .15 } }
}
export const colorFan = {
	hidden: { x: '-130%', skew: '50deg', },
	show: { x: '100%', skew: '0deg', transition: { ease: 'easeOut', duration: .8 } }
}

export const tabs = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: .7 } },
	exit: { opacity: 0, transition: { duration: .2 } }
}

// Section scroll animate
export const onScroll = {
	hidden: { opacity: 0, scale: 0.9 },
	show: { opacity: 1, scale: 1, transition: { duration: .5, ease: 'linear' } }
}
export const serviceScrollImg = {
	hidden: { opacity: 0, x: '-50%', transition: { duration: .5 } },
	show: { opacity: 1, x: '0%', transition: { duration: .5 } }
}
export const serviceScrollCards = {
	hidden: { opacity: 0, x: '50%', transition: { duration: .5 } },
	show: { opacity: 1, x: '0%', transition: { duration: .5 } }
}

