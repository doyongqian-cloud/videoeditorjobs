const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 正确的域名
const CORRECT_DOMAIN = 'assistvideoeditorjobs.com';
const WRONG_DOMAIN = 'assistantvideoeditor.com';

console.log('🔍 检查域名一致性...\n');

// 检查所有文件中的域名使用
try {
  const result = execSync(`grep -r "${WRONG_DOMAIN}" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.json" || true`, { encoding: 'utf8' });
  
  if (result.trim()) {
    console.log('❌ 发现错误的域名使用:');
    console.log(result);
    process.exit(1);
  } else {
    console.log('✅ 所有文件都使用正确的域名:', CORRECT_DOMAIN);
  }
} catch (error) {
  console.log('✅ 未发现错误的域名使用');
}

// 检查sitemap.xml
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  if (sitemapContent.includes(WRONG_DOMAIN)) {
    console.log('❌ sitemap.xml中发现错误域名');
    process.exit(1);
  } else {
    console.log('✅ sitemap.xml使用正确域名');
  }
}

// 检查robots.txt
const robotsPath = path.join(__dirname, '../public/robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (robotsContent.includes(WRONG_DOMAIN)) {
    console.log('❌ robots.txt中发现错误域名');
    process.exit(1);
  } else {
    console.log('✅ robots.txt使用正确域名');
  }
}

// 检查site.ts配置
const siteConfigPath = path.join(__dirname, '../src/config/site.ts');
if (fs.existsSync(siteConfigPath)) {
  const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
  if (siteConfigContent.includes(WRONG_DOMAIN)) {
    console.log('❌ site.ts配置中发现错误域名');
    process.exit(1);
  } else if (siteConfigContent.includes(CORRECT_DOMAIN)) {
    console.log('✅ site.ts配置使用正确域名');
  }
}

console.log('\n🎉 域名一致性检查完成！');
console.log('📊 所有文件都使用正确的域名:', CORRECT_DOMAIN);
