'use client';

import { useState } from 'react';

export default function EffectsDemo() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🎨 视觉效果演示
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 毛玻璃卡片 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">💎 毛玻璃效果</h2>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white">backdrop-blur-sm (轻度模糊)</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <p className="text-white">backdrop-blur-md (中度模糊)</p>
              </div>
              <div className="bg-white/30 backdrop-blur-lg rounded-xl p-4">
                <p className="text-white">backdrop-blur-lg (重度模糊)</p>
              </div>
            </div>
          </div>

          {/* 透明度层次 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">🌈 透明度层次</h2>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white">bg-white/10 (10% 透明度)</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <p className="text-white">bg-white/20 (20% 透明度)</p>
              </div>
              <div className="bg-white/30 rounded-xl p-4">
                <p className="text-white">bg-white/30 (30% 透明度)</p>
              </div>
            </div>
          </div>

          {/* 动画效果 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">⚡ 动画效果</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <span className="text-white">旋转加载</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="animate-pulse bg-white/30 rounded-lg h-8 w-8"></div>
                <span className="text-white">脉冲动画</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="animate-bounce bg-white/30 rounded-full h-8 w-8"></div>
                <span className="text-white">弹跳动画</span>
              </div>
            </div>
          </div>

          {/* 过渡效果 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">🌊 过渡效果</h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer">
                <p className="text-white">悬停缩放 + 背景变化</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 transition-transform duration-500 hover:rotate-3 cursor-pointer">
                <p className="text-white">悬停旋转</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 transition-all duration-700 hover:shadow-2xl hover:shadow-white/20 cursor-pointer">
                <p className="text-white">悬停阴影</p>
              </div>
            </div>
          </div>

          {/* 渐变效果 */}
          <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">🌅 渐变效果</h2>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl p-4">
                <p className="text-white">粉紫渐变</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4">
                <p className="text-white">蓝青渐变</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4">
                <p className="text-white">黄橙渐变</p>
              </div>
            </div>
          </div>

          {/* 特殊效果 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-4">✨ 特殊效果</h2>
            
            {/* 光晕效果 */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="group">
                <div className="bg-white/10 rounded-xl p-4 relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <p className="text-white relative z-10">光扫描效果 (悬停)</p>
                </div>
              </div>
              
              <button
                onClick={() => setShowOverlay(!showOverlay)}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                {showOverlay ? '隐藏' : '显示'} 加载弹窗
              </button>
            </div>
          </div>
        </div>

        {/* 代码示例 */}
        <div className="mt-8 bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">📝 核心代码</h2>
          <pre className="text-green-300 text-sm overflow-x-auto">
{`// 毛玻璃卡片
<div className="bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30">
  
// 加载弹窗覆盖层
<div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl">
  <div className="bg-white/20 rounded-2xl p-6">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
</div>

// 悬停过渡效果
<div className="transition-all duration-300 hover:bg-white/30 hover:scale-105">
  
// 渐变背景  
<div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">`}
          </pre>
        </div>

        {/* 天气应用加载弹窗演示 */}
        {showOverlay && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/30 shadow-2xl">
              <div className="text-white text-xl font-semibold mb-4">
                🌤️ 获取天气中...
              </div>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
              <button
                onClick={() => setShowOverlay(false)}
                className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                关闭
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="/openweather"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-block backdrop-blur-lg border border-white/30"
          >
            ← 返回天气应用
          </a>
        </div>
      </div>
    </div>
  );
} 