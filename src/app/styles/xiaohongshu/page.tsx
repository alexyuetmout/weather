'use client';

import Link from 'next/link';

export default function XiaohongshuStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* 顶部导航 */}
      <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/styles" className="text-red-500 hover:text-red-600 font-medium">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">小红书风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 头部信息 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl mb-6 shadow-lg">
            <span className="text-3xl text-white">📖</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">小红书风格</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">温暖色调、卡片式设计、文艺清新的生活分享平台风格</p>
        </div>

        {/* 瀑布流内容 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { title: '春日穿搭分享', tag: '时尚', image: '👗', likes: 1234 },
            { title: '家居布置灵感', tag: '生活', image: '🏠', likes: 856 },
            { title: '美食制作教程', tag: '美食', image: '🍰', likes: 2341 },
            { title: '护肤心得分享', tag: '美妆', image: '💄', likes: 987 },
            { title: '旅行攻略推荐', tag: '旅行', image: '✈️', likes: 1567 },
            { title: '读书笔记整理', tag: '学习', image: '📚', likes: 678 }
          ].map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="aspect-[3/4] bg-gradient-to-br from-red-100 via-pink-100 to-orange-100 p-6 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">{post.tag}</span>
                  <span className="text-gray-400 text-sm">❤️ {post.likes}</span>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 特点展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">🎨 设计特点</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                <span>温暖的红粉色调</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
                <span>卡片式瀑布流布局</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                <span>圆角设计与柔和阴影</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-200 rounded-full"></div>
                <span>文艺清新的视觉风格</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">💡 适用场景</h3>
            <ul className="space-y-3">
              <li>• 生活分享平台</li>
              <li>• 女性向产品</li>
              <li>• 内容社区应用</li>
              <li>• 时尚美妆网站</li>
              <li>• 文艺生活服务</li>
            </ul>
          </div>
        </div>

        {/* CSS 代码示例 */}
        <div className="bg-gray-900 rounded-3xl p-8 text-white mb-8">
          <h3 className="text-xl font-semibold mb-4">📋 CSS 实现参考</h3>
          <div className="bg-gray-800 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-green-400">
{`/* 小红书风格核心样式 */
.xiaohongshu-card {
  @apply bg-white rounded-2xl shadow-sm hover:shadow-lg 
         transition-all duration-300;
}

.xiaohongshu-gradient {
  @apply bg-gradient-to-br from-red-50 to-pink-50;
}

.xiaohongshu-tag {
  @apply px-2 py-1 bg-red-100 text-red-600 
         text-xs rounded-full;
}

.xiaohongshu-button {
  @apply bg-gradient-to-r from-red-400 to-pink-500 
         text-white rounded-full px-6 py-3;
}`}
            </pre>
          </div>
        </div>

        {/* 导航 */}
        <div className="flex justify-between">
          <Link href="/styles/spotify" className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 rounded-2xl transition-colors shadow-sm">
            ← Spotify风格
          </Link>
          <Link href="/styles/google" className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition-colors">
            下一个：Google风格 →
          </Link>
        </div>
      </div>
    </div>
  );
} 