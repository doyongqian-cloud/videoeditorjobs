# Supabase Authentication Setup

This project has been configured with Supabase Authentication supporting email registration and Google OAuth.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase Project Setup

1. Go to [Supabase](https://supabase.com) and create a new project
2. In your project dashboard, go to Settings > API
3. Copy the Project URL and anon/public key
4. Add these to your `.env.local` file

## Email Confirmation Setup

**重要：** 为了确保邮件确认链接正确工作，需要在Supabase项目中配置正确的URL：

1. 在Supabase Dashboard中，进入 **Authentication > URL Configuration**
2. 设置以下URL：
   - **Site URL**: `http://localhost:3000` (开发环境) 或 `https://yourdomain.com` (生产环境)
   - **Redirect URLs**: 添加以下URL：
     - `http://localhost:3000/auth/callback` (开发环境)
     - `https://yourdomain.com/auth/callback` (生产环境)
     - `http://localhost:3000/**` (开发环境通配符)
     - `https://yourdomain.com/**` (生产环境通配符)

3. 在 **Authentication > Settings** 中：
   - 确保 **Enable email confirmations** 已启用
   - 设置 **Email confirmation template** 如果需要自定义邮件模板
   - 确保 **Confirm email** 设置为 `true`

4. **重要配置** - 在 **Authentication > Settings > Email** 中：
   - **Enable email confirmations**: 启用
   - **Confirm email**: 启用
   - **Email confirmation template**: 确保模板中的确认链接指向正确的回调URL
   - **Email confirmation URL**: 设置为 `http://localhost:3000/auth/callback` (开发环境)

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
5. Set the authorized redirect URIs to:
   - `https://your-project-id.supabase.co/auth/v1/callback`
   - `http://localhost:3000/auth/callback` (for development)
6. Copy the Client ID and Client Secret
7. In Supabase dashboard, go to Authentication > Providers > Google
8. Enable Google provider and add your Client ID and Client Secret

## Features Implemented

- ✅ Email registration with email confirmation
- ✅ Email/password sign in
- ✅ Google OAuth sign in/sign up
- ✅ Protected routes middleware
- ✅ Authentication context and hooks
- ✅ Error handling and loading states
- ✅ Automatic redirects for authenticated/unauthenticated users

## Usage

The authentication system is now ready to use. Users can:

1. Sign up with email and password (requires email confirmation)
2. Sign in with email and password
3. Sign in/sign up with Google
4. Access protected routes (automatically redirected to sign in if not authenticated)
5. Be redirected away from auth pages if already signed in

## 故障排除

### 邮件确认链接地址不正确

如果用户收到的邮件确认链接地址不正确，请检查：

1. **Supabase URL配置**：
   - 确保在Supabase Dashboard的 **Authentication > URL Configuration** 中正确设置了Site URL和Redirect URLs
   - 开发环境应设置为 `http://localhost:3000`
   - 生产环境应设置为你的实际域名

2. **环境变量**：
   - 确保 `.env.local` 文件中的 `NEXT_PUBLIC_SUPABASE_URL` 正确
   - 确保没有多余的空格或引号

3. **代码配置**：
   - 确保 `AuthContext.tsx` 中的 `emailRedirectTo` 配置正确
   - 确保回调路由 `/auth/callback` 存在且可访问

### 常见错误

- **"Invalid redirect URL"**: 检查Supabase中的Redirect URLs配置
- **"Email not confirmed"**: 检查邮件确认是否已启用
- **"Invalid email"**: 检查邮件格式和Supabase的邮件设置
- **"otp_expired"**: 邮件确认链接已过期，用户需要重新注册或请求新的确认邮件
- **"access_denied"**: 访问被拒绝，通常是由于URL配置错误或用户取消了确认流程

### OTP过期错误解决方案

如果用户遇到 `otp_expired` 错误（即使立即点击邮件链接）：

#### 1. 立即检查 Supabase 配置

**Authentication > URL Configuration**:
- **Site URL**: `http://localhost:3000` (开发环境)
- **Redirect URLs**: 必须包含 `http://localhost:3000/auth/callback`

**Authentication > Settings > Email**:
- **Enable email confirmations**: ✅ 启用
- **Confirm email**: ✅ 启用
- **Email confirmation URL**: `http://localhost:3000/auth/callback` (如果存在此设置)

#### 2. 使用调试工具

访问 `http://localhost:3000/debug-auth` 进行详细诊断：
- 测试 Supabase 连接
- 测试注册流程
- 检查配置参数

#### 3. 检查 Supabase 项目日志

在 Supabase Dashboard 中：
1. 进入 **Logs** 部分
2. 查看 **Auth** 日志
3. 查找注册和确认相关的错误信息

#### 4. 常见原因

- **Redirect URLs 配置错误**: 最常见的原因
- **邮件确认功能未启用**
- **环境变量错误**
- **Supabase 项目设置问题**
- **邮件模板配置错误**
- **回调路由逻辑错误**: 即使验证成功也会重定向到错误页面

#### 5. 用户操作

- 重新访问注册页面
- 使用相同的邮箱和密码重新注册
- 检查邮箱中的新确认链接
- 立即点击新链接（不要等待）

### 后台验证成功但前端报错

如果 Supabase 后台已经成功验证了账户，但前端仍然显示错误页面，这通常是由于：

#### 1. 回调路由逻辑错误
**问题**：即使 `exchangeCodeForSession` 成功，代码仍然会执行到错误重定向
**解决**：确保回调路由有正确的 `else` 语句

#### 2. 调试步骤
1. **检查服务器日志**：查看控制台输出的调试信息
2. **验证 URL 参数**：确保回调 URL 包含正确的 `code` 参数
3. **检查 Supabase 日志**：在 Dashboard 中查看 Auth 日志
4. **测试回调路由**：直接访问回调 URL 测试

#### 3. 常见错误信息
- `No authentication code provided`: URL 中没有 code 参数
- `Auth callback error`: 代码交换失败
- `Authentication Error`: 通用错误页面（通常是逻辑错误）
- `invalid request: both auth code and code verifier should be non-empty`: PKCE 流程配置错误
- **隐式流程问题**: 认证成功但回调路由无法处理 URL fragment 中的认证信息

#### 4. 解决方案
- 修复回调路由逻辑
- 添加详细的错误日志
- 确保正确的错误处理流程

### PKCE 流程错误解决方案

如果遇到 `invalid request: both auth code and code verifier should be non-empty` 错误：

#### 1. 问题原因
- Supabase 客户端配置不正确
- PKCE (Proof Key for Code Exchange) 流程未正确启用
- 客户端和服务器端配置不一致

#### 2. 解决步骤
1. **更新客户端配置**：确保使用正确的 Supabase SSR 客户端
2. **启用 PKCE 流程**：在客户端配置中设置 `flowType: 'pkce'`
3. **统一配置**：确保客户端和服务器端使用相同的配置

#### 3. 配置示例
```typescript
// 客户端配置
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        flowType: 'pkce',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    }
  )
}
```

#### 4. 验证步骤
1. 清除浏览器缓存和 cookies
2. 重新启动开发服务器
3. 测试注册流程
4. 检查控制台日志

#### 5. Supabase 项目配置检查

如果问题仍然存在，请检查 Supabase 项目设置：

1. **进入 Supabase Dashboard** → 你的项目 → **Authentication** → **Settings**

2. **检查以下设置**：
   - **Enable email confirmations**: ✅ 启用
   - **Confirm email**: ✅ 启用
   - **Enable phone confirmations**: 可以禁用（如果不需要）

3. **检查 URL 配置**：
   - **Site URL**: `http://localhost:3000` (开发环境)
   - **Redirect URLs**: 必须包含 `http://localhost:3000/auth/callback`

4. **检查 Auth 提供商设置**：
   - 确保 **Email** 提供商已启用
   - 检查 **Email confirmation template** 设置

5. **使用调试页面**：
   - 访问 `http://localhost:3000/debug-auth`
   - 测试连接和注册流程
   - 查看详细的调试信息

### 隐式流程问题解决方案

如果遇到 `error=no_code` 但 URL 中包含 `access_token` 的情况：

#### 1. 问题原因
- Supabase 使用了隐式流程而不是 PKCE 流程
- 认证信息通过 URL fragment（# 后面）传递，而不是 query 参数
- 回调路由只检查 `code` 参数，忽略了 fragment 中的认证信息

#### 2. 解决方案
1. **更新回调路由**：添加对 URL fragment 的检查
2. **创建隐式流程处理页面**：专门处理 fragment 中的认证信息
3. **自动重定向**：成功认证后自动重定向到首页

#### 3. 技术实现
```typescript
// 检查 URL fragment 中的认证信息
if (hash && hash.includes('access_token')) {
  // 重定向到隐式流程处理页面
  return NextResponse.redirect(`${origin}/auth/callback/implicit?${hash}`)
}
```

#### 4. 验证步骤
1. 注册新账户
2. 点击邮件确认链接
3. 应该看到 "Authentication Successful!" 页面
4. 自动重定向到首页

## Next Steps

1. Set up your Supabase project and add environment variables
2. Configure Google OAuth in Supabase
3. Test the authentication flow
4. Customize the UI as needed
5. Add additional user profile fields if required
