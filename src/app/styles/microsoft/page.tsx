'use client';

import Link from 'next/link';

export default function MicrosoftStylePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white/90 backdrop-blur-sm sticky top-0 z-10 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-blue-600 hover:text-blue-700">← 返回列表</Link>
          <h1 className="text-xl font-semibold">微软风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mb-8 shadow-xl">
            <span className="text-4xl text-white">💼</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">微软风格</h1>
          <p className="text-xl text-gray-600">Fluent Design、亚克力效果、现代企业级界面</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { name: 'Windows', icon: '🪟', color: 'from-blue-500 to-blue-600' },
            { name: 'Office', icon: '📊', color: 'from-orange-500 to-red-500' },
            { name: 'Teams', icon: '👥', color: 'from-purple-500 to-blue-500' },
            { name: 'Azure', icon: '☁️', color: 'from-cyan-500 to-blue-500' }
          ].map((item, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-2xl text-white mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">🎨 Fluent Design特点</h3>
            <ul className="space-y-4">
              <li>• 亚克力材质和毛玻璃效果</li>
              <li>• 企业级专业外观</li>
              <li>• 现代扁平化设计</li>
              <li>• 蓝色主题配色</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">💼 适用场景</h3>
            <ul className="space-y-3">
              <li>• 企业办公软件</li>
              <li>• 管理后台系统</li>
              <li>• B2B产品界面</li>
              <li>• 专业工具应用</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 