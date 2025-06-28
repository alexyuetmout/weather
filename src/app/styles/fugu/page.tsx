'use client';

import Link from 'next/link';

export default function FuguStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" style={{
      backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 0%, transparent 50%)`
    }}>
      {/* 顶部导航 */}
      <div className="bg-amber-900/90 backdrop-blur-sm sticky top-0 z-10 border-b border-amber-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles" className="text-amber-100 hover:text-amber-200 font-medium transition-colors">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-amber-100">复古风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 头部区域 - 复古感设计 */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-12">
            {/* 复古边框装饰 */}
            <div className="absolute inset-0 border-4 border-amber-600 rounded-full opacity-60"></div>
            <div className="absolute inset-2 border-2 border-amber-500 rounded-full opacity-40"></div>
            <div className="relative bg-gradient-to-br from-amber-600 to-orange-700 rounded-full w-24 h-24 flex items-center justify-center shadow-2xl">
              <span className="text-4xl text-amber-100">📻</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-amber-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>
            复古风格
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          <p className="text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
            经典永恒 · 怀旧情怀 · 温暖回忆
          </p>
          
          {/* 复古装饰元素 */}
          <div className="mt-12 flex justify-center space-x-8">
            <div className="w-4 h-4 bg-amber-600 rounded-full opacity-70 animate-pulse"></div>
            <div className="w-6 h-6 border-2 border-amber-600 rounded-full opacity-60"></div>
            <div className="w-4 h-4 bg-orange-600 rounded-full opacity-70 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* 复古元素展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* 怀旧色彩 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300" style={{
            boxShadow: '0 8px 32px rgba(217, 119, 6, 0.15)'
          }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-amber-100">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>怀旧色彩</h3>
              <p className="text-amber-700 leading-relaxed">
                温暖的大地色系，营造舒适怀旧的视觉氛围，唤起美好的回忆
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <div className="flex-1 h-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
                <span className="text-xs text-amber-600 font-medium">琥珀</span>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 h-4 bg-gradient-to-r from-orange-700 to-red-700 rounded-full"></div>
                <span className="text-xs text-orange-700 font-medium">古铜</span>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 h-4 bg-gradient-to-r from-yellow-700 to-amber-700 rounded-full"></div>
                <span className="text-xs text-yellow-700 font-medium">古金</span>
              </div>
            </div>
          </div>

          {/* 经典纹理 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-orange-100">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>经典纹理</h3>
              <p className="text-amber-700 leading-relaxed">
                细腻的纹理设计和装饰边框，展现历史沉淀的优雅与品味
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-6 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 rounded-lg border border-amber-400 opacity-70"></div>
              <div className="h-6 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 rounded-lg border-2 border-dashed border-orange-400 opacity-70"></div>
              <div className="h-6 bg-gradient-to-r from-red-200 via-red-300 to-red-200 rounded-lg border border-red-400 opacity-70"></div>
            </div>
          </div>

          {/* 复古字体 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-red-100">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>优雅字体</h3>
              <p className="text-amber-700 leading-relaxed">
                经典衬线字体与手写风格，传递文化底蕴和艺术气息
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="text-2xl text-amber-800 font-serif">Classic Serif</div>
              <div className="text-xl text-orange-700" style={{fontFamily: 'cursive'}}>Handwriting Style</div>
              <div className="text-lg text-red-700 font-mono">Vintage Mono</div>
            </div>
          </div>
        </div>

        {/* 时代回忆展示 */}
        <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 rounded-3xl p-12 border border-amber-300 mb-20" style={{
          boxShadow: 'inset 0 2px 8px rgba(217, 119, 6, 0.1)'
        }}>
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12" style={{fontFamily: 'Georgia, serif'}}>
            时代记忆
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                era: "1950年代",
                icon: "🕰️",
                description: "简约优雅，追求功能与美学的完美结合",
                features: ["简洁线条", "经典配色", "功能主义"]
              },
              {
                era: "1960年代", 
                icon: "🌈",
                description: "色彩革命，大胆实验与创新设计的黄金时代",
                features: ["鲜艳色彩", "几何图案", "前卫设计"]
              },
              {
                era: "1970年代",
                icon: "🌻", 
                description: "自然回归，大地色系与有机形状的流行",
                features: ["大地色调", "有机形状", "手工质感"]
              },
              {
                era: "1980年代",
                icon: "⚡",
                description: "霓虹时代，科技感与未来主义的碰撞",
                features: ["霓虹色彩", "科技感", "几何构成"]
              }
            ].map((period, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{period.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                  {period.era}
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-4">{period.description}</p>
                <div className="space-y-1">
                  {period.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-amber-600 bg-amber-50 rounded-full px-3 py-1 inline-block mr-1">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 复古色彩方案 */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-amber-200 shadow-xl mb-20">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12" style={{fontFamily: 'Georgia, serif'}}>
            复古配色方案
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 暖色系 */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-8" style={{fontFamily: 'Georgia, serif'}}>
                温暖大地色
              </h3>
              <div className="space-y-6">
                {[
                  { name: "琥珀金", bg: "bg-amber-600", hex: "#D97706", desc: "温暖怀旧的主色调" },
                  { name: "古铜棕", bg: "bg-orange-700", hex: "#C2410C", desc: "稳重经典的装饰色" },
                  { name: "砖瓦红", bg: "bg-red-700", hex: "#B91C1C", desc: "复古感强的强调色" }
                ].map((color, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${color.bg} rounded-lg shadow-lg border border-amber-300`}></div>
                    <div>
                      <h4 className="font-bold text-amber-900">{color.name}</h4>
                      <p className="text-amber-600 text-sm">{color.hex}</p>
                      <p className="text-amber-700 text-xs">{color.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 中性色 */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-8" style={{fontFamily: 'Georgia, serif'}}>
                经典中性色
              </h3>
              <div className="space-y-6">
                {[
                  { name: "奶油白", bg: "bg-amber-50", hex: "#FFFBEB", desc: "柔和的背景色" },
                  { name: "牛皮纸", bg: "bg-amber-200", hex: "#FDE68A", desc: "温馨的中间色" },
                  { name: "深褐色", bg: "bg-amber-900", hex: "#78350F", desc: "稳重的文字色" }
                ].map((color, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${color.bg} rounded-lg shadow-lg border border-amber-300`}></div>
                    <div>
                      <h4 className="font-bold text-amber-900">{color.name}</h4>
                      <p className="text-amber-600 text-sm">{color.hex}</p>
                      <p className="text-amber-700 text-xs">{color.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 复古渐变 */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-8" style={{fontFamily: 'Georgia, serif'}}>
                复古渐变
              </h3>
              <div className="space-y-4">
                <div className="h-16 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-sm">日落渐变</span>
                </div>
                <div className="h-16 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-sm">黄金渐变</span>
                </div>
                <div className="h-16 bg-gradient-to-r from-orange-800 via-red-700 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-sm">秋叶渐变</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 适用场景 */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>
              适用场景
            </h2>
            <p className="text-xl text-amber-700">复古风格的经典应用领域</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "☕",
                title: "咖啡文化",
                desc: "咖啡店品牌、手工咖啡、慢生活理念",
                mood: "温馨舒适"
              },
              {
                icon: "📚", 
                title: "文化艺术",
                desc: "博物馆网站、艺术画廊、文学出版",
                mood: "文雅知性"
              },
              {
                icon: "🎵",
                title: "经典音乐", 
                desc: "唱片公司、音乐节、复古音响",
                mood: "怀旧浪漫"
              },
              {
                icon: "🏠",
                title: "生活方式",
                desc: "家居装饰、手工制品、传统工艺",
                mood: "简朴自然"
              }
            ].map((scene, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {scene.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                  {scene.title}
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-4">{scene.desc}</p>
                <div className="text-xs text-amber-600 bg-amber-50 rounded-full px-3 py-1 inline-block">
                  {scene.mood}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS实现示例 */}
        <div className="bg-amber-900/95 backdrop-blur-xl rounded-3xl p-8 text-amber-100 mb-12 border border-amber-800">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{fontFamily: 'Georgia, serif'}}>
            CSS 实现参考
          </h3>
          <div className="bg-amber-950/80 rounded-2xl p-8 overflow-x-auto">
            <pre className="text-sm text-amber-300 leading-relaxed">
{`/* 复古风格核心样式 */
.vintage-container {
  background: linear-gradient(135deg, #FEF3C7 0%, #FED7AA 50%, #FECACA 100%);
  font-family: 'Georgia', 'Times New Roman', serif;
}

.vintage-card {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #D97706;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(217, 119, 6, 0.15);
  backdrop-filter: blur(8px);
}

.vintage-button {
  background: linear-gradient(135deg, #D97706 0%, #C2410C 100%);
  color: #FEF3C7;
  border-radius: 12px;
  padding: 12px 32px;
  font-weight: 600;
  border: 2px solid #B45309;
  transition: all 0.3s ease;
}

.vintage-button:hover {
  background: linear-gradient(135deg, #B45309 0%, #92400E 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(217, 119, 6, 0.3);
}

.vintage-text {
  color: #78350F;
  font-family: 'Georgia', serif;
  line-height: 1.7;
}

.vintage-accent {
  color: #D97706;
  font-weight: bold;
}

/* 复古纹理效果 */
.vintage-texture {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 0%, transparent 50%);
}`}
            </pre>
          </div>
        </div>

        {/* 导航 */}
        <div className="flex justify-between items-center">
          <Link href="/styles/xiandai" className="flex items-center space-x-3 px-6 py-3 bg-white/80 hover:bg-white/90 rounded-2xl transition-colors border border-amber-200 shadow-lg">
            <span className="text-amber-800">←</span>
            <span className="text-amber-800 font-medium">现代风格</span>
          </Link>
          <Link href="/styles" className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white rounded-2xl transition-colors shadow-lg font-medium">
            返回风格列表
          </Link>
          <div className="w-32 flex justify-end">
            <div className="text-amber-600 text-sm">
              ～ 复古之旅结束 ～
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 