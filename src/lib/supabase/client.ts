import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        // 确保 PKCE 流程正确配置
        flowType: 'pkce',
        // 确保自动刷新 token
        autoRefreshToken: true,
        // 确保持久化会话
        persistSession: true,
        // 确保检测会话变化
        detectSessionInUrl: true
      }
    }
  )
}
