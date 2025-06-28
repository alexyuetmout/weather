'use client';

import Link from 'next/link';

export default function KexueStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      {/* 顶部导航 */}
      <div className="bg-white/90 backdrop-blur-sm sticky top-0 z-10 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-blue-600 hover:text-blue-700 font-medium">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">科学风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 头部信息 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-10 shadow-2xl">
            <span className="text-5xl text-white">🔬</span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-8">科学风格</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            精确、理性、数据驱动的界面设计语言
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* 科学仪表板模拟 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 数据卡片 */}
            {[
              { label: "实验样本", value: "1,247", unit: "个", trend: "+12.3%", color: "blue" },
              { label: "数据准确率", value: "99.7", unit: "%", trend: "+0.2%", color: "cyan" },
              { label: "分析时间", value: "2.4", unit: "秒", trend: "-18.5%", color: "indigo" },
              { label: "成功率", value: "94.6", unit: "%", trend: "+5.1%", color: "blue" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h3 className="text-sm font-medium text-gray-600 mb-3">{item.label}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {item.value}<span className="text-lg text-gray-500 ml-1">{item.unit}</span>
                </div>
                <div className={`text-sm font-medium ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {item.trend}
                </div>
              </div>
            ))}
          </div>

          {/* 模拟图表区域 */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 柱状图模拟 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">实验数据趋势</h3>
              <div className="flex items-end space-x-2 h-32">
                {[65, 78, 82, 45, 92, 88, 76, 95].map((height, index) => (
                  <div key={index} className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t" style={{height: `${height}%`}}></div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>周一</span>
                <span>周二</span>
                <span>周三</span>
                <span>周四</span>
                <span>周五</span>
                <span>周六</span>
                <span>周日</span>
              </div>
            </div>

            {/* 环形图模拟 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">数据分布</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <div className="absolute inset-2 bg-gray-50 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">87%</div>
                      <div className="text-xs text-gray-500">完成率</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">已完成 (87%)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">进行中 (13%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 适用场景 */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">适用场景</h2>
            <p className="text-lg text-gray-600">科学风格适合的应用领域</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "🧪", 
                title: "科研院所", 
                desc: "实验室管理系统、研究数据平台"
              },
              { 
                icon: "🏥", 
                title: "医疗健康", 
                desc: "医院信息系统、健康监测应用"
              },
              { 
                icon: "📈", 
                title: "数据分析", 
                desc: "商业智能、统计分析平台"
              },
              { 
                icon: "🎓", 
                title: "教育科技", 
                desc: "在线学习、教育管理系统"
              }
            ].map((scene, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-5xl mb-6">{scene.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{scene.title}</h3>
                <p className="text-gray-600 leading-relaxed">{scene.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CSS实现示例 */}
        <div className="bg-gray-900 rounded-3xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">CSS 实现参考</h3>
          <div className="bg-gray-800 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-green-400 leading-relaxed">
{`/* 科学风格核心样式 */
.science-container {
  @apply bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50;
}

.science-card {
  @apply bg-white rounded-3xl shadow-xl border border-blue-100
         hover:shadow-2xl transition-all duration-300;
}

.science-data-card {
  @apply bg-gradient-to-br from-blue-50 to-cyan-50 
         rounded-2xl border border-blue-100 p-6;
}

.science-button {
  @apply bg-gradient-to-r from-blue-500 to-cyan-500
         text-white rounded-xl px-6 py-3 font-medium
         hover:from-blue-600 hover:to-cyan-600;
}`}
            </pre>
          </div>
        </div>

        {/* 导航 */}
        <div className="flex justify-between items-center">
          <Link href="/styles/jianyue" className="flex items-center space-x-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-2xl transition-colors shadow-lg">
            <span>←</span>
            <span>简约风格</span>
          </Link>
          <Link href="/styles" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl transition-colors shadow-lg font-medium">
            返回风格列表
          </Link>
          <Link href="/styles/xiandai" className="flex items-center space-x-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-2xl transition-colors shadow-lg">
            <span>现代风格</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 