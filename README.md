# Nazhakaiti Yusufu — Personal Portfolio

Astro 5 静态个人网站，默认英文，提供完整中文版本。发布目标为 https://nzktgt.github.io ，源码仓库为 https://github.com/nzktgt/nzktgt.github.io 。

## 本地预览

在此目录运行：

```powershell
bun install
bun run dev
```

打开 http://127.0.0.1:4321/ ，中文为 http://127.0.0.1:4321/zh/ 。

生产版本检查：

```powershell
bun run check
bun run build
bun run preview
```

生产预览默认 http://127.0.0.1:4321/ 。构建输出目录是 `dist/`，不要直接用文件浏览器打开 HTML；请通过本地服务器访问。

## 内容更新

- `src/data/profile.ts`：中英文个人简介、教育、课程、实习、志愿经历、荣誉与技能。
- `src/content/projects/*.en.md` 和 `*.zh.md`：独立项目详情与卡片摘要。新增项目时创建一对 Markdown，并填入相同 slug、不同 lang、唯一排序 order，以及 category、date、title、summary、tags、stat、statLabel。
- `src/data/evidence.ts`：证明图片及双语说明。
- `src/components/Home.astro`：首页栏目与布局。
- `src/styles/global.css`：视觉与响应式样式。
- `public/images/`：经过压缩、去除 EXIF 的网站图片。
- `public/documents/Nazhakaiti-Yusufu-CV.pdf`：原始英文简历的副本。

`1.jpg` 为证件照，`2.jpg`、`3.jpg` 为生活照。`4.jpg`—`8.jpg` 为结项和荣誉证书，`9.jpg` 为规划成果册与参赛证现场照片。网站副本对证书中的学号使用不透明遮挡，原始文件不变。原始 JPG、PDF 已从 Git 跟踪范围排除；可发布副本位于 public 下。

如需重做图片：

```powershell
uv run --with pillow python scripts/prepare-assets.py
uv run --with pillow python scripts/prepare-evidence.py
```

`prepare-evidence.py` 中遮挡坐标以当前原图像素为准，替换源图后必须重新核对。团队比赛证书保留原有团队署名。`scripts/create-content.py` 是初始内容生成记录，日后请直接编辑 Markdown，勿重新运行覆盖已更新的内容。

## 验证

```powershell
bun x playwright install chromium
bun scripts/verify.mjs
```

先启动本地服务器。脚本检查10个中英文页面、站内链接、图片、双语切换、课程展开、图片弹窗、手机导航与多种宽度的横向溢出，并对两个首页及规划项目英文详情页执行 axe WCAG A/AA 检查。结果与截图写入 `.verification/`，不进入版本控制。可用 `PREVIEW_URL` 指定生产预览服务。

## 尚待本人审阅的内容

- 中文姓名尚未设为网站标题；标题沿用英文简历拼写 Nazhakaiti Yusufu，证书保留原姓名。
- 实习、项目、获奖日期依据原简历；其中实习为2026年6—8月，房地产估价项目为2026年10月。发布前请确认时间和完成状态。
- 中文学位暂按简历 B.A. 直译为文学学士；请以正式学位名称为准。
- 第9张图片没有足以确认会议名称的信息，暂用“项目成果册与参赛证现场照片”描述。
- 简历未提供具体生活爱好、LinkedIn或GitHub，因此尚未添加。
- 规划项目展示成果册照片与获奖证书，未提供原始地图、数据或完整报告下载。

## GitHub Pages 部署

`.github/workflows/pages.yml` 在推送到 `main` 后自动构建并部署，也可在 Actions 中手动触发。流程执行依赖安装、Astro 检查、生产构建及 Pages 发布。

仓库的 Settings → Pages → Source 应设为 GitHub Actions。workflow 将从 Pages 配置读取 SITE_URL 与 BASE_PATH，生成正式 canonical 和 Open Graph 图片地址。不要用默认 localhost 地址构建公开版本。

日后更新：修改文件 → 本地检查和构建 → Git 提交 → 推送 `main` → 等待 Actions 成功。原始 JPG、PDF 不会进入仓库，只有 public 中处理后的副本会发布。
