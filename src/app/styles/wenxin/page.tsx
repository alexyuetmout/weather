'use client';

import Link from 'next/link';

export default function WenxinStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* 顶部导航 */}
      <div className="bg-white/90 backdrop-blur-sm sticky top-0 z-10 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-orange-600 hover:text-orange-700 font-medium">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">温馨风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 头部信息 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl mb-8 shadow-xl">
            <span className="text-4xl text-white">🏠</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">温馨风格</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">暖色调、圆润设计、舒适家庭感的界面风格</p>
        </div>

        {/* 温馨场景展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: '家庭相册', 
              icon: '📸', 
              description: '记录美好时光',
              color: 'from-orange-200 to-amber-200'
            },
            { 
              title: '温馨日记', 
              icon: '📖', 
              description: '写下生活点滴',
              color: 'from-red-200 to-pink-200'
            },
            { 
              title: '家居装饰', 
              icon: '🛋️', 
              description: '舒适的生活空间',
              color: 'from-yellow-200 to-orange-200'
            },
            { 
              title: '亲子时光', 
              icon: '👨‍👩‍👧‍👦', 
              description: '家人的幸福时刻',
              color: 'from-pink-200 to-rose-200'
            },
            { 
              title: '温暖回忆', 
              icon: '💝', 
              description: '珍藏的美好回忆',
              color: 'from-amber-200 to-yellow-200'
            },
            { 
              title: '舒适角落', 
              icon: '☕', 
              description: '惬意的休闲时光',
              color: 'from-orange-200 to-red-200'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>

        {/* 温馨色彩展示 */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/30">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">🎨 温馨色彩板</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: '温暖橙', color: 'bg-orange-300', hex: '#fdba74' },
              { name: '柔和红', color: 'bg-red-200', hex: '#fecaca' },
              { name: '暖黄色', color: 'bg-yellow-200', hex: '#fef3c7' },
              { name: '粉嫩色', color: 'bg-pink-200', hex: '#fbcfe8' },
              { name: '琥珀色', color: 'bg-amber-200', hex: '#fde68a' },
              { name: '桃花色', color: 'bg-rose-200', hex: '#fecdd3' },
              { name: '杏仁色', color: 'bg-orange-100', hex: '#fed7aa' },
              { name: '奶油色', color: 'bg-yellow-100', hex: '#fef7cd' }
            ].map((colorItem, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${colorItem.color} rounded-2xl mx-auto mb-3 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}></div>
                <p className="text-sm font-medium text-gray-700">{colorItem.name}</p>
                <p className="text-xs text-gray-500">{colorItem.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 特点与应用 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold mb-6 text-orange-600">🎨 设计特点</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-orange-300 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">暖色调为主（橙、红、黄、粉）</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-red-200 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">圆润的边角和柔和的线条</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-yellow-200 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">柔和的阴影和渐变效果</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-pink-200 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">温馨的图标和插画元素</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-amber-200 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">舒适的间距和布局</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">💡 适用场景</h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-center space-x-3">
                <span className="text-xl">🏠</span>
                <span>家庭生活应用</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-xl">👶</span>
                <span>亲子育儿平台</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-xl">🍳</span>
                <span>美食烹饪网站</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-xl">💕</span>
                <span>情感交流社区</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-xl">🎁</span>
                <span>温馨礼品商城</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-xl">📖</span>
                <span>生活记录应用</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CSS实现示例 */}
        <div className="bg-gray-900 rounded-3xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-6">📋 CSS 实现参考</h3>
          <div className="bg-gray-800 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-green-400">
{`/* 温馨风格核心样式 */
.wenxin-container {
  @apply bg-gradient-to-br from-orange-50 to-red-50;
}

.wenxin-card {
  @apply bg-white/80 backdrop-blur-sm rounded-3xl 
         shadow-lg border border-white/30
         hover:shadow-xl transition-all duration-300;
}

.wenxin-button {
  @apply bg-gradient-to-r from-orange-400 to-red-400
         text-white rounded-2xl px-8 py-4
         hover:scale-105 transition-transform;
}

.wenxin-text {
  @apply text-gray-700 leading-relaxed;
}

.wenxin-accent {
  @apply text-orange-600 font-semibold;
}`}
            </pre>
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between">
          <Link href="/styles" className="flex items-center gap-2 px-8 py-4 bg-white/80 hover:bg-white rounded-3xl transition-colors shadow-lg">
            ← 返回风格列表
          </Link>
          <Link href="/styles/jianyue" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white rounded-3xl transition-colors shadow-lg">
            下一个：简约风格 →
          </Link>
        </div>
      </div>
    </div>
  );
} 