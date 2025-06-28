'use client';

import Link from 'next/link';

export default function DribbbleStylePage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="bg-white/90 backdrop-blur-sm sticky top-0 z-10 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-pink-600 hover:text-pink-700">← 返回列表</Link>
          <h1 className="text-xl font-semibold">Dribbble风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-400 rounded-3xl flex items-center justify-center text-4xl text-white mx-auto mb-8 shadow-xl">🎨</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Dribbble风格</h1>
          <p className="text-xl text-gray-600">创意展示、粉色主题、设计师社区风格</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-4xl">🎨</div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">设计作品 {i}</h3>
                <p className="text-sm text-gray-500">by 设计师</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-pink-600">🎨 设计特点</h3>
            <ul className="space-y-3">
              <li>• 粉色主题配色</li>
              <li>• 作品展示为中心</li>
              <li>• 创意和艺术感</li>
              <li>• 社区互动元素</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-400 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">💼 适用场景</h3>
            <ul className="space-y-3">
              <li>• 设计师作品集</li>
              <li>• 创意展示平台</li>
              <li>• 艺术社区</li>
              <li>• 创意工作室</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 