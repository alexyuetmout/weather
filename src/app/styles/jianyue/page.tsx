'use client';

import Link from 'next/link';

export default function JianyueStylePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-gray-600 hover:text-gray-900 font-medium">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">简约风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* 头部区域 - 大留白设计 */}
        <div className="text-center py-32">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-50 rounded-full mb-16">
            <span className="text-6xl text-gray-400">⚪</span>
          </div>
          <h1 className="text-7xl font-light text-gray-900 mb-8 tracking-wide">简约风格</h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            极简主义的精髓<br/>少即是多的设计哲学
          </p>
        </div>

        {/* 极简网格展示 */}
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* 留白的力量 */}
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-200 rounded-sm mx-auto mb-8 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-900 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">留白的力量</h3>
              <p className="text-gray-500 leading-relaxed">大量的空白空间让内容更加突出，给用户视觉呼吸的空间</p>
            </div>

            {/* 几何之美 */}
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-200 rounded-sm mx-auto mb-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1 w-12 h-12">
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-gray-300 rounded-sm"></div>
                  <div className="bg-gray-300 rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">几何之美</h3>
              <p className="text-gray-500 leading-relaxed">简单的几何形状组合，创造出和谐统一的视觉体验</p>
            </div>

            {/* 纯粹色彩 */}
            <div className="text-center">
              <div className="w-24 h-24 border border-gray-200 rounded-sm mx-auto mb-8 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-3 h-12 bg-black"></div>
                  <div className="w-3 h-12 bg-gray-400"></div>
                  <div className="w-3 h-12 bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">纯粹色彩</h3>
              <p className="text-gray-500 leading-relaxed">黑白灰的经典组合，去除一切不必要的色彩干扰</p>
            </div>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="py-24 border-t border-gray-100">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-6">设计原则</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* 左侧 - 原则列表 */}
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "减法思维",
                  description: "移除所有不必要的元素，只保留最核心的功能和内容"
                },
                {
                  number: "02", 
                  title: "网格系统",
                  description: "使用严格的网格布局，确保每个元素都有其存在的理由"
                },
                {
                  number: "03",
                  title: "层次结构",
                  description: "通过字体大小、颜色深浅建立清晰的信息层级"
                },
                {
                  number: "04",
                  title: "功能优先",
                  description: "形式服务于功能，每个设计决策都以用户体验为出发点"
                }
              ].map((principle, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-gray-300 rounded-sm flex items-center justify-center">
                    <span className="text-sm font-light text-gray-600">{principle.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">{principle.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 右侧 - 视觉演示 */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-12 text-center">
                <div className="w-16 h-16 bg-gray-900 mx-auto mb-6"></div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">极简卡片</h3>
                <p className="text-gray-500 mb-6">只有最必要的信息</p>
                <div className="w-full h-px bg-gray-300 mb-6"></div>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 font-light hover:bg-gray-900 hover:text-white transition-all duration-300">
                  了解更多
                </button>
              </div>

              <div className="text-center py-12">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="aspect-square bg-gray-100"></div>
                  <div className="aspect-square bg-gray-300"></div>
                  <div className="aspect-square bg-gray-900"></div>
                </div>
                <p className="text-gray-500 font-light">简约的网格布局</p>
              </div>
            </div>
          </div>
        </div>

        {/* 适用场景 */}
        <div className="py-24 border-t border-gray-100">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-6">适用场景</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🏛️", title: "建筑设计", desc: "展示建筑作品的纯粹美感" },
              { icon: "💼", title: "企业官网", desc: "传达专业和可信赖的形象" },
              { icon: "📐", title: "设计工具", desc: "让用户专注于创作本身" },
              { icon: "📖", title: "阅读应用", desc: "提供干净舒适的阅读体验" }
            ].map((scene, index) => (
              <div key={index} className="text-center p-8 hover:bg-gray-50 transition-colors duration-300">
                <div className="text-4xl mb-6">{scene.icon}</div>
                <h3 className="text-lg font-light text-gray-900 mb-4">{scene.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{scene.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CSS 代码示例 */}
        <div className="py-24 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-6">实现参考</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>

          <div className="bg-gray-900 rounded-none p-12">
            <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
{`/* 简约风格核心样式 */
.minimal-container {
  @apply bg-white text-gray-900;
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 300;
}

.minimal-card {
  @apply bg-white border border-gray-100 p-12;
  box-shadow: none;
}

.minimal-button {
  @apply px-8 py-3 border border-gray-300 
         text-gray-700 font-light
         hover:bg-gray-900 hover:text-white
         transition-all duration-300;
}

.minimal-text {
  @apply text-gray-500 leading-relaxed;
  font-weight: 300;
}

.minimal-heading {
  @apply text-gray-900 font-light tracking-wide;
}`}
            </pre>
          </div>
        </div>

        {/* 导航 */}
        <div className="py-16 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <Link href="/styles/wenxin" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 font-light">
              <span>←</span>
              <span>温馨风格</span>
            </Link>
            <Link href="/styles" className="px-8 py-3 border border-gray-300 text-gray-700 font-light hover:bg-gray-900 hover:text-white transition-all duration-300">
              返回列表
            </Link>
            <Link href="/styles/kexue" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 font-light">
              <span>科学风格</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 