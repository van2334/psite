// ============================================================
//  这是你最常改的文件：名字、简介、联系方式、"最近在做什么"都在这里。
//  This is the file you'll edit most: name, intro, links, "Now".
// ============================================================

export const site = {
  // 网站名字（显示在左上角和浏览器标签上）
  name: 'K. Dai',

  // 网站语言：'en' 英文，'zh-CN' 中文
  lang: 'en',

  // 搜索引擎和分享链接时显示的一句话介绍
  description: 'Personal site of K. Dai: projects, writing, and the things I do for fun.',

  // 首页大标题：第一句写你的工作，第二句写你的兴趣
  intro: {
    work: "I'm K. Dai. I turn messy data into tools that people actually use.",
    life: "Off the clock I'm usually cooking something too ambitious, or out on a long run.",
  },

  // "最近在做什么"——会出现在首页和关于页。随时更新，几条都行。
  now: [
    { label: 'Building', text: 'A small app that plans my weekly meals from what is already in the fridge.' },
    { label: 'Reading', text: 'Thinking, Fast and Slow, slowly.' },
    { label: 'Training for', text: 'A half marathon in the spring.' },
  ],

  // 联系方式。不想显示的项，留空字符串 '' 即可。
  email: 'hello@kdai99.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'GitHub', href: 'https://github.com/your-handle' },
  ],

  // 简历 PDF：把文件放进 public 文件夹并命名为 resume.pdf，然后把下面改成 '/resume.pdf'
  resume: '',
};
