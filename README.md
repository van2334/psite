# kdai99.com 个人网站

用 [Astro](https://astro.build) 做的个人网站：首页、作品（Work）、博客（Writing）、关于我（About），支持深色模式、RSS 订阅，中英文文章都能正常显示。

---

## 一、要改哪些地方（先把占位内容换成你自己的）

| 想改什么 | 改哪个文件 |
|---|---|
| 名字、首页大标题、"Right now" 近况、邮箱、LinkedIn/GitHub、简历 | `src/site.config.ts` |
| 关于我页面的故事和兴趣 | `src/pages/about.astro`（只改 `<p>` 里的文字） |
| 项目案例 | `src/content/projects/` 里的 `.md` 文件，一个项目一个文件 |
| 博客文章 | `src/content/blog/` 里的 `.md` 文件，一篇文章一个文件 |
| 主题颜色 | `src/styles/global.css` 最上面的 `--accent` |

现在网站里的名字、项目和文章都是**示例**，上线前记得替换或删除。

### 写一篇新文章

在 `src/content/blog/` 新建一个文件，比如 `my-second-post.md`（文件名就是网址，用英文和横线）：

```
---
title: 文章标题
description: 一句话简介
date: 2026-11-10
---

正文从这里开始。可以用 ## 写小标题，用 - 写列表。
```

不想马上发布？在开头加一行 `draft: true`。

### 加一个项目

在 `src/content/projects/` 新建 `.md` 文件，开头写：

```
---
title: 项目名
summary: 一句话说明这个项目解决了什么问题
year: 2026
role: 你的角色，比如 Team of three, front end
order: 1          # 数字越小越靠前，首页显示前 3 个
link: https://...  # 可选，项目在线地址
---
```

正文建议按"问题 → 你做了什么 → 结果 → 反思"来写。

---

## 二、上线步骤（一次性设置，大约 20 分钟）

### 1. 上传到 GitHub

1. 注册 [github.com](https://github.com)，点右上角 **+ → New repository**，名字填 `kdai-site`，选 **Public**，点 **Create repository**。
2. 在新仓库页面点 **uploading an existing file**。
3. 把这个文件夹里的**所有文件和文件夹**拖进去（不要拖外面那一层文件夹本身），点 **Commit changes**。

### 2. 用 Netlify 部署

1. 打开 [netlify.com](https://www.netlify.com)，用 GitHub 账号登录。
2. 点 **Add new project → Import an existing project → GitHub**，选 `kdai-site`。
3. 构建设置会自动读取（`npm run build`，发布目录 `dist`），直接点 **Deploy**。
4. 一两分钟后会得到一个 `xxx.netlify.app` 的网址，先打开看看。

### 3. 绑定 kdai99.com

1. 在 Netlify 项目里进入 **Domain management → Add a domain**，输入 `kdai99.com`。
2. Netlify 会告诉你要设置哪些 DNS 记录，或者让你改用它的 nameserver。
3. 去 Namecheap：**Domain List → kdai99.com 旁边的 Manage**，按 Netlify 给的信息填：
   - 如果 Netlify 给的是 nameserver（4 个地址）：在 **Nameservers** 选 **Custom DNS**，填进去。
   - 如果给的是 DNS 记录：进 **Advanced DNS**，删掉默认的 parking 记录，再添加 Netlify 给的 A 记录和 CNAME 记录。
4. 等几分钟到一天生效，Netlify 会自动开启 HTTPS。

---

## 三、以后怎么更新

在 GitHub 网页上打开任意文件，点铅笔图标编辑，或者用 **Add file → Upload files** 上传新文章，点 **Commit changes**。Netlify 会自动重新部署，一两分钟后网站就更新了。

### （可选）在自己电脑上预览

安装 [Node.js](https://nodejs.org)（22 版或以上），然后在这个文件夹里运行：

```
npm install
npm run dev
```

打开 http://localhost:4321 就能看到效果，改文件会实时刷新。
