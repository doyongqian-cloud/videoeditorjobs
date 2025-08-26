# SEO 优化指南

本指南将帮助您优化网站的搜索引擎优化（SEO），提高在Google等搜索引擎中的排名。

## 📁 已创建的文件

### 1. `public/sitemap.xml`
- **作用**: 告诉搜索引擎您网站的所有页面
- **格式**: XML格式，符合Google标准
- **包含**: 所有页面、博客文章、指南和工具页面

### 2. `public/robots.txt`
- **作用**: 指导搜索引擎爬虫如何访问您的网站
- **配置**: 允许爬取所有公开页面，禁止爬取管理页面
- **指向**: 网站地图位置

### 3. `scripts/generate-sitemap.js`
- **作用**: 自动生成和更新网站地图
- **功能**: 包含所有页面，自动更新日期
- **使用**: 运行 `npm run sitemap` 即可更新

## 🚀 使用方法

### 生成网站地图
```bash
npm run sitemap
```

### 手动更新网站地图
如果您添加了新页面，可以：
1. 编辑 `scripts/generate-sitemap.js` 文件
2. 在 `pages` 数组中添加新页面
3. 运行 `npm run sitemap` 重新生成

## 🔍 提交给Google

### 方法1: Google Search Console
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加您的网站
3. 在"网站地图"部分提交 `https://assistantvideoeditor.com/sitemap.xml`

### 方法2: 直接提交
访问: `https://www.google.com/ping?sitemap=https://assistantvideoeditor.com/sitemap.xml`

## 📊 页面优先级设置

- **首页**: 1.0 (最高优先级)
- **主要分类页**: 0.9 (博客、指南、工作、工具)
- **重要内容页**: 0.8 (关于、联系、具体指南)
- **辅助页面**: 0.7 (反馈、博客详情)
- **功能页面**: 0.6 (登录、注册)

## 🔄 更新频率设置

- **首页**: weekly (每周)
- **主要分类页**: weekly (每周)
- **内容页面**: monthly (每月)
- **工具页面**: monthly (每月)

## 🌐 域名配置

**重要**: 请将 `scripts/generate-sitemap.js` 中的域名从 `assistantvideoeditor.com` 更改为您的实际域名。

## 📈 SEO 最佳实践

1. **定期更新**: 每月运行一次 `npm run sitemap`
2. **内容质量**: 确保每个页面都有高质量、原创内容
3. **关键词优化**: 在标题、描述和内容中使用相关关键词
4. **内部链接**: 在页面之间建立合理的内部链接
5. **移动友好**: 确保网站在移动设备上表现良好

## 🔧 故障排除

### 网站地图无法访问
- 确保 `public/sitemap.xml` 文件存在
- 检查文件权限
- 验证域名配置

### 搜索引擎不收录
- 等待24-48小时让搜索引擎处理
- 检查robots.txt是否正确
- 确保网站可以正常访问

## 📞 支持

如果您在使用过程中遇到问题，请检查：
1. 文件路径是否正确
2. 域名配置是否更新
3. 服务器配置是否允许访问这些文件

---

**注意**: 首次提交网站地图后，Google可能需要几天时间来发现和索引您的页面。请耐心等待。
