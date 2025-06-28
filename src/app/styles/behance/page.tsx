'use client';

import Link from 'next/link';

export default function BehanceStylePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-600 text-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-blue-100 hover:text-white">← 返回列表</Link>
          <h1 className="text-xl font-semibold">Behance风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-8">🎭</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Behance风格</h1>
          <p className="text-xl text-gray-600">专业作品集、蓝色主题、Adobe设计生态</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-5xl">🎨</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">专业项目 {i}</h3>
                <p className="text-gray-600 mb-4">这是一个专业的设计项目展示，体现了高质量的视觉设计和创意思维。</p>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-600">👀 1.2k</span>
                  <span className="text-red-500">❤️ 89</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">🎨 设计特点</h3>
            <ul className="space-y-3">
              <li>• 专业蓝色主题</li>
              <li>• 大图展示为主</li>
              <li>• 简洁现代布局</li>
              <li>• Adobe生态风格</li>
            </ul>
          </div>
          <div className="bg-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">💼 适用场景</h3>
            <ul className="space-y-3">
              <li>• 专业作品集</li>
              <li>• 设计师平台</li>
              <li>• 创意机构</li>
              <li>• 艺术展示</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 