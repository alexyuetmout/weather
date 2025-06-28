'use client';

import Link from 'next/link';

export default function InstagramStylePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/styles" className="text-blue-500 hover:text-blue-600">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold">Instagram风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 头部信息 */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
              📱
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Instagram风格</h2>
              <p className="text-gray-600">现代社交应用的视觉语言</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold mb-1">设计特点</h3>
              <p className="text-sm text-gray-600">圆角卡片、柔和阴影、白色为主</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold mb-1">适用场景</h3>
              <p className="text-sm text-gray-600">社交应用、内容展示、现代网站</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="font-semibold mb-1">关键词</h3>
              <p className="text-sm text-gray-600">清新、现代、社交化</p>
            </div>
          </div>
        </div>

        {/* 模拟Instagram界面 */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">界面展示</h3>
          
          {/* 故事栏 */}
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {['我的故事', '朋友A', '朋友B', '朋友C', '朋友D'].map((name, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full p-0.5 mb-2">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                <span className="text-xs text-gray-600">{name}</span>
              </div>
            ))}
          </div>

          {/* 帖子列表 */}
          <div className="space-y-6">
            {[1, 2].map((post, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                {/* 帖子头部 */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">用户名_{post}</p>
                      <p className="text-xs text-gray-500">2小时前</p>
                    </div>
                  </div>
                  <button className="text-gray-400">⋯</button>
                </div>
                
                {/* 图片 */}
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-2xl mb-3 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span>
                </div>
                
                {/* 互动按钮 */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <button className="hover:scale-110 transition-transform">❤️</button>
                    <button className="hover:scale-110 transition-transform">💬</button>
                    <button className="hover:scale-110 transition-transform">📤</button>
                  </div>
                  <button className="hover:scale-110 transition-transform">🔖</button>
                </div>
                
                {/* 点赞和文字 */}
                <div className="space-y-1">
                  <p className="font-semibold text-sm">{123 + index * 45} 次赞</p>
                  <p className="text-sm">
                    <span className="font-semibold">用户名_{post}</span> 
                    <span className="ml-2">这是一条示例帖子内容，展示Instagram风格的界面设计...</span>
                  </p>
                  <button className="text-gray-500 text-sm">查看全部 {3 + index} 条评论</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 设计要素 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">🎨 核心设计元素</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                <span className="text-sm">圆角设计 (rounded-2xl, rounded-3xl)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <span className="text-sm">渐变配色 (from-pink-400 to-purple-500)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white border-2 border-gray-200 rounded-full"></div>
                <span className="text-sm">白色背景 + 浅色边框</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                <span className="text-sm">柔和阴影 (shadow-sm)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">💡 应用建议</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 适合社交、分享类应用</li>
              <li>• 内容展示为主的平台</li>
              <li>• 年轻用户群体的产品</li>
              <li>• 图片、视频内容丰富的网站</li>
              <li>• 需要温馨、现代感的界面</li>
            </ul>
          </div>
        </div>

        {/* CSS代码示例 */}
        <div className="bg-gray-900 rounded-3xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">📋 CSS 类名参考</h3>
          <div className="bg-gray-800 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-green-400">
{`/* Instagram风格核心类名 */
.instagram-card {
  @apply bg-white rounded-3xl p-6 shadow-sm;
}

.instagram-avatar {
  @apply w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full;
}

.instagram-button {
  @apply hover:scale-110 transition-transform duration-200;
}

.instagram-story {
  @apply w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full p-0.5;
}

.instagram-image {
  @apply w-full rounded-2xl bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100;
}`}
            </pre>
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between mt-8">
          <Link 
            href="/styles"
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-2xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回列表
          </Link>
          
          <Link 
            href="/styles/discord"
            className="flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl transition-colors"
          >
            下一个：Discord风格
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 