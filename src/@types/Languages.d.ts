declare type LanguageTypes = {
	/** 简历头像 */
	icon: string | undefined;
	/** 用户名 */
	name: string;
	/** 预期职位 */
	expectedPosition: string;
	/** 期望工资 */
	expectedSalary: string;
	/** 职位 */
	position: string;
	/** 工资 */
	salary: string;
	/** 年龄 */
	age: string;
	/** 岁数 */
	ageNumber: number | string;
	/** 邮箱 */
	mailbox: string;
	/** 邮箱号码 */
	mailboxNumber: string;
	/** 电话 */
	telephone: string;
	/** 电话号码 */
	telephoneNumber: string;
	/** github */
	github?: string | undefined;
	/** 个人项目 */
	personalProjects?: string | undefined;
	/** 个人项目地址 */
	personalProjectsURL?: string | undefined;
	/** 教育 */
	educationExperience: string;
	/** 教育经验列表 */
	educationExperienceList: educationExperienceListType[];
	/** 在校经历 */
	educationExperienceContent?: educationExperienceContentType[];
	/** 专业技能 */
	professionalSkills?: string;
	/** 专业技能列表 */
	professionalSkillsList?: educationExperienceContentType[];
	/** 项目经验 */
	projectExperience: string;
	/** 项目经验列表 */
	projectExperienceContent?: projectExperienceContentType[];
	/** 自我评价 */
	selfEvaluation?: string;
	/** 自我评价内容 */
	selfEvaluationContent?: string;
	/** 项目名称 */
	projectName?: string;
	/** 项目描述 */
	projectDescription?: string;
	/** 项目技术 */
	projectTechnology?: string;
	/** 项目内容 */
	projectContent?: string;
};
/** 教育经验列表详细内容 */
type educationExperienceListType = {
	/** 开始时间 */
	startDate: string;
	/** 结束时间 */
	endDate: string;
	/** 专业 */
	professional: string;
	/** 学校 */
	school: string;
	/** 学位 */
	degree: string;
};
type educationExperienceContentType = {
	/** 内容 */
	content?: string;
};
/** 项目经验列表详细内容 */
type projectExperienceContentType = {
	/** 项目名称 */
	title?: string;
	/** 项目描述 */
	description?: string;
	/** 项目在线地址 */
	url?: string;
	/** 项目技术栈 */
	technology?: string;
	/** 项目内容 */
	content?: string;
	/** 开始时间 */
	startDate?: string;
	/** 结束时间 */
	endDate?: string;
};
