const data: LanguageTypes = {
	/** 头像 使用链接图片，使用本地图片可能存在安全问题！！！ */
	icon: 'https://s.cn.bing.net/th?id=OHR.StuttgartPublicLibrary_EN-CN1022521918_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50',
	/** 用户名 */
	name: '某某某',
	/** 预期职位 */
	expectedPosition: '预期职位',
	/** 期望工资 */
	expectedSalary: '期望工资',
	/** 期望职位 */
	position: '某某工程师',
	/** 期望工资具体数值 */
	salary: '3K - 6K',
	/** 年龄 */
	age: '年龄',
	/** 具体年龄 */
	ageNumber: 23,
	/** 邮箱 */
	mailbox: '邮箱',
	/** 邮箱号码 */
	mailboxNumber: 'test@xx.com',
	/** 电话 */
	telephone: '电话',
	/** 电话号码 */
	telephoneNumber: '12345678912',
	/** github链接  */
	github: 'https://github.com/212063551',
	/** 个人项目 */
	personalProjects: '个人项目',
	/** 个人项目链接 */
	personalProjectsURL: 'https://www.ncxicn.cn',
	/** 教育背景 */
	educationExperience: '教育背景 🎓',
	/** 详细教育背景 */
	educationExperienceList: [
		{
			startDate: 'xxxx年xx月',
			endDate: 'xxxx年xx月',
			professional: 'xxxx专业',
			school: 'xxxx学校',
			degree: '本科',
		},
		{
			startDate: 'xxxx年xx月',
			endDate: 'xxxx年xx月',
			professional: 'xxxx专业',
			school: 'xxxx学校',
			degree: '研究生',
		},
	],
	/**  自己上学期间的荣誉  */
	educationExperienceContent: [
		{
			content: '自己校园经历...',
		},
	],
	/** 专业技能 */
	professionalSkills: '专业技能 🔧',
	/** 专业技能列表 */
	professionalSkillsList: [{ content: '自己会啥写啥' }],
	/** 项目经历 */
	projectExperience: '项目经历 💻',
	/** 项目名称 */
	projectName: '项目名称',
	/** 项目描述 */
	projectDescription: '项目描述',
	/** 项目技术 */
	projectTechnology: '项目技术',
	/** 项目内容 */
	projectContent: '项目内容',
	/** 项目经历列表 */
	projectExperienceContent: [
		{
			title: '在线简历',
			startDate: 'xxxx年xx月',
			endDate: 'xxxx年xx月',
			description: '一个简单在线简历展示网页',
			technology: 'React  SCSS  TypeScript ',
			url: '',
			content:
				'项目基于 react 创建，使用了 SCSS 和 TypeScript，适配了移动端，使用了路由守卫，未获取查看码，无法进入简历页面，右上角可切换简历语言，查看码在根目录config.ts设置或修改。如果你懂技术可以自己启动一个服务来修改或生成查看码。那就可以实现更多功能。',
		},
	],
	/** 自我评价 */
	selfEvaluation: '自我评价 🌟',
	/** 自我评价 可填写多个 */
	selfEvaluationContent:
		'自学能力强，能快速接受使用新知识；良好的分析解决问题能力，和自我管理能力；具有面向对象设计思想，具备独立分析和解决问题的能力；有较好的团队协作和沟通能力，有强烈的责任心；具有良好的沟通表达、团队协作能力，有较强的学习能力和探索精神，责任心强。',
};
export default data;
