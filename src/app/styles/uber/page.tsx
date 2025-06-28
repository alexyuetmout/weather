'use client';

import Link from 'next/link';

export default function UberStylePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-gray-300 hover:text-white">← 返回列表</Link>
          <h1 className="text-xl font-semibold">Uber风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-4xl text-black mx-auto mb-6">🚗</div>
          <h1 className="text-4xl font-bold mb-4">Uber风格</h1>
          <p className="text-lg text-gray-400">极简黑白、现代出行、移动优先设计</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4">🎨 设计特点</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 极简黑白配色</li>
              <li>• 移动优先设计</li>
              <li>• 地图导向界面</li>
              <li>• 现代出行风格</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 text-black">
            <h3 className="text-xl font-bold mb-4">💼 适用场景</h3>
            <ul className="space-y-2">
              <li>• 出行服务应用</li>
              <li>• 地图导航</li>
              <li>• 移动端工具</li>
              <li>• 现代服务平台</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 