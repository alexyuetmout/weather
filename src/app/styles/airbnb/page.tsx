'use client';

import Link from 'next/link';

export default function AirbnbStylePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-red-500 hover:text-red-600">← 返回列表</Link>
          <h1 className="text-xl font-semibold">Airbnb风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-red-500 rounded-3xl flex items-center justify-center text-4xl text-white mx-auto mb-6">🏠</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Airbnb风格</h1>
          <p className="text-lg text-gray-600">温馨舒适、红色主题、旅行住宿风格</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-red-500">🎨 设计特点</h3>
            <ul className="space-y-2">
              <li>• 温暖的红色主题</li>
              <li>• 卡片式房源展示</li>
              <li>• 温馨家居感</li>
              <li>• 旅行生活风格</li>
            </ul>
          </div>
          <div className="bg-red-500 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">💼 适用场景</h3>
            <ul className="space-y-2">
              <li>• 旅行住宿平台</li>
              <li>• 房屋租赁</li>
              <li>• 生活服务</li>
              <li>• 本地体验</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 