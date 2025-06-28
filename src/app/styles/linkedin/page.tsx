'use client';

import Link from 'next/link';

export default function LinkedInStylePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-700 text-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-blue-100 hover:text-white">← 返回列表</Link>
          <h1 className="text-xl font-semibold">LinkedIn风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-blue-700 rounded-xl flex items-center justify-center text-4xl text-white mx-auto mb-6">💼</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">LinkedIn风格</h1>
          <p className="text-lg text-gray-600">专业商务、蓝色主题、职场网络风格</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">🎨 设计特点</h3>
            <ul className="space-y-2">
              <li>• 专业蓝色配色</li>
              <li>• 商务简洁风格</li>
              <li>• 信息密度适中</li>
              <li>• 职场导向设计</li>
            </ul>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">💼 适用场景</h3>
            <ul className="space-y-2">
              <li>• 职场社交平台</li>
              <li>• 商务应用</li>
              <li>• 企业内网</li>
              <li>• 专业服务</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 