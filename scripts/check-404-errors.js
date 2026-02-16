const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 检查全站404错误...\n');

// 检查sitemap中的URL是否都有对应页面
function checkSitemapUrls() {
  console.log('📋 检查sitemap中的URL...');
  
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ sitemap.xml不存在');
    return;
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urlMatches = sitemapContent.match(/<loc>https:\/\/assistvideoeditorjobs\.com\/([^<]+)<\/loc>/g);
  
  if (!urlMatches) {
    console.log('❌ 无法解析sitemap中的URL');
    return;
  }

  const urls = urlMatches.map(match => {
    const url = match.replace('<loc>https://assistvideoeditorjobs.com/', '').replace('</loc>', '');
    return url === '' ? '/' : url;
  });

  let missingPages = [];
  
  for (const url of urls) {
    const pagePath = url === '/' ? 'page.tsx' : `${url}/page.tsx`;
    const fullPath = path.join(__dirname, '../src/app', pagePath);
    
    if (!fs.existsSync(fullPath)) {
      missingPages.push(url);
    }
  }

  if (missingPages.length > 0) {
    console.log('❌ 发现缺失的页面:');
    missingPages.forEach(page => console.log(`   - ${page}`));
  } else {
    console.log('✅ 所有sitemap中的URL都有对应页面');
  }
}

// 检查空目录
function checkEmptyDirectories() {
  console.log('\n📁 检查空目录...');
  
  const appDir = path.join(__dirname, '../src/app');
  const directories = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let emptyDirs = [];
  
  for (const dir of directories) {
    const dirPath = path.join(appDir, dir);
    const files = fs.readdirSync(dirPath);
    
    if (files.length === 0) {
      emptyDirs.push(dir);
    }
  }

  if (emptyDirs.length > 0) {
    console.log('❌ 发现空目录:');
    emptyDirs.forEach(dir => console.log(`   - ${dir}/`));
  } else {
    console.log('✅ 没有发现空目录');
  }
}

// 检查内部链接
function checkInternalLinks() {
  console.log('\n🔗 检查内部链接...');
  
  try {
    const result = execSync(`grep -r "href=[\"']/[^\"']*[\"']" src/ --include="*.tsx" --include="*.ts" || true`, { encoding: 'utf8' });
    
    if (result.trim()) {
      const links = result.split('\n').filter(line => line.trim());
      console.log(`✅ 发现 ${links.length} 个内部链接`);
      
      // 提取链接路径
      const linkPaths = links.map(line => {
        const match = line.match(/href=["']\/([^"']*)["']/);
        return match ? match[1] : null;
      }).filter(Boolean);

      // 检查链接是否指向存在的页面
      let brokenLinks = [];
      for (const linkPath of linkPaths) {
        const pagePath = linkPath === '' ? 'page.tsx' : `${linkPath}/page.tsx`;
        const fullPath = path.join(__dirname, '../src/app', pagePath);
        
        if (!fs.existsSync(fullPath)) {
          brokenLinks.push(linkPath);
        }
      }

      if (brokenLinks.length > 0) {
        console.log('❌ 发现断开的内部链接:');
        brokenLinks.forEach(link => console.log(`   - /${link}`));
      } else {
        console.log('✅ 所有内部链接都指向存在的页面');
      }
    } else {
      console.log('✅ 没有发现内部链接');
    }
  } catch (error) {
    console.log('⚠️ 无法检查内部链接');
  }
}

// 检查图片资源
function checkImageResources() {
  console.log('\n🖼️ 检查图片资源...');
  
  try {
    const result = execSync(`grep -r "src=[\"']/[^\"']*\\.(jpg|jpeg|png|gif|svg|webp)[\"']" src/ --include="*.tsx" --include="*.ts" || true`, { encoding: 'utf8' });
    
    if (result.trim()) {
      const images = result.split('\n').filter(line => line.trim());
      console.log(`✅ 发现 ${images.length} 个图片引用`);
      
      // 提取图片路径
      const imagePaths = images.map(line => {
        const match = line.match(/src=["']\/([^"']*\\.(jpg|jpeg|png|gif|svg|webp))["']/);
        return match ? match[1] : null;
      }).filter(Boolean);

      // 检查图片是否存在
      let missingImages = [];
      for (const imagePath of imagePaths) {
        const fullPath = path.join(__dirname, '../public', imagePath);
        
        if (!fs.existsSync(fullPath)) {
          missingImages.push(imagePath);
        }
      }

      if (missingImages.length > 0) {
        console.log('❌ 发现缺失的图片:');
        missingImages.forEach(img => console.log(`   - /${img}`));
      } else {
        console.log('✅ 所有图片资源都存在');
      }
    } else {
      console.log('✅ 没有发现图片引用');
    }
  } catch (error) {
    console.log('⚠️ 无法检查图片资源');
  }
}

// 运行所有检查
function runAllChecks() {
  checkSitemapUrls();
  checkEmptyDirectories();
  checkInternalLinks();
  checkImageResources();
  
  console.log('\n🎉 404错误检查完成！');
  console.log('💡 建议定期运行此脚本以确保没有404错误');
}

runAllChecks();
