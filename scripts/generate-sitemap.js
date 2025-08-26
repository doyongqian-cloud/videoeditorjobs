const fs = require('fs');
const path = require('path');

// 网站配置
const SITE_URL = 'https://assistantvideoeditor.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// 页面配置
const pages = [
  // 主要页面
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/feedback', priority: '0.7', changefreq: 'monthly' },
  { path: '/signin', priority: '0.6', changefreq: 'monthly' },
  { path: '/signup', priority: '0.6', changefreq: 'monthly' },
  { path: '/skill-check', priority: '0.8', changefreq: 'monthly' },
  
  // 博客页面
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog-details', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog-sidebar', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/ai-tools-for-video-editors', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/assistant-vs-video-editor', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/finding-freelance-clients', priority: '0.8', changefreq: 'monthly' },
  
  // 指南页面
  { path: '/guides', priority: '0.9', changefreq: 'weekly' },
  { path: '/guides/how-to-become', priority: '0.9', changefreq: 'monthly' },
  { path: '/guides/interview-preparation', priority: '0.9', changefreq: 'monthly' },
  { path: '/guides/resume-portfolio', priority: '0.9', changefreq: 'monthly' },
  { path: '/guides/skills', priority: '0.9', changefreq: 'monthly' },
  { path: '/guides/what-does-an-assistant-video-editor-do', priority: '0.9', changefreq: 'monthly' },
  
  // 工作页面
  { path: '/jobs', priority: '0.9', changefreq: 'weekly' },
  { path: '/jobs/assistant-video-editor-jobs', priority: '0.9', changefreq: 'weekly' },
  { path: '/jobs/entry-level-assistant-video-editor', priority: '0.9', changefreq: 'weekly' },
  { path: '/jobs/freelance-assistant-video-editor', priority: '0.9', changefreq: 'weekly' },
  { path: '/jobs/freelance-vs-fulltime', priority: '0.8', changefreq: 'monthly' },
  { path: '/jobs/remote-assistant-video-editor', priority: '0.9', changefreq: 'weekly' },
  { path: '/jobs/resources', priority: '0.8', changefreq: 'monthly' },
  { path: '/jobs/salary-career', priority: '0.8', changefreq: 'monthly' },
  
  // 工具页面
  { path: '/tools', priority: '0.9', changefreq: 'weekly' },
  { path: '/tools/free-editing-software', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/paid-editing-tools', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/project-management-tools', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/resume-templates', priority: '0.8', changefreq: 'monthly' },
];

// 生成XML内容
function generateSitemapXML() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';
  
  pages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n\n`;
  });
  
  xml += '</urlset>';
  return xml;
}

// 写入文件
function writeSitemap() {
  try {
    const xml = generateSitemapXML();
    fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
    console.log('✅ 网站地图已成功生成！');
    console.log(`📁 位置: ${SITEMAP_PATH}`);
    console.log(`🔗 访问: ${SITE_URL}/sitemap.xml`);
    console.log(`📊 包含 ${pages.length} 个页面`);
  } catch (error) {
    console.error('❌ 生成网站地图时出错:', error);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  writeSitemap();
}

module.exports = { generateSitemapXML, writeSitemap };
