'use client';

import Link from 'next/link';

export default function SlackStylePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-purple-600 text-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-purple-100 hover:text-white">← 返回列表</Link>
          <h1 className="text-xl font-semibold">Slack风格</h1>
          <div className="w-16"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6">💬</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Slack风格</h1>
          <p className="text-lg text-gray-600">团队协作、紫色主题、现代办公风格</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-purple-600">🎨 设计特点</h3>
            <ul className="space-y-2">
              <li>• 紫色+彩虹色系</li>
              <li>• 现代聊天界面</li>
              <li>• 协作工具风格</li>
              <li>• 友好的视觉设计</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">💼 适用场景</h3>
            <ul className="space-y-2">
              <li>• 团队协作工具</li>
              <li>• 即时通讯</li>
              <li>• 办公软件</li>
              <li>• 企业内部平台</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 