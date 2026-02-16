"use client";

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function DebugAuth() {
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('test@example.com');
  const [testPassword, setTestPassword] = useState('testpassword123');

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      }
    }
  );

  const testConnection = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      setDebugInfo({
        connection: 'success',
        session: data.session,
        error: error?.message,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      setDebugInfo({
        connection: 'failed',
        error: err instanceof Error ? err.message : 'Unknown error',
        timestamp: new Date().toISOString()
      });
    }
  };

  const testSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      setDebugInfo({
        signup: 'attempted',
        user: data.user,
        session: data.session,
        error: error?.message,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      setDebugInfo({
        signup: 'failed',
        error: err instanceof Error ? err.message : 'Unknown error',
        timestamp: new Date().toISOString()
      });
    }
  };

  const checkUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
    
    setDebugInfo({
      urlParams: params,
      currentUrl: window.location.href,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Supabase Auth Debug</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
          <div className="space-y-2">
            <p><strong>SUPABASE_URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set'}</p>
            <p><strong>SUPABASE_ANON_KEY:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set'}</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Tests</h2>
          <div className="space-y-4">
            <button
              onClick={testConnection}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Test Connection
            </button>
            
            <button
              onClick={checkUrlParams}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Check URL Params
            </button>
            
            <div className="mt-4">
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="Test email"
                className="border p-2 rounded mr-2"
              />
              <input
                type="password"
                value={testPassword}
                onChange={(e) => setTestPassword(e.target.value)}
                placeholder="Test password"
                className="border p-2 rounded mr-2"
              />
              <button
                onClick={testSignUp}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Test Sign Up
              </button>
            </div>
          </div>
        </div>

        {debugInfo && (
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-4">Debug Info</h2>
            <pre className="bg-white p-4 rounded overflow-auto">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}