'use client';

import Link from 'next/link';

export default function TeslaStylePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-black/90 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-red-400 hover:text-red-300">← 返回列表</Link>
          <h1 className="text-xl font-semibold">Tesla风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6">⚡</div>
          <h1 className="text-4xl font-bold mb-4">Tesla风格</h1>
          <p className="text-lg text-gray-400">极简未来、科技感、电动车风格</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-red-400">🎨 设计特点</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 极简黑色主题</li>
              <li>• 红色强调色</li>
              <li>• 未来科技感</li>
              <li>• 大留白设计</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-3xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">💼 适用场景</h3>
            <ul className="space-y-2">
              <li>• 科技产品展示</li>
              <li>• 汽车行业</li>
              <li>• 高端品牌</li>
              <li>• 未来感应用</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 