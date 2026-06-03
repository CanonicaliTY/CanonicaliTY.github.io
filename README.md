# CanonicaliTY.github.io 项目整理

这是 `CanonicaliTY.github.io` 的 GitHub Pages 静态站点仓库，当前绑定域名为 `canonicality.top`。

## 当前状态

- Git 分支：`main`
- 远端：`origin/main`
- 工作区：干净，没有未提交改动
- 站点生成器：页面标记显示为 `Hexo 8.1.1`
- 主题：页脚显示为 `hexo-theme-particlex`
- 当前仓库内容：已经生成好的静态文件
- 当前缺失内容：没有 Hexo 源码项目文件，例如 `_config.yml`、`package.json`、`source/_posts`

## 当前页面

- 首页：`index.html`
- 文章页：`2026/01/20/hello-world/index.html`
- 归档页：
  - `archives/index.html`
  - `archives/2026/index.html`
  - `archives/2026/01/index.html`
- 自定义域名：`CNAME`

目前只有一篇默认文章 `Hello World`，内容仍是 Hexo 初始示例文章。

## 资源和脚本

- 样式：`css/main.css`
- 主脚本：`js/main.js`
- 主题脚本：`js/lib/*.js`
- 图片：
  - `images/avatar.jpg`
  - `images/background.jpg`
  - `images/loading.gif`

## 已发现的问题

导航菜单里有这些链接，但仓库里还没有对应页面：

- `/about`
- `/categories`
- `/tags`

如果继续用 Hexo，通常需要在源项目里创建这些页面后重新生成站点。

## Git 历史简表

- `2026-01-20 09:12:33`：首次创建占位文件
- `2026-01-20 09:12:34`：生成并提交 Hexo 静态站点
- `2026-01-20 10:34:41`：重新生成站点，更新首页、文章和归档页
- `2026-01-20 10:36:12`：创建 `CNAME`
- `2026-01-20 10:37:14`：把 `CNAME` 改成 `www.canonicality.top`
- 当前最新提交：把 `CNAME` 改回 `canonicality.top`

## 本地预览

这个仓库当前不需要构建，可以直接启动静态服务器预览：

```bash
python3 -m http.server 4000
```

然后打开：

```text
http://localhost:4000
```

## 建议下一步

1. 找回或重建 Hexo 源项目：至少需要 `_config.yml`、`package.json`、`source/_posts`。
2. 替换默认的 `Hello World` 文章。
3. 创建 `about`、`categories`、`tags` 页面，或者先从菜单中移除这些链接。
4. 确认自定义域名是否只使用 `canonicality.top`，还是同时配置 `www.canonicality.top`。
5. 如果这个仓库只保留生成结果，可以另建一个源码仓库保存 Hexo 源文件。
