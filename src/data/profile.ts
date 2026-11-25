export type Lang = 'en' | 'zh';
export const profile = {
  name: 'Nazhakaiti Yusufu',
  email: '3447321946@qq.com',
  en: {
    nav: ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'],
    eyebrow: 'LAND · PEOPLE · POSSIBILITY',
    role: 'Land Resources Management · Renmin University of China',
    title: 'Understanding places.\nConnecting perspectives.',
    intro: 'I’m Nazhakaiti, an undergraduate exploring how land, data and thoughtful planning can shape more sustainable places.',
    explore: 'Explore my work', cv: 'Download CV', about: 'A little about me',
    aboutTitle: 'From Kashgar,\nwith a wider perspective.',
    bio: 'Growing up in Kashgar, on the edge of the Taklamakan Desert, sparked my interest in how land-use decisions affect environmental sustainability in arid regions. At Renmin University of China, I have been turning that interest into practical skills in GIS, spatial planning and quantitative analysis.',
    bio2: 'An exchange semester in Venice added an international dimension to my undergraduate journey. Alongside my studies, volunteering and student leadership have given me opportunities to work with people and take responsibility beyond the classroom.',
    aspiration: 'Looking ahead', aspirationText: 'I hope to deepen my understanding of remote sensing and spatial modelling, and apply these tools to environmental monitoring and sustainable land management.',
    photoCaption: 'A personal moment beyond the classroom.', londonCaption: 'Exploring London.',
    education: 'Learning & development', educationTitle: 'An education across places.',
    degree: 'B.A. in Land Resources Management', university: 'Renmin University of China', period: 'Sep 2023 — Jun 2027 (expected)', location: 'Beijing, China',
    exchange: 'International exchange', exchangeUni: 'Ca’ Foscari University of Venice', exchangePeriod: 'Sep 2025 — Feb 2026', exchangeDesc: 'Exchange studies in International Economics and Trade · Venice, Italy',
    courses: 'Selected coursework', average: 'Weighted average', relevant: 'Relevant-course average',
    experience: 'Experience & service', experienceTitle: 'Learning through doing.',
    experiences: [
      { date: 'Jun — Aug 2026', title: 'Professional Intern', org: 'Kashgar Construction Engineering Group Jinlong Real Estate Co., Ltd.', text: 'Cross-checked property registration records against original documents, digitised records into a searchable dataset and supported data quality control. Field visits to natural resources authorities and a planning institute connected this work to local land administration.', tags: ['Property records', 'Data quality', 'Land administration'] },
      { date: '2023 — 2025', title: 'Student Leader & Volunteer', org: 'Renmin University Youth Volunteer Association', text: 'Completed 197 service hours and coordinated three major programmes, including volunteer arrangements at the Grand Canal Museum. Led a team at the Haidian District Marathon and received an Outstanding Volunteer recognition in 2025.', tags: ['197 service hours', 'Team coordination', 'Community service'] },
      { date: '2024', title: 'Experience-sharing sessions', org: 'High-school student outreach', text: 'Shared undergraduate experiences with high-school students, developing confidence in communicating with different audiences.', tags: ['Communication', 'Student outreach'] }
    ],
    projects: 'Selected projects', projectsTitle: 'Questions explored.\nSkills put to work.', projectsIntro: 'From village planning to the geography of everyday services: a selection of team and course projects.', read: 'View project',
    awards: 'Recognition along the way',
    honours: [ ['2025', 'National First Prize', '8th “Supergraph Cup” National Undergraduate Territorial Spatial Planning Competition'], ['2026', 'University Third Prize', '28th “Innovation Cup” Academic Competition · School of Public Administration and Policy, RUC'], ['2025', 'JIALEDI Growth Scholarship', 'Department of Land Resource Management · RUC'], ['2024', 'Student Leadership Recognition', 'Third-Class Scholarship for Social Work & Volunteer Service Leaders; Outstanding Student Leader · RUC'] ],
    skills: 'Skills & interests', skillsTitle: 'Tools, languages\nand directions of curiosity.',
    skillGroups: [ ['Spatial thinking', 'ArcGIS', 'Spatial joins, overlays, buffers, kernel density, hotspot analysis and Thiessen polygons, applied in coursework and planning projects.'], ['Quantitative analysis', 'Stata · SPSS · Excel', 'Dataset cleaning, descriptive statistics, regression, interaction analysis and robustness checks.'], ['Programming', 'Python · R · MATLAB', 'Data processing, analysis and web scraping in coursework and projects.'], ['Working with people', 'Coordination · Communication', 'Volunteer programme organisation, team leadership and cross-cultural learning through international exchange.'] ],
    languages: 'Languages', languageList: ['Uyghur · Native', 'Mandarin Chinese · C2', 'English · IELTS 7.0', 'Italian · A1'],
    interests: 'Areas I want to explore further', interestList: ['Sustainable land management', 'Environmental monitoring', 'Remote sensing', 'Spatial modelling'],
    contact: 'Let’s connect', contactTitle: 'There’s always more\nto learn from each other.', contactText: 'For conversations about my undergraduate journey, projects or future study, you can reach me by email.', emailLabel: 'Write to me', footer: 'A personal portfolio · Land, people and the places between.', back: 'Back to selected projects', contribution: 'My contribution', methods: 'Methods & tools', context: 'Project context', projectNote: 'Project descriptions are based on my CV. Original maps, datasets and reports are not included here.',
  },
  zh: {
    nav: ['关于我', '教育背景', '实践经历', '项目成果', '技能兴趣', '联系我'],
    eyebrow: '土地 · 人与环境 · 更多可能', role: '土地资源管理本科生 · 中国人民大学',
    title: '理解地方，\n连接不同视角。', intro: '我是 Nazhakaiti，一名土地资源管理本科生。我关注土地、数据与规划如何共同塑造更可持续的生活环境。', explore: '了解我的项目', cv: '下载简历', about: '关于我', aboutTitle: '从喀什出发，\n看见更广阔的世界。',
    bio: '我在塔克拉玛干沙漠边缘的喀什长大，这段成长经历让我开始关注土地利用决策与干旱地区环境可持续性之间的关系。在中国人民大学，我逐步将这份兴趣转化为 GIS、空间规划与定量分析的实践能力。',
    bio2: '在威尼斯的交换学习为我的本科经历增添了国际视角。课堂之外，志愿服务与学生工作也让我有机会与不同的人合作，并承担具体的组织责任。',
    aspiration: '未来方向', aspirationText: '我希望进一步学习遥感与空间建模，将这些方法运用到环境监测和可持续土地管理中。', photoCaption: '课堂之外的一段个人时光。', londonCaption: '在伦敦探索。',
    education: '学习与成长', educationTitle: '在不同地方，积累新的视角。', degree: '土地资源管理 · 文学学士', university: '中国人民大学', period: '2023年9月 — 2027年6月（预计）', location: '中国 · 北京', exchange: '国际交换', exchangeUni: '威尼斯东方大学', exchangePeriod: '2025年9月 — 2026年2月', exchangeDesc: '国际经济与贸易交换学习 · 意大利威尼斯', courses: '部分相关课程', average: '加权平均分', relevant: '相关课程平均分',
    experience: '实践与服务', experienceTitle: '在行动中学习。',
    experiences: [
      { date: '2026年6月 — 8月', title: '专业实习', org: '喀什建工集团金龙房地产有限公司', text: '依据原始文件核对不动产登记中的地块位置、面积、用途和权属信息；将登记资料数字化并建立可检索的数据集，支持数据质量控制。通过走访自然资源主管部门及规划设计机构，了解地方土地管理与国土空间规划实践。', tags: ['不动产登记', '数据质量', '土地管理'] },
      { date: '2023 — 2025', title: '学生骨干与志愿者', org: '中国人民大学青年志愿者协会', text: '累计完成197小时志愿服务，协调三个主要项目，包括大运河博物馆的志愿服务安排。在海淀区马拉松活动中带领志愿团队，并于2025年获得优秀志愿者表彰。', tags: ['197小时志愿服务', '团队协调', '社区服务'] },
      { date: '2024', title: '学习经历分享', org: '面向高中生的交流活动', text: '向高中生分享大学学习经历，在与不同受众的交流中积累表达与沟通经验。', tags: ['沟通表达', '学生交流'] }
    ],
    projects: '项目选辑', projectsTitle: '提出问题，\n在实践中寻找答案。', projectsIntro: '从村庄规划到日常服务设施的空间分布，记录本科阶段的团队合作与课程实践。', read: '查看项目', awards: '成长中的认可',
    honours: [ ['2025', '全国一等奖', '“超图杯”第八届全国大学生国土空间规划技能大赛'], ['2026', '校级三等奖', '第二十八届“创新杯”学术竞赛 · 中国人民大学公共管理学院'], ['2025', 'JIALEDI 成长奖学金', '中国人民大学土地资源管理系'], ['2024', '学生工作表彰', '中国人民大学社会工作与志愿服务骨干三等奖学金、优秀学生干部'] ],
    skills: '技能与兴趣', skillsTitle: '分析工具、语言，\n以及持续探索的方向。',
    skillGroups: [ ['空间分析', 'ArcGIS', '在课程和规划项目中使用空间连接、叠加、缓冲区、核密度、热点分析与泰森多边形等方法。'], ['定量研究', 'Stata · SPSS · Excel', '数据清洗、描述性统计、回归、交互效应分析与稳健性检验。'], ['编程', 'Python · R · MATLAB', '在课程和项目中进行数据处理、分析与网页数据采集。'], ['协作与表达', '组织协调 · 沟通交流', '通过志愿项目组织、团队带领和国际交换，积累协调与跨文化沟通经验。'] ],
    languages: '语言能力', languageList: ['维吾尔语 · 母语', '普通话 · C2', '英语 · 雅思7.0', '意大利语 · A1'], interests: '希望进一步探索', interestList: ['可持续土地管理', '环境监测', '遥感', '空间建模'],
    contact: '联系我', contactTitle: '每一次交流，\n都有新的收获。', contactText: '如果你想了解我的本科经历、项目或未来学习方向，欢迎通过邮件联系。', emailLabel: '发送邮件', footer: '个人成长记录 · 土地、人与地方之间的联系。', back: '返回项目选辑', contribution: '我的贡献', methods: '方法与工具', context: '项目背景', projectNote: '项目介绍依据个人简历整理；此处未附原始地图、数据集或报告。',
  }
};
export const courses = [
  ['GIS Technology and Applications', 'GIS技术与应用', 92], ['Social Science Research Methods', '社会科学研究方法', 91], ['Land Ecological Economics', '土地生态经济学', 89], ['Statistical Software Applications', '统计软件应用', 88], ['Spatial Planning: Theory and Case Studies', '空间规划：理论与案例', 88], ['Forest and Grassland Governance', '林草治理', 88], ['Python Programming', 'Python程序设计', 80]
] as const;
