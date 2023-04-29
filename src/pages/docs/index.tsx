import React, { useState } from 'react';
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom';
import docs from './index.scss';

interface DocsType {
	Lan?: any;
}

const Docs: React.FC<DocsType> = (props) => {
	document.title = useLoaderData() as string;
	const {
		icon,
		name,
		position,
		salary,
		age,
		ageNumber,
		mailbox,
		mailboxNumber,
		telephone,
		telephoneNumber,
		github,
		expectedPosition,
		expectedSalary,
		personalProjects,
		personalProjectsURL,
		educationExperience,
		educationExperienceList,
		educationExperienceContent,
		professionalSkills,
		professionalSkillsList,
		projectExperience,
		projectExperienceContent,
		selfEvaluation,
		projectName,
		selfEvaluationContent,
		projectDescription,
		projectTechnology,
		projectContent,
	} = props.Lan;
	const location = useLocation();
	const navigator = useNavigate();
	const [state, setState] = useState<boolean>(false);
	React.useEffect(() => {
		if (location.pathname !== '/en-us/docs') {
			setState(false);
		} else {
			setState(true);
		}
		if (
			!sessionStorage.getItem('token') ||
			sessionStorage.getItem('token') !== 'true'
		) {
			navigator('/');
		}
	}, [location.pathname, navigator]);
	return (
		<>
			<article id={docs.content}>
				<div className={docs.content}>
					<article className={docs.docs}>
						<div className={docs.me_header}>
							<div className={docs.languages}>
								{state ? (
									<iconpark-icon
										class={docs.languageIcon}
										name='chinese'
										onClick={() => {
											navigator('/zh-cn/docs');
										}}
									></iconpark-icon>
								) : (
									<iconpark-icon
										class={docs.languageIcon}
										name='english'
										onClick={() => {
											navigator('/en-us/docs');
										}}
									></iconpark-icon>
								)}
							</div>
							<div className={docs.me}>
								<img src={icon} alt='' />
								<div className={docs.mes}>
									<span className={docs.name}>{name}</span>
									<span className={docs.position}>
										{expectedPosition}： {position}
									</span>
									<span>
										{expectedSalary}： {salary}
									</span>
								</div>
							</div>
							<div className={docs.contact}>
								<div>
									<span>
										<iconpark-icon
											class={docs.icon}
											name='calendar-thirty-two'
										></iconpark-icon>
										{age}：{ageNumber}
									</span>
									<span>
										<iconpark-icon
											class={docs.icon}
											name='send-email-924jll8g'
										></iconpark-icon>
										{mailbox}：
										<a href={`mailto:${mailboxNumber}`}>{mailboxNumber}</a>
									</span>
									<span>
										<iconpark-icon
											class={docs.icon}
											name='phone-outgoing'
										></iconpark-icon>
										{telephone}：{telephoneNumber}
									</span>
								</div>
								<div>
									<span>
										<iconpark-icon
											class={docs.icon}
											name='github'
										></iconpark-icon>
										Github：
										<a
											href='https://github.com/212063551'
											target='_blank'
											rel='noopener noreferrer'
										>
											{github}
										</a>
									</span>
									<span>
										<iconpark-icon
											class={docs.icon}
											name='source-code'
										></iconpark-icon>
										{personalProjects}：
										<a
											href={personalProjectsURL}
											target='_blank'
											rel='noopener noreferrer'
										>
											{personalProjectsURL}
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className={docs.education}>
							<h3>{educationExperience}</h3>
							<div className={docs.contents}>
								{educationExperienceList.map((item: any, index: React.Key) => {
									return (
										<header key={index}>
											<span>
												<span>{item.startDate}</span>-
												<span>{item.endDate}</span>
											</span>
											<span>{item.professional}</span>
											<span>{item.school}</span>
											<span> {item.degree} </span>
										</header>
									);
								})}
								<div>
									<ul>
										{educationExperienceContent.map(
											(item: any, index: React.Key) => {
												return <li key={index}>{item.content}</li>;
											}
										)}
									</ul>
								</div>
							</div>
						</div>
						<div className={docs.skills}>
							<h3>{professionalSkills}</h3>
							<div className={docs.contents}>
								<ul>
									{professionalSkillsList.map((item: any, index: React.Key) => {
										return <li key={index}>{item.content}</li>;
									})}
								</ul>
							</div>
						</div>
						<div className={docs.project}>
							<h3>{projectExperience}</h3>
							<div className={docs.contents}>
								{projectExperienceContent.map((item: any, index: React.Key) => {
									return (
										<div key={index} className={docs.projectExperience}>
											<div>
												<h4>{projectName}</h4>
												<span>
													{item.title}&nbsp;&nbsp;&nbsp;&nbsp;
													<a
														href={item.url}
														target='_blank'
														rel='noopener noreferrer'
													>
														{item.url}
													</a>
												</span>
												<span className={docs.projectExperienceTime}>
													<span>
														{item.startDate}&nbsp;&nbsp;&nbsp;&nbsp;
														{item.endDate}
													</span>
												</span>
											</div>
											<div>
												<h4>{projectDescription}</h4>
												<span>{item.description}</span>
											</div>
											<div>
												<h4>{projectTechnology}</h4>
												<span>{item.technology}</span>
											</div>
											<div className={docs.projectExperienceContent}>
												<h4> {projectContent}</h4>
												<span className={docs.projectContents}>
													{item.content}
												</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div>
							<h3>{selfEvaluation}</h3>
							<div className={docs.contents}>{selfEvaluationContent}</div>
						</div>
					</article>
				</div>
			</article>
		</>
	);
};

export default Docs;
