'use client';

import Link from 'next/link';

export default function SpotifyStylePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 顶部导航 */}
      <div className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/styles" className="text-green-400 hover:text-green-300">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold">Spotify风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* 左侧边栏 */}
        <div className="w-64 bg-black p-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6">🎵 Spotify</h2>
            <nav className="space-y-3">
              <a href="#" className="flex items-center text-white hover:text-green-400 transition-colors">
                <span className="mr-3">🏠</span>主页
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-3">🔍</span>搜索
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-3">📚</span>你的音乐库
              </a>
            </nav>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">播放列表</h3>
            <div className="space-y-2">
              {['我喜欢的音乐', '最近播放', '流行热歌', '放松音乐', '工作学习'].map((playlist, index) => (
                <a key={index} href="#" className="block text-gray-300 hover:text-white transition-colors py-1">
                  {playlist}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 主内容区 */}
        <div className="flex-1 bg-gradient-to-b from-gray-900 to-black p-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">早上好</h1>
            <p className="text-gray-400">享受你最喜欢的音乐</p>
          </div>

          {/* 最近播放 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">最近播放</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: '我喜欢的音乐', type: '播放列表', color: 'bg-gradient-to-br from-purple-600 to-blue-600' },
                { name: '每日推荐', type: 'Spotify制作', color: 'bg-gradient-to-br from-green-600 to-blue-600' },
                { name: 'Discover Weekly', type: '每周推荐', color: 'bg-gradient-to-br from-orange-600 to-red-600' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer group">
                  <div className={`w-16 h-16 rounded-lg ${item.color} mb-3 flex items-center justify-center text-2xl`}>
                    🎵
                  </div>
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.type}</p>
                  <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    ▶️
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 推荐专辑 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">为你推荐</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { title: '流行金曲', artist: '群星', image: '🎤' },
                { title: '轻松爵士', artist: 'Jazz Masters', image: '🎷' },
                { title: '电子节拍', artist: 'EDM Mix', image: '🎧' },
                { title: '摇滚经典', artist: 'Rock Legends', image: '🎸' },
                { title: '民谣时光', artist: 'Folk Artists', image: '🎻' },
                { title: '说唱新声', artist: 'Hip-Hop Stars', image: '🎤' }
              ].map((album, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer group">
                  <div className="w-full aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center text-3xl">
                    {album.image}
                  </div>
                  <h3 className="font-semibold text-sm mb-1 truncate">{album.title}</h3>
                  <p className="text-gray-400 text-xs truncate">{album.artist}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部播放器 */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-xl">
              🎵
            </div>
            <div>
              <h4 className="font-semibold">示例歌曲</h4>
              <p className="text-gray-400 text-sm">示例艺术家</p>
            </div>
            <button className="text-green-400 hover:text-green-300">❤️</button>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">🔀</button>
              <button className="text-gray-400 hover:text-white">⏮️</button>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                ⏸️
              </button>
              <button className="text-gray-400 hover:text-white">⏭️</button>
              <button className="text-gray-400 hover:text-white">🔁</button>
            </div>
            <div className="flex items-center space-x-2 w-96">
              <span className="text-xs text-gray-400">1:23</span>
              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">3:45</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-white">🎵</button>
            <button className="text-gray-400 hover:text-white">💻</button>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-white">🔊</button>
              <div className="w-24 h-1 bg-gray-600 rounded-full">
                <div className="w-2/3 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 风格信息卡片 */}
      <div className="fixed top-20 right-4 w-80 bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-green-400 font-semibold mb-4">🎵 Spotify风格特点</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>• 深色背景 + 绿色强调色</li>
          <li>• 渐变背景和卡片设计</li>
          <li>• 专注音乐和娱乐体验</li>
          <li>• 适合媒体、娱乐类应用</li>
        </ul>
        
        <div className="mt-6 flex space-x-2">
          <Link href="/styles" className="flex-1 bg-gray-700 hover:bg-gray-600 text-center py-2 rounded-lg text-sm transition-colors">
            返回列表
          </Link>
          <Link href="/styles/xiaohongshu" className="flex-1 bg-green-600 hover:bg-green-500 text-center py-2 rounded-lg text-sm transition-colors">
            下一个 →
          </Link>
        </div>
      </div>
    </div>
  );
} 