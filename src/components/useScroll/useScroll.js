import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const useScroll = () => {
	const controls = useAnimation();
	const [element, inView] = useInView({ threshold: .5, triggerOnce: true });

	if (inView) {
		controls.start('show')
	} else {
		controls.start('hidden')
	}

	return [element, controls, inView];
}

export default useScroll;
