'use client';

import Link from 'next/link';

const styles = [
  {
    id: 'instagram',
    name: 'Instagram风格',
    description: '圆角卡片、柔和阴影、白色为主',
    category: '现代流行',
    gradient: 'from-pink-400 to-purple-500',
    preview: '📱'
  },
  {
    id: 'discord',
    name: 'Discord风格', 
    description: '深色主题、紫色点缀、圆角、现代感',
    category: '现代流行',
    gradient: 'from-indigo-500 to-purple-600',
    preview: '🎮'
  },
  {
    id: 'spotify',
    name: 'Spotify风格',
    description: '深色背景、绿色强调、渐变、娱乐感',
    category: '现代流行', 
    gradient: 'from-green-400 to-black',
    preview: '🎵'
  },
  {
    id: 'notion',
    name: 'Notion风格',
    description: '极简、灰白配色、功能导向',
    category: '现代流行',
    gradient: 'from-gray-300 to-gray-500',
    preview: '📝'
  },
  {
    id: 'xiaohongshu',
    name: '小红书风格',
    description: '温暖色调、卡片式、文艺清新',
    category: '现代流行',
    gradient: 'from-red-300 to-pink-400',
    preview: '📖'
  },
  {
    id: 'apple',
    name: '苹果风格',
    description: '大留白、细线条、优雅简洁、毛玻璃',
    category: '经典风格',
    gradient: 'from-blue-100 to-gray-200',
    preview: '🍎'
  },
  {
    id: 'google',
    name: 'Google风格',
    description: 'Material Design、卡片阴影、鲜艳色彩',
    category: '经典风格',
    gradient: 'from-blue-400 via-red-400 to-yellow-400',
    preview: '🔍'
  },
  {
    id: 'microsoft',
    name: '微软风格',
    description: 'Fluent Design、亚克力效果、现代感',
    category: '经典风格',
    gradient: 'from-blue-500 to-cyan-400',
    preview: '💼'
  },
  {
    id: 'github',
    name: 'GitHub风格',
    description: '简洁黑白、代码感、专业',
    category: '经典风格',
    gradient: 'from-gray-800 to-gray-600',
    preview: '⚡'
  },
  {
    id: 'dribbble',
    name: 'Dribbble风格',
    description: '创意展示、粉色主题、设计感',
    category: '经典风格',
    gradient: 'from-pink-500 to-rose-400',
    preview: '🎨'
  },
  {
    id: 'wenxin',
    name: '温馨风格',
    description: '暖色调、圆润、舒适、家庭感',
    category: '特色主题',
    gradient: 'from-orange-200 to-red-200',
    preview: '🏠'
  },
  {
    id: 'jianyue',
    name: '简约风格',
    description: '极简主义、黑白灰、留白',
    category: '特色主题',
    gradient: 'from-gray-200 to-gray-400',
    preview: '⚪'
  },
  {
    id: 'kexue',
    name: '科学风格',
    description: '蓝色主题、科技感、数据可视化',
    category: '特色主题',
    gradient: 'from-blue-400 to-cyan-500',
    preview: '🔬'
  },
  {
    id: 'xiandai',
    name: '现代风格',
    description: '几何图形、渐变、时尚前卫',
    category: '特色主题',
    gradient: 'from-purple-400 via-pink-400 to-red-400',
    preview: '🔥'
  },
  {
    id: 'fugu',
    name: '复古风格',
    description: '怀旧色彩、经典元素、时光感',
    category: '特色主题',
    gradient: 'from-yellow-600 to-orange-700',
    preview: '📻'
  }
];

const categories = [
  { name: '现代流行', styles: styles.filter(s => s.category === '现代流行') },
  { name: '经典风格', styles: styles.filter(s => s.category === '经典风格') },
  { name: '特色主题', styles: styles.filter(s => s.category === '特色主题') }
];

export default function StylesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* 头部 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="text-6xl">🎨</div>
            <h1 className="text-5xl font-bold text-white">
              15个设计风格展示
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            探索不同的设计语言，找到最适合你项目的风格
          </p>
          
          {/* 快速导航 */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`#${category.name}`}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                {category.name} ({category.styles.length})
              </a>
            ))}
          </div>
        </div>

        {/* 分类展示 */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} id={category.name} className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {category.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {category.styles.map((style, index) => (
                <Link 
                  key={index}
                  href={`/styles/${style.id}`}
                  className="group block"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                    {/* 预览图标 */}
                    <div className={`w-full h-32 bg-gradient-to-br ${style.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{style.preview}</span>
                    </div>
                    
                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {style.name}
                    </h3>
                    
                    {/* 描述 */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {style.description}
                    </p>
                    
                    {/* 查看按钮 */}
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300 text-sm">
                        点击查看
                      </span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* 底部信息 */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 如何使用这些风格？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <div className="text-2xl mb-2">1️⃣</div>
                <h4 className="font-semibold mb-2">选择风格</h4>
                <p className="text-sm">点击任意风格卡片查看详细展示</p>
              </div>
              <div>
                <div className="text-2xl mb-2">2️⃣</div>
                <h4 className="font-semibold mb-2">复制代码</h4>
                <p className="text-sm">每个页面都包含完整的CSS实现</p>
              </div>
              <div>
                <div className="text-2xl mb-2">3️⃣</div>
                <h4 className="font-semibold mb-2">应用项目</h4>
                <p className="text-sm">直接在你的项目中使用对应风格</p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回天气应用
          </Link>
        </div>
      </div>
    </div>
  );
} 