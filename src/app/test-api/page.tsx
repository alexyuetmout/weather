'use client';

import { useState } from 'react';

export default function TestAPI() {
  const [apiKey, setApiKey] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    if (!apiKey.trim()) {
      setResult('请输入 API Key');
      return;
    }

    setLoading(true);
    setResult('测试中...');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Beijing,CN&appid=${apiKey}&units=metric`
      );
      
      const data = await response.json();
      
      if (response.ok) {
        setResult(`✅ API Key 有效！
        
城市: ${data.name}
温度: ${data.main.temp}°C
天气: ${data.weather[0].description}

完整响应:
${JSON.stringify(data, null, 2)}`);
      } else {
        setResult(`❌ API 错误 (${response.status}):
        
${data.message || '未知错误'}

如果是 401 错误，可能的原因：
1. API Key 错误
2. API Key 未激活（新注册需要等待）
3. 账户未验证邮箱`);
      }
    } catch (error) {
      setResult(`❌ 网络错误: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            🧪 OpenWeatherMap API 测试
          </h1>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                API Key:
              </label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="输入你的 OpenWeatherMap API Key"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <button
              onClick={testAPI}
              disabled={loading}
              className="w-full bg-white/30 hover:bg-white/40 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              {loading ? '测试中...' : '🚀 测试 API Key'}
            </button>
          </div>
          
          {result && (
            <div className="bg-white/10 rounded-xl p-4">
              <pre className="text-white text-sm whitespace-pre-wrap font-mono overflow-auto max-h-96">
                {result}
              </pre>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-white/80 hover:text-white underline"
            >
              ← 返回主页
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 