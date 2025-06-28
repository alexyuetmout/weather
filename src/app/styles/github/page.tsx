'use client';

import Link from 'next/link';

export default function GitHubStylePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-blue-600 hover:text-blue-700">← 返回列表</Link>
          <h1 className="text-xl font-semibold">GitHub风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-8">⚡</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">GitHub风格</h1>
          <p className="text-xl text-gray-600">简洁黑白、代码感、专业开发者界面</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">🎨 设计特点</h3>
            <ul className="space-y-3">
              <li>• 简洁的黑白配色</li>
              <li>• 代码展示友好</li>
              <li>• 清晰的层级结构</li>
              <li>• 专业开发者风格</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">💼 适用场景</h3>
            <ul className="space-y-3">
              <li>• 开发者工具</li>
              <li>• 代码编辑器</li>
              <li>• 技术文档</li>
              <li>• 程序员社区</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 