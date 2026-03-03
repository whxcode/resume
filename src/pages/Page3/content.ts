export const t = {
  name: "王恒兴",
  phone: "17345241280",
  wechat: "17345241280",
  email: "35129760@qq.com",
  site: "https://github.com/whxcode",
  position: "Web全栈工程师",
  birthday: "1998.11",
  status: "在职，月内到岗",
  gender: "男",
  summaryTitle: "个人总结",
  education: [
    {
      school: "重庆邮电大学",
      degree: "本科",
      major: "软件工程",
      start: "2016.09",
      end: "2020.06",
    },
  ],
  skills: [
    {
      title: "前端开发",
      items: [
        "JavaScript",
        "TypeScript",
        "Vue",
        "React",
        "HTML5",
        "CSS3",
        "Sass",
        "Webpack",
        "Vite",
      ],
    },
    {
      title: "后端开发",
      items: [
        "Node.js",
        "Express",
        "NestJS",
        "Koa",
        "MongoDB",
        "MySQL",
        "Redis",
      ],
    },
    {
      title: "工程化 & 工具",
      items: [
        "Git",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "ESLint",
        "Prettier",
        "Jest",
        "Cypress",
        "Linux",
      ],
    },
    {
      title: "架构与算法",
      items: ["数据结构与算法", "设计模式", "RESTful API 设计", "微服务架构"],
    },
    {
      title: "云与部署",
      items: ["AWS", "腾讯云", "Serverless", "Docker", "Kubernetes"],
    },
  ],
  summary: [
    "掌握扎实的前端开发技术，精通 JavaScript 和 ES6 语法，熟练运用 Vue 和 React 框架构建高效应用",
    "熟练使用 NodeJS 及相关框架（如 Express、Koa、NestJS）开发后端服务，保障系统的高效性和可扩展性",
    "热衷于探索陌生技术领域，具备较强的自学能力，能够快速掌握并应用新技术解决问题",
    "拥有出色的团队协作能力，能迅速融入团队并适应工作节奏，推动项目高效推进",
  ],
  projects: {
    a9: {
      title: "A9 AI",
      description:
        "产品宣传视频生成工具 — 基于 AI 技术，自动生成高质量的产品宣传视频，提升营销效果",
      link: "https://apps.shopify.com/insper-ai",
      stacks: [
        ["Electron-Vite", "#3b82f6", 29],
        ["NodeJS", "#43853d", 31],
        ["React+Ts+Jotai", "#0EA5E9", 16],
        ["FFmpeg", "#4ADE80", 14],
        ["MongoDB", "#10A974", 1],
        ["Web Workers", "#FACC15", 6],
        ["TailwindCSS", "#38BDF8", 3],
      ],
      contents: [
        {
          module: "视频编辑器开发",
          details: [
            "独自负责前端视频编辑器模块的设计与实现，使用 TypeScript 视频编辑器可视化组件，支持视频、字幕、音频片段的添加、删除、裁剪与预览功能。",
            "基于 Jotai 状态管理库，实现视频编辑器的状态同步与数据流管理，确保用户操作的实时响应与数据一致性。",
            "参与 Ffmpeg 函数封装与优化，提升视频处理性能与稳定性，确保生成视频的质量与效率。",
          ],
        },
      ],
    },
    insper: {
      title: "Insper AI",
      description:
        "Shopify 应用 - AI 驱动的店铺优化工具，提供智能产品推荐、自动化营销和数据分析功能",
      link: "https://apps.shopify.com/insper-ai",
      stacks: [
        ["React+TypeScript", "#0EA5E9", 25],
        ["Jotai", "#7C3AED", 10],
        ["Koa", "#30B58D", 10],
        ["Prisma", "#1A202C", 10],
        ["Shopify API", "#96BF48", 10],
        ["GraphQL", "#E535AB", 5],
        ["Docker", "#2496ED", 3],
        ["K8s", "#326CE5", 2],
        ["LangGraph", "#F59E0B", 15],
        ["Playwright", "#2EC866", 10],
      ],
      contents: [
        {
          module: "Shopify 生态研究与应用开发",
          details: [
            "调研Shopify API/OAuth/Webhooks规范，确保合规上线，审核通过率100%。",
            "用Polaris+React+TS+Jotai构建UI，支持组件化状态管理。",
            "集成App Bridge+GraphQL，实现后端交互与实时更新。",
            "TS装饰器封装限流/缓存，提升API稳定性。",
          ],
        },
        {
          module: "AI 任务编排模块 与 浏览器 MCP 模块开发",
          details: [
            "基于 LangGraph 构建可扩展的 AI 任务编排系统，支持多模型协同与链式调用。",
            "基于 Playwright 封装浏览器自动化核心能力，提供 AI 调用 MCP。",
          ],
        },
      ],
    },
    mock: {
      title: "摹客集设计写作平台",
      description:
        "摹客集设计协作平台 — 综合在线设计工具，包含原型设计模块、UI 设计模块和团队协作功能",
      link: "https://www.mockplus.cn",
      stacks: [
        ["react", "#61DAFB", 20],
        ["typescript", "#3178C6", 20],
        ["next.js", "#000000", 15],
        ["koa", "#5FC3C3", 10],
        ["nestjs", "#E0234E", 8],
        ["seo(lighthouse,GA)", "#F5A623", 8],
        ["docker", "#0DB7ED", 5],
        ["k8s", "#326CE5", 5],
        ["sequelize", "#52B0E7", 4],
        ["redis", "#D82C20", 3],
        ["ejs", "#A91E63", 1],
        ["nginx", "#009639", 1],
      ],
      contents: [
        {
          module: "官网与后端服务",
          details: [
            "使用 EJS 维护老版官网，基于 Next.js 构建新一代产品官网，综合利用静态生成（SSG）、增量静态生成（ISR）与服务器端渲染（SSR），实现高性能加载",
            "使用 Lighthouse CI 监测页面性能，优化 SEO 表现，提升搜索引擎排名与用户访问量",
            "使用 Koa + zookeeper + k8s 构建分布式后端服务架构，保障系统的高可用性与可扩展性",
            "使用 NestJS 构建管理后台服务，封装公共认证与权限模块，提高系统安全性与可维护性",
          ],
        },
        {
          module: "",
          details: [
            "负责搭建 鸿蒙基座应用，快速适配鸿蒙系统，拓展用户群体",
            "",
          ],
        },
      ],
    },
    ppj: {
      title: "皮皮匠汽车门店服务平台",
      description:
        "汽车门店管理系统 — 集预约、客户关系、库存与员工管理于一体的综合管理平台",
      link: "https://www.pipijiang.net",
      stacks: [
        ["React", "react", 20],
        ["TypeScript", "ts", 15],
        ["Ant Design", "antd", 15],
        ["Redux", "redux", 10],
        ["Node.js", "node", 15],
        ["NestJS", "nestjs", 10],
        ["MySQL", "mysql", 10],
        ["Redis", "redis", 5],
      ],
      contents: [
        {
          module: "负责小程序端的开发",
          details: [
            "基于微信小程序平台，使用 Vant Weapp 构建用户界面，实现员工管理、门店管理、预约管理等功能。",
            "使用 canvasApi 实现员工打开、开票等水印功能",
          ],
        },
        {
          module: "后端服务开发",
          details: [
            "基于 NestJS 构建模块化后端服务，设计并实现 RESTful API，负责核心业务逻辑与数据交互。",
            "使用 TypeORM 管理数据库实体关系，优化查询性能与数据一致性。",
            "利用 NestJS 管道（Pipes）实现参数验证与数据转换，提高请求安全性与健壮性。",
            "通过中间件（Middleware）与守卫（Guards）实现权限控制与身份验证，确保系统安全性与可维护性。",
          ],
        },
      ],
    },
    chatree: {
      title: "话树趣聊",
      description:
        "推文视频制作工具 — 快速生成聊天记录、小说推文、搞笑对话等内容的专业视频制作工具",
      link: "https://www.chatree.cn",
      stacks: [
        ["Vue3", "vue3", 20],
        ["TypeScript", "ts", 15],
        ["Quasar", "quasar", 10],
        ["Electron", "electron", 10],
        ["FFmpeg", "ffmpeg", 5],
        ["Capacitor", "capacitor", 5],
        ["Node.js", "node", 15],
        ["Express", "express", 10],
        ["MongoDB", "mongo", 5],
        ["Serverless", "serverless", 5],
      ],
      contents: [
        {
          module: "音视频处理抽象与优化",
          details: [
            "使用 FFmpeg 与 AudioContext API 封装音视频截取与合成模块，实现高效生成视频制作所需的音视频片段。",
            "基于状态管理优化音视频处理流程，提高片段生成的可控性和复用性。",
          ],
        },
        {
          module: "前端状态管理封装",
          details: [
            "使用 Vuex 结合 normalizrJS 实现前端数据标准化管理，提升数据处理效率与状态一致性。",
          ],
        },
        {
          module: "AIGC 需求开发",
          details: [
            "通过 Cypress 编写自动化执行脚本，从知识库自动生成视频内容，实现内容生产自动化。",
            "使用微软 TTS 文生语音，结合阿里云 FFmpeg 云函数实现视频合成与后处理，提升内容生成效率与质量。",
          ],
        },
        {
          module: "功能开关与灰度发布",
          details: [
            "集成 GrowthBook 管理功能开关，支持灰度发布和 A/B 测试，提升产品迭代灵活性和用户体验。",
          ],
        },
        {
          module: "数据库设计与优化",
          details: [
            "使用 Mongoose 设计 MongoDB 数据模型，优化数据存储结构与查询性能，提升系统响应效率。",
          ],
        },
        {
          module: "自动化测试与 CI/CD",
          details: [
            "使用 Jest 与 Supertest 编写服务端单元测试和集成测试，保障系统功能稳定性。",
            "通过 GitHub Actions 搭建 CI/CD 流水线，实现代码自动化测试与快速部署，提高开发效率与发布可靠性。",
          ],
        },
      ],
    },
    mp: {
      title: "MetaOriginX",
      description:
        "ClashForToys DApp — 提供游戏道具交易与平台后台管理的去中心化应用",
      link: "https://metaoriginx.com",
      stacks: [
        ["Vue2", "green-200", 25],
        ["Vuetify", "blue-400", 15],
        ["Web3.js", "orange-400", 20],
        ["Three.js", "black", 15],
        ["JavaScript", "yellow-400", 20],
        ["WebGL", "purple-400", 5],
      ],
      contents: [
        {
          module: "负责 DApp 前端开发",
          details: [
            "使用 Vue2 + Vuetify 构建响应式用户界面，管理组件状态和路由，实现链上数据实时展示和交互。",
          ],
        },
        {
          module: "参与智能合约集成",
          details: [
            "使用 Web3.js / Ethers.js 与智能合约交互，实现函数调用、事件监听和交易状态处理，确保前端与链上逻辑一致。",
          ],
        },
        {
          module: "参与钱包接入与身份验证",
          details: [
            "集成 MetaMask 钱包，实现用户登录、地址管理和交易签名功能，处理异步请求和用户授权状态。",
          ],
        },
        {
          module: "负责后台管理系统",
          details: [
            "使用 Vue2 + Vuex + Axios 构建后台管理模块，支持数据分析、用户管理和交易监控，实现 API 调用、分页、表格和图表可视化。",
          ],
        },
        {
          module: "负责Google Analytics 集成",
          details: [
            "集成 Google Analytics 进行用户行为分析，配置事件跟踪和转化目标，生成数据报表，支持产品优化和市场决策。",
          ],
        },
        {
          module: "负责页面3D特效开发",
          details: ["使用 WebGL 实现3D模型，与粒子特效的展示。"],
        },
      ],
    },
    zy: {
      title: "北吉熊医疗服务云",
      description:
        "医疗机构管理平台 — 预约挂号、电子病历、在线咨询与药品管理的综合系统",
      link: "http://www.medcloud.cn",
      stacks: [
        ["Vue2", "green-200", 25],
        ["React", "blue-200", 25],
        ["Ant Design", "blue-600", 15],
        ["Qiankun", "purple-400", 10],
        ["ECharts", "orange-400", 15],
        ["Webpack", "blue-800", 10],
      ],
      contents: [
        {
          module: "前端页面开发",
          details: [
            "使用 Vue2 / React + Ant Design 构建响应式用户界面，实现高可用组件布局和良好交互体验。",
          ],
        },
        {
          module: "数据可视化",
          details: [
            "使用 ECharts 实现门店运营数据的图表展示与分析，支持数据洞察与决策优化。",
          ],
        },
        {
          module: "前端性能优化",
          details: [
            "使用 Lighthouse CI 自动化监测页面性能，优化资源加载、代码拆分与缓存策略，提升页面加载速度与用户体验。",
            "通过 Webpack 优化前端产物体积，降低资源消耗并提升应用性能。",
          ],
        },
        {
          module: "微前端架构开发",
          details: [
            "参与 Qiankun 微前端架构封装，解决子应用样式冲突与资源隔离问题，实现模块化、可独立部署的前端微服务方案。",
          ],
        },
        {
          module: "公共组件库开发与维护",
          details: [
            "参与团队公共组件库建设，封装高复用 UI 组件，提高前端代码一致性与开发效率。",
          ],
        },
      ],
    },
  },
  companies: {
    mock: {
      name: "成都摹客科技有限公司",
      occupation: "web全栈工程师",
      link: "https://www.mockplus.cn",
      time: ["2025.03", "至今"],
      location: "成都",
      workContents: [
        "负责摹客官网的开发与维护,包括不限于用户、支付、权限等模块",
        "参与需求评审与技术方案制定，如 Shopify 生态调研与应用开发，鸿蒙系统适配等",
        "负责技术更新与架构优化，如接入 Next.js 重构官网，搭建分布式服务架构等",
      ],
    },
    chatree: {
      name: "成都话树网络科技有限公司",
      occupation: "web全栈工程师",
      link: "https://www.chatree.cn",
      time: ["2023.08", "2024.11"],
      location: "成都",
      workContents: [
        "参与前端音视频处理模块与后端服务模块的开发与维护",
        "参与敏捷开发流程与需求评审",
        "参与 CI/CD 搭建，如 Jest GitHub Actions 集成",
      ],
    },
    mp: {
      name: "武汉原点科技网络技术有限公司",
      occupation: "前端工程师",
      link: "https://metaoriginx.com",
      time: ["2022.04", "2023.06"],
      location: "武汉",
      workContents: [
        "负责DApp 前端开发与智能合约集成",
        "调研并应用区块链相关技术，如 Web3.js 等",
        "搭建及维护前端 CI/CD 流程",
      ],
    },
    zy: {
      name: "泽怡信息科技(上海)有限公司",
      occupation: "前端工程师",
      link: "http://www.medcloud.cn",
      time: ["2020.07", "2022.03"],
      location: "武汉",
      workContents: [
        "参与 进销存 系统、医疗服务云等项目的前端开发",
        "参与前端组件库建设与维护",
        "参与微前端架构设计与实现",
      ],
    },
  },
};

const Content = {
  name: "王恒兴",
  gender: "男",
  age: "27岁",
  status: "在职，月内到岗",
  phone: "17345241280",
  email: "35129760@qq.com",
  github: "https://github.com/whxcode",
  position: "Web全栈工程师",
  companies: [
    {
      companyName: "成都摹客科技有限公司",
      position: "前端开发工程师",
      workDate: "2021.03-至今",
      flex: 4,
      summary:
        " 负责公司核心产品 DT、M3、FG 的开发与维护(技术栈为 React、TypeScript、C++、Electron)。 ",
      features: [
        "1、 维护已有产品功能（优化性能、代码质量、功能用户体验等）。 ",
        "2、根据产品规划的新功能需求，保证月计划保质保量完成。",
      ],
    },

    {
      companyName: "成都数游方舟科技有限公司",
      position: "前端开发工程师",
      flex: 3,
      workDate: "2019.11-2021.02",
      summary: "",
      features: [
        "1、主要负责移动端开发、小程序开发。",
        "2、维护 pc 端后台管理系统。",
      ],
    },
  ],

  summaries: [
    {
      id: 0,
      label:
        "1、熟练掌握 JavaScript 与 CSS，理解常用设计模式，能分析常见算法的时间复杂度。",
    },

    {
      id: 1,
      label:
        "2、熟练掌握 React、Vue、TypeScript、Electron，等移动端开发与前端性能调优，解决性能问题。 ",
    },

    {
      id: 2,
      label:
        "3、了解 Node.js、Nginx、Go，可独立完成服务端开发；掌握 C++，能进行 WebAssembly开发。",
    },

    {
      id: 3,
      label:
        "4、保持对新技术的学习热情，具备极强的责任心，为人诚实正直，工作作风严谨正派。",
    },
  ],
  skill: {
    label: "技术栈",
    skills: [
      { label: "JavaScript", color: "red" },
      { label: "TypeScript", color: "red" },
      { label: "C/C++", color: "red" },
      { label: "React", color: "red" },
      { label: "NodeJs", color: "red" },
      { label: "CSS3", color: "red" },
      { label: "HTML5", color: "red" },
      { label: "Git", color: "red" },
      { label: "Nvim", color: "red" },
      { label: "Electron", color: "red" },
      { label: "Vue" },
      { label: "Ngnix" },
      { label: "uni-app" },
      { label: "Go" },
      { label: "Koa" },
      { label: "Webpack" },
      { label: "Vite" },
    ],
  },

  projects: [
    {
      label: "摹客 M3(工具不混用，设计更顺手) https://www.mockplus.cn/m3",
      summary:
        "为设计师提供的 UI 设计工具，支持矢量设计、实时协同、资源复用、快速编辑、历史模式、离线版。",
      remark: "核心贡献",
      href: "https://www.mockplus.cn/m3",
      contents: [
        "1、开发图层侦测对齐功能。",
        "2、完成工作区基础编辑功能;如图层缩放、拖动、旋转等功能。",
        "3、解析第三方设计工具的源文件（sketch、xd、figma)。",
        "4、二次封装常用的 UI 组件(Menu、Tree、Notice、Modal等) 。",
        "5、统一管理编辑内的快捷键管理；方便新增与维护。",
        "6、优化编辑器内大量 DOM 节点渲染时造成的性能影响。",
        "7、优化使用操作体验、减少用户使用的时间成本。",
        "8、完善编辑器内图层操作（创建、删除、对齐、克隆、选择等核心功能）。",
      ],
    },

    {
      label: "畅图（让AI更懂你，让图表更有用） https://www.fluig.cn",
      summary:
        "畅图是一款AI原生图表工具，无需绘图经验，上传文档，或与AI对话，即可生成思维导图、流程图、表格、看板等。 立即免费使用，助你从想法到落地更高效。",
      remark: "核心贡献",
      href: "https://www.fluig.cn",
      contents: [
        "1、 依托 M3 同一套代码与数据结构，无需重构底层逻辑，仅新增白板专属交互（如画笔标注、思维导图节点编辑），高效实现产品形态差异化，保障与 M3 的技术一致性和维护效率。",
      ],
    },

    {
      label: "摹客 M3 离线版 https://www.mockplus.cn/m3/offline",
      summary:
        "行业独家离线产品设计工具，更安全的选择 可100%离线客户端使用，集原型设计、UI 设计于一体，功能强大，高保密级别，数据更安全。可同时适配 Linux、Mac、Windows。",
      remark: "核心贡献",
      href: "https://www.mockplus.cn/m3/offline",
      contents: [
        "1、负责 Electron 桌面端架构搭建，实现窗口管理、本地资源访问等基础功能，保障离线版与在线版 PC 端界面操作一致性。",
        "2、基于 Koa 框架开发本地后端服务，设计数据本地存储方案（如用户设计文件、配置信息本地持久化），确保无网络时工具正常运行。",
      ],
    },

    {
      label: "摹客 DT（UI 设计工具）https://www.mockplus.cn/dt",
      summary: "改变传统设计流程，降低成本，提升效率 UI设计师都爱用。",
      remark: "核心贡献",
      href: "https://www.mockplus.cn/dt",
      contents: [
        "1、负责工具核心交互模块开发，实现组件拖拽、属性实时同步等功能，提升设计师操作流畅度。",
        "2、基于 React Hooks 封装通用业务组件（如属性面板、图层列表），减少重复代码，降低后续维护成本。",
        "3、针对图层数量过多导致的页面卡顿问题，采用虚拟列表优化大量列表渲染场景的性能，改善页面加载体验。",
      ],
    },
  ],
  reviews: [
    {
      icon: "https://dt3.mockplus.cn/m3_logo.svg",
      label: "摹客 M3",
      href: "https://www.mockplus.cn/m3",
    },

    {
      icon: "https://www.fluig.cn/images/fg/logo.png",
      label: "畅图",
      href: "https://www.fluig.cn",
    },

    {
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTBDMCA0LjQ3NzE1IDQuNDc3MTUgMCAxMCAwSDMwQzM1LjUyMjggMCA0MCA0LjQ3NzE1IDQwIDEwVjMwQzQwIDM1LjUyMjggMzUuNTIyOCA0MCAzMCA0MEgxMEM0LjQ3NzE1IDQwIDAgMzUuNTIyOCAwIDMwVjEwWiIgZmlsbD0iIzI4MzE0MiIvPgo8cGF0aCBkPSJNMTAgMC41SDMwQzM1LjI0NjcgMC41IDM5LjUgNC43NTMzIDM5LjUgMTBWMzBDMzkuNSAzNS4yNDY3IDM1LjI0NjcgMzkuNSAzMCAzOS41SDEwQzQuNzUzMyAzOS41IDAuNSAzNS4yNDY3IDAuNSAzMFYxMEMwLjUgNC43NTMzIDQuNzUzMyAwLjUgMTAgMC41WiIgc3Ryb2tlPSIjMzIzRTUyIiBzdHJva2Utb3BhY2l0eT0iMC44Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuMjUgOS4yNUgxOC4yNVYxNC40NjZDMTcuMTM4OCAxMy44NTA1IDE1Ljg2MDMgMTMuNSAxNC41IDEzLjVDMTAuMjE5OCAxMy41IDYuNzUgMTYuOTY5OCA2Ljc1IDIxLjI1QzYuNzUgMjUuNTMwMiAxMC4yMTk4IDI5IDE0LjUgMjlDMTguNzgwMiAyOSAyMi4yNSAyNS41MzAyIDIyLjI1IDIxLjI1VjkuMjVaTTE4LjI1IDIxLjI1QzE4LjI1IDE5LjE3ODkgMTYuNTcxMSAxNy41IDE0LjUgMTcuNUMxMi40Mjg5IDE3LjUgMTAuNzUgMTkuMTc4OSAxMC43NSAyMS4yNUMxMC43NSAyMy4zMjExIDEyLjQyODkgMjUgMTQuNSAyNUMxNi41NzExIDI1IDE4LjI1IDIzLjMyMTEgMTguMjUgMjEuMjVaIiBmaWxsPSIjRkY5NzAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjguMjUgMTMuNUgyNC4yNVYyMS4yNUwyNC4yNTEgMjEuMzc4MkMyNC4zMTk1IDI1LjU5OTMgMjcuNzYyNiAyOSAzMiAyOUgzMy4yNVYyNUgzMkwzMS45MzggMjQuOTk5NUMyOS44OTU1IDI0Ljk2NjQgMjguMjUgMjMuMzAwNCAyOC4yNSAyMS4yNVYyMUgzMy4yNVYxN0gyOC4yNVYxMy41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
      label: "DT",
      href: "https://www.mockplus.cn/dt",
    },
  ],
};

export default Content;
