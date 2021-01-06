import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
//Images
import athlete from '../../img/athlete-small.png';
import theracer from '../../img/theracer-small.png';
import goodtimes from '../../img/goodtimes-small.png';


const Works = () => {
	return (
		<S.WorksContainer>
			<div className='work'>
				<h2 className="title">Athlete</h2>
				<div className="divider"></div>
				<Link to='/work/the-athlete'>
					<img src={athlete} alt="athlete" />
				</Link>
			</div>
			<div className='work'>
				<h2 className="title">The racer</h2>
				<div className="divider"></div>
				<Link to='/work/the-racer'>
					<img src={theracer} alt="theracer" />
				</Link>
			</div>
			<div className='work'>
				<h2 className="title">Good times</h2>
				<div className="divider"></div>
				<Link to='/work/good-times'>
					<img src={goodtimes} alt="goodtimes" />
				</Link>
			</div>
		</S.WorksContainer>
	)
}

export default Works;
