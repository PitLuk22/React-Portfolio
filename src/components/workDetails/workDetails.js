import React, { useState, useEffect } from 'react';
import { ProjectsState } from '../../projectsState';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';

const WorkDetails = ({ url }) => {

	const [projects, setProjects] = useState(ProjectsState());
	const [project, setProject] = useState(null);

	useEffect(() => {
		const currentProject = projects.find(item => item.url === url);
		setProject(currentProject);
	}, [projects, project, url]);

	if (!project) {
		return null;
	}

	const { head, mainImg, secondaryImg, awards } = project;

	return (
		<S.ProjectContainer>
			<S.HeadLine>
				<h2>{head}</h2>
				<img src={mainImg} alt={head} />
			</S.HeadLine>
			<S.Description>
				{awards.map(({ title, description }) => {
					return <View key={uuidv4()} title={title} description={description} />
				})}
			</S.Description>
			<S.ImageDispaly>
				<img src={secondaryImg} alt={head} />
			</S.ImageDispaly>
		</S.ProjectContainer>
	)
}

const View = ({ title, description }) => {
	return (
		<S.Card>
			<h3>{title}</h3>
			<div className="divider"></div>
			<p>{description}</p>
		</S.Card>
	)
}

export default WorkDetails;
