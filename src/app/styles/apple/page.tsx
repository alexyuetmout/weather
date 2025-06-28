'use client';

import Link from 'next/link';

export default function AppleStylePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-blue-600 hover:text-blue-700 font-medium">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">苹果风格</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* 头部展示 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-8 shadow-2xl">
            <span className="text-4xl text-white">🍎</span>
          </div>
          <h1 className="text-6xl font-thin text-gray-900 mb-6 tracking-tight">
            Think Different
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            体验苹果式的优雅设计语言 — 大留白、细线条、精致细节
          </p>
        </div>

        {/* 特色卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '🎨',
              title: '极简美学',
              description: '减法设计，去除一切不必要的元素，留下最纯粹的体验'
            },
            {
              icon: '✨',
              title: '毛玻璃效果',
              description: '标志性的透明模糊背景，创造层次感和现代感'
            },
            {
              icon: '🔥',
              title: '完美细节',
              description: '每一个像素都经过精心雕琢，追求完美的视觉呈现'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* 产品展示区域 */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-thin text-gray-900 mb-4">产品系列</h2>
            <p className="text-xl text-gray-600">为你的生活而设计</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'MacBook Pro', image: '💻', price: '¥14,999 起', new: true },
              { name: 'iPhone 15', image: '📱', price: '¥5,999 起', new: true },
              { name: 'iPad Air', image: '📱', price: '¥4,399 起', new: false },
              { name: 'Apple Watch', image: '⌚', price: '¥2,499 起', new: false }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl text-center mb-4">{product.image}</div>
                  {product.new && (
                    <div className="inline-flex px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                      NEW
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.price}</p>
                <button className="text-blue-600 font-semibold hover:underline">
                  了解更多 →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 设计原则 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-3xl font-thin text-gray-900 mb-8">设计原则</h3>
            <div className="space-y-6">
              {[
                { title: '简约至上', desc: '移除干扰，专注核心' },
                { title: '直觉交互', desc: '自然而然的用户体验' },
                { title: '视觉层次', desc: '清晰的信息架构' },
                { title: '情感连接', desc: '设计触动人心' }
              ].map((principle, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{principle.title}</h4>
                    <p className="text-gray-600">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-3xl font-thin mb-8">技术实现</h3>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <pre className="text-sm text-blue-100 overflow-x-auto">
{`/* Apple风格核心样式 */
.apple-glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.apple-card {
  @apply bg-white/60 backdrop-blur-xl 
         rounded-3xl shadow-xl border 
         border-white/20;
}

.apple-button {
  @apply bg-blue-600 text-white 
         rounded-full px-8 py-3 
         font-semibold tracking-wide
         hover:bg-blue-700 transition-all;
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* 应用场景 */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-thin mb-4">适用场景</h2>
            <p className="text-xl text-gray-300">让你的产品焕发苹果般的魅力</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏢', title: '企业官网', desc: '专业、可信、现代' },
              { icon: '💎', title: '高端产品', desc: '奢华、精致、品质' },
              { icon: '🎯', title: '品牌展示', desc: '简洁、聚焦、印象深刻' },
              { icon: '🚀', title: '科技应用', desc: '创新、前沿、未来感' }
            ].map((use, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{use.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{use.title}</h3>
                <p className="text-gray-400 text-sm">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 交互元素展示 */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-xl mb-20">
          <h2 className="text-4xl font-thin text-center text-gray-900 mb-12">交互元素</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 按钮样式 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">按钮</h3>
              <button className="w-full bg-blue-600 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-700 transition-all duration-200">
                主要按钮
              </button>
              <button className="w-full border-2 border-gray-300 text-gray-700 rounded-full py-3 px-6 font-semibold hover:border-gray-400 transition-all duration-200">
                次要按钮
              </button>
              <button className="w-full text-blue-600 font-semibold hover:bg-blue-50 rounded-full py-3 px-6 transition-all duration-200">
                文字按钮
              </button>
            </div>

            {/* 输入框 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">输入框</h3>
              <input 
                type="text" 
                placeholder="标准输入框"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="邮箱地址"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <textarea 
                placeholder="多行文本"
                rows={3}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            {/* 开关和选择器 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">控件</h3>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">启用通知</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">自动更新</span>
              </div>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="radio" name="options" className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">选项一</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="radio" name="options" className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">选项二</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 导航 */}
        <div className="flex justify-between">
          <Link 
            href="/styles/notion"
            className="flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-xl hover:bg-white/80 rounded-2xl transition-all duration-300 border border-white/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Notion风格
          </Link>
          
          <Link 
            href="/styles"
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all duration-300 font-semibold"
          >
            查看全部风格
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 