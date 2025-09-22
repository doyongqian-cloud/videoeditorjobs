#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envExample = `# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Analytics 4 配置
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-VZZMFQ9BWE
NEXT_PUBLIC_GA4_ENABLED=true

# 开发环境配置
NODE_ENV=development`;

const envLocalPath = path.join(process.cwd(), '.env.local');

// 检查是否已存在 .env.local 文件
if (fs.existsSync(envLocalPath)) {
  console.log('✅ .env.local 文件已存在');
  
  // 读取现有文件内容
  const existingContent = fs.readFileSync(envLocalPath, 'utf8');
  
  // 检查是否包含GA4配置
  if (existingContent.includes('NEXT_PUBLIC_GA4_MEASUREMENT_ID')) {
    console.log('✅ GA4配置已存在');
  } else {
    console.log('⚠️  添加GA4配置到现有 .env.local 文件');
    const updatedContent = existingContent + '\n\n# Google Analytics 4 配置\nNEXT_PUBLIC_GA4_MEASUREMENT_ID=G-VZZMFQ9BWE\nNEXT_PUBLIC_GA4_ENABLED=true';
    fs.writeFileSync(envLocalPath, updatedContent);
    console.log('✅ GA4配置已添加');
  }
} else {
  console.log('📝 创建 .env.local 文件');
  fs.writeFileSync(envLocalPath, envExample);
  console.log('✅ .env.local 文件已创建');
}

console.log('\n📋 环境变量配置说明:');
console.log('- NEXT_PUBLIC_GA4_MEASUREMENT_ID: 您的GA4测量ID');
console.log('- NEXT_PUBLIC_GA4_ENABLED: 是否启用GA4 (true/false)');
console.log('- NODE_ENV: 环境类型 (development/production)');
console.log('\n💡 提示:');
console.log('- 开发环境: GA4不会发送数据，仅在控制台显示调试信息');
console.log('- 生产环境: 需要设置 NODE_ENV=production 和 NEXT_PUBLIC_GA4_ENABLED=true');
console.log('\n🔗 相关文档: docs/GA4_OPTIMIZATION_GUIDE.md');

