# 柚葉月

这是 `CanonicaliTY.github.io` 的 Hexo 博客源码仓库，站点域名为 `canonicality.top`。

## 项目结构

- `_config.yml`：Hexo 主配置
- `_config.particlex.yml`：ParticleX 主题配置
- `source/_posts/`：博客文章，平时主要改这里
- `source/about/`：关于页面
- `source/categories/`：分类页面
- `source/tags/`：标签页面
- `source/images/`：头像、背景图和加载图
- `themes/particlex/`：ParticleX 主题
- `.github/workflows/pages.yml`：GitHub Pages 自动发布流程

## 本地使用

安装依赖：

```bash
npm install
```

新建文章：

```bash
npm run new -- "文章标题"
```

本地预览：

```bash
npm run server
```

生成静态站点：

```bash
npm run build
```

生成结果会放在 `public/`，这个目录不提交到 Git。

## 写文章

文章放在 `source/_posts/`，使用 Markdown。示例：

```md
---
title: 读量子力学某章的一点笔记
date: 2026-06-03
categories:
  - Physics
tags:
  - quantum mechanics
  - notes
---

正文内容……
```

建议的分类：

- `Physics`
- `AI`
- `Coding`
- `Notes`

## 发布

推送到 `main` 后，GitHub Actions 会运行 Hexo 构建，并把 `public/` 发布到 GitHub Pages。

如果 GitHub Pages 还没有切到 Actions 发布，需要在仓库设置里把 Pages source 改成 GitHub Actions。
