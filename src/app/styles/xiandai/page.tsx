'use client';

import Link from 'next/link';

export default function XiandaiStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* 顶部导航 */}
      <div className="bg-black/20 backdrop-blur-xl sticky top-0 z-10 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-white hover:text-pink-300 font-medium transition-colors">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-white">现代风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 头部区域 */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl animate-pulse"></div>
            <div className="relative bg-white rounded-3xl w-28 h-28 flex items-center justify-center shadow-2xl">
              <span className="text-5xl">🎨</span>
            </div>
          </div>
          <h1 className="text-7xl font-bold text-white mb-8 tracking-tight">现代风格</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            时尚前卫 · 色彩丰富 · 视觉冲击
          </p>
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        {/* 特色展示卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* 渐变设计 */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🎆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">渐变美学</h3>
              <p className="text-white/80 leading-relaxed">
                运用丰富的渐变色彩，创造视觉层次和深度感，带来强烈的现代感
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              <div className="h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
          </div>

          {/* 动态交互 */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">动态交互</h3>
              <p className="text-white/80 leading-relaxed">
                流畅的动画效果和微交互，提升用户体验，增强界面的活力
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* 几何图形 */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">◆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">几何构成</h3>
              <p className="text-white/80 leading-relaxed">
                大胆使用几何图形，打造独特的视觉识别和现代化的布局结构
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-500 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"></div>
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
            </div>
          </div>
        </div>

        {/* 色彩系统展示 */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">现代配色方案</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 主要色彩 */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">主要色彩</h3>
              <div className="space-y-6">
                {[
                  { 
                    name: "电光紫", 
                    gradient: "from-purple-500 to-purple-700", 
                    hex: "#8B5CF6",
                    desc: "科技感强，适合主要按钮和重点内容"
                  },
                  { 
                    name: "霓虹粉", 
                    gradient: "from-pink-500 to-pink-700", 
                    hex: "#EC4899",
                    desc: "活力四射，用于强调和装饰元素"
                  },
                  { 
                    name: "赛博橙", 
                    gradient: "from-orange-500 to-orange-700", 
                    hex: "#F97316",
                    desc: "醒目温暖，适合警告和行动召唤"
                  }
                ].map((color, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${color.gradient} rounded-2xl shadow-2xl`}></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{color.name}</h4>
                      <p className="text-white/60 text-sm">{color.hex}</p>
                      <p className="text-white/80 text-sm mt-1">{color.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 辅助色彩 */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">辅助色彩</h3>
              <div className="space-y-6">
                {[
                  { 
                    name: "极光蓝", 
                    gradient: "from-cyan-500 to-blue-600", 
                    hex: "#06B6D4",
                    desc: "清新冷静，适合信息展示和背景"
                  },
                  { 
                    name: "量子绿", 
                    gradient: "from-emerald-500 to-green-600", 
                    hex: "#10B981",
                    desc: "自然活力，用于成功状态和确认"
                  },
                  { 
                    name: "星际灰", 
                    gradient: "from-gray-700 to-gray-900", 
                    hex: "#374151",
                    desc: "稳重平衡，作为中性色和文字色"
                  }
                ].map((color, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${color.gradient} rounded-2xl shadow-2xl`}></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{color.name}</h4>
                      <p className="text-white/60 text-sm">{color.hex}</p>
                      <p className="text-white/80 text-sm mt-1">{color.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 渐变展示 */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">流行渐变组合</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-24 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">魅力渐变</span>
              </div>
              <div className="h-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">科技渐变</span>
              </div>
              <div className="h-24 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">日落渐变</span>
              </div>
            </div>
          </div>
        </div>

        {/* 设计理念 */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">设计理念</h2>
            <p className="text-xl text-white/80">现代设计的核心思想与实践</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "突破传统",
                icon: "🚀",
                description: "不拘泥于传统设计规则，勇于尝试新颖的视觉表达方式，创造独特的用户体验",
                points: ["打破常规布局", "创新交互方式", "大胆配色方案"]
              },
              {
                title: "技术融合",
                icon: "⚙️", 
                description: "将最新的技术与设计理念相结合，创造出具有前瞻性的数字产品",
                points: ["响应式设计", "动画效果", "3D元素应用"]
              },
              {
                title: "用户至上",
                icon: "👥",
                description: "在追求视觉冲击的同时，始终将用户体验放在首位，确保功能的易用性",
                points: ["直观的导航", "清晰的层次", "流畅的操作"]
              },
              {
                title: "情感连接",
                icon: "💫",
                description: "通过色彩、动画和互动设计，与用户建立情感纽带，增强品牌记忆度",
                points: ["情感化配色", "故事性交互", "品牌个性化"]
              }
            ].map((concept, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="text-5xl">{concept.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{concept.title}</h3>
                    <p className="text-white/80 leading-relaxed mb-6">{concept.description}</p>
                    <ul className="space-y-2">
                      {concept.points.map((point, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                          <span className="text-white/70 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 适用场景 */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">适用场景</h2>
            <p className="text-xl text-white/80">现代风格的最佳应用领域</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎮", title: "游戏娱乐", desc: "游戏界面、娱乐平台、直播应用" },
              { icon: "🛍️", title: "时尚电商", desc: "服装品牌、美妆产品、潮流商城" },
              { icon: "🎵", title: "音乐艺术", desc: "音乐应用、艺术展示、创意平台" },
              { icon: "💻", title: "科技创新", desc: "科技公司、初创企业、创新产品" }
            ].map((scene, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{scene.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{scene.title}</h3>
                <p className="text-white/80 leading-relaxed">{scene.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CSS实现示例 */}
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">CSS 实现参考</h3>
          <div className="bg-gray-900/80 rounded-2xl p-8 overflow-x-auto">
            <pre className="text-sm text-green-400 leading-relaxed">
{`/* 现代风格核心样式 */
.modern-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(20px);
}

.modern-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  padding: 12px 32px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.modern-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
}

.modern-gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.modern-float {
  animation: float 6s ease-in-out infinite;
}`}
            </pre>
          </div>
        </div>

        {/* 导航 */}
        <div className="flex justify-between items-center">
          <Link href="/styles/kexue" className="flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl transition-colors border border-white/20">
            <span className="text-white">←</span>
            <span className="text-white">科学风格</span>
          </Link>
          <Link href="/styles" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-2xl transition-colors shadow-lg font-medium">
            返回风格列表
          </Link>
          <Link href="/styles/fugu" className="flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl transition-colors border border-white/20">
            <span className="text-white">复古风格</span>
            <span className="text-white">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 