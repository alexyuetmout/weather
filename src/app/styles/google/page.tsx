'use client';

import Link from 'next/link';

export default function GoogleStylePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-blue-600 hover:text-blue-700">← 返回列表</Link>
          <h1 className="text-xl font-semibold">Google风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 头部 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-3xl mb-8 shadow-xl">
            <span className="text-4xl text-white">🔍</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-blue-600">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-600">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
            <span className="text-gray-900 ml-4">风格</span>
          </h1>
          <p className="text-xl text-gray-600">Material Design设计语言，卡片阴影，鲜艳色彩</p>
        </div>

        {/* Material Design 卡片展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '📧', title: 'Gmail', desc: '电子邮件服务', color: 'bg-red-500' },
            { icon: '📅', title: 'Calendar', desc: '日历应用', color: 'bg-blue-500' },
            { icon: '📱', title: 'Android', desc: '移动操作系统', color: 'bg-green-500' },
            { icon: '☁️', title: 'Drive', desc: '云存储服务', color: 'bg-yellow-500' },
            { icon: '🎬', title: 'YouTube', desc: '视频分享平台', color: 'bg-red-600' },
            { icon: '🗺️', title: 'Maps', desc: '地图导航', color: 'bg-green-600' }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`${item.color} p-6 text-white`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{item.desc}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium transition-colors">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Material Design 原则 */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Material Design 设计原则</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold mb-3">材质感</h3>
              <p className="text-gray-600">模拟真实世界的材质纹理和光影效果</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-3">大胆用色</h3>
              <p className="text-gray-600">使用鲜艳明亮的色彩传达信息和情感</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3">有意义的动效</h3>
              <p className="text-gray-600">使用动画引导用户注意力和操作流程</p>
            </div>
          </div>
        </div>

        {/* 特点说明 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">🎨 核心特点</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>卡片式设计和阴影效果</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>鲜艳的品牌色彩体系</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Roboto字体和清晰排版</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>浮动操作按钮(FAB)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">💼 适用场景</h3>
            <ul className="space-y-3 text-white/90">
              <li>• 企业级应用界面</li>
              <li>• Android应用设计</li>
              <li>• 工具类产品</li>
              <li>• 教育和办公软件</li>
              <li>• 需要专业感的平台</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 