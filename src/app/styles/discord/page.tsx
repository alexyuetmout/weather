'use client';

import Link from 'next/link';

export default function DiscordStylePage() {
  return (
    <div className="min-h-screen bg-gray-800">
      {/* 顶部导航 */}
      <div className="bg-gray-900 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/styles" className="text-indigo-400 hover:text-indigo-300">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-white">Discord风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* 左侧服务器列表 */}
        <div className="w-16 bg-gray-900 flex flex-col items-center py-3 space-y-2">
          {[1, 2, 3, 4, 5].map((server, index) => (
            <div 
              key={index}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-200 hover:rounded-xl ${
                index === 0 ? 'bg-indigo-500' : 'bg-gray-700 hover:bg-indigo-500'
              }`}
            >
              {index === 0 ? 'D' : server}
            </div>
          ))}
          <div className="w-8 h-0.5 bg-gray-600 rounded-full my-2"></div>
          <div className="w-12 h-12 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-gray-300 cursor-pointer transition-all">
            +
          </div>
        </div>

        {/* 中间频道列表 */}
        <div className="w-60 bg-gray-800 flex flex-col">
          {/* 服务器头部 */}
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white font-semibold">我的服务器</h2>
            <p className="text-gray-400 text-sm">欢迎来到Discord风格展示</p>
          </div>
          
          {/* 频道列表 */}
          <div className="flex-1 p-3 space-y-1">
            <div className="text-gray-400 text-xs uppercase font-semibold mb-2 flex items-center">
              <span className="mr-1">▼</span>
              文字频道
            </div>
            
            {['一般', '随机聊天', '技术讨论', '资源分享'].map((channel, index) => (
              <div 
                key={index}
                className={`flex items-center px-2 py-1 rounded text-gray-300 hover:bg-gray-700 cursor-pointer ${
                  index === 0 ? 'bg-gray-700 text-white' : ''
                }`}
              >
                <span className="mr-2">#</span>
                {channel}
              </div>
            ))}
            
            <div className="text-gray-400 text-xs uppercase font-semibold mb-2 mt-4 flex items-center">
              <span className="mr-1">▼</span>
              语音频道
            </div>
            
            {['一般', '游戏时间', '音乐电台'].map((channel, index) => (
              <div 
                key={index}
                className="flex items-center px-2 py-1 rounded text-gray-300 hover:bg-gray-700 cursor-pointer"
              >
                <span className="mr-2">🔊</span>
                {channel}
              </div>
            ))}
          </div>
          
          {/* 用户信息 */}
          <div className="p-3 bg-gray-900 flex items-center">
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">
              U
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">用户名</div>
              <div className="text-gray-400 text-xs">#1234</div>
            </div>
            <div className="flex space-x-1">
              <button className="w-6 h-6 text-gray-400 hover:text-white">🎤</button>
              <button className="w-6 h-6 text-gray-400 hover:text-white">🔊</button>
              <button className="w-6 h-6 text-gray-400 hover:text-white">⚙️</button>
            </div>
          </div>
        </div>

        {/* 主聊天区域 */}
        <div className="flex-1 flex flex-col bg-gray-700">
          {/* 频道头部 */}
          <div className="p-4 border-b border-gray-600 flex items-center">
            <span className="text-gray-400 mr-2">#</span>
            <h3 className="text-white font-semibold">一般</h3>
            <div className="ml-auto flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">📌</button>
              <button className="text-gray-400 hover:text-white">👥</button>
              <button className="text-gray-400 hover:text-white">🔍</button>
              <button className="text-gray-400 hover:text-white">📮</button>
            </div>
          </div>
          
          {/* 消息区域 */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {[
              { user: 'Discord风格展示', time: '今天 15:30', message: '欢迎来到Discord风格界面展示！这里展示了典型的Discord设计元素。', avatar: 'D' },
              { user: '设计师小王', time: '今天 15:32', message: '这个界面设计真的很棒！深色主题看起来很专业。', avatar: 'W' },
              { user: '开发者小李', time: '今天 15:35', message: 'Discord的设计语言确实很适合工具类应用，特别是需要长时间使用的软件。', avatar: 'L' },
              { user: '产品经理', time: '今天 15:38', message: '我们可以考虑在下个项目中使用类似的设计风格。', avatar: 'P' }
            ].map((msg, index) => (
              <div key={index} className="flex space-x-3 hover:bg-gray-600/30 p-2 rounded">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {msg.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-medium">{msg.user}</span>
                    <span className="text-gray-400 text-xs">{msg.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 输入框 */}
          <div className="p-4">
            <div className="bg-gray-600 rounded-lg p-3 flex items-center">
              <input 
                type="text" 
                placeholder="在 #一般 中发送消息..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
              />
              <div className="flex space-x-2 ml-3">
                <button className="text-gray-400 hover:text-white">📎</button>
                <button className="text-gray-400 hover:text-white">😀</button>
                <button className="text-gray-400 hover:text-white">🎁</button>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧成员列表 */}
        <div className="w-60 bg-gray-800 p-4">
          <div className="text-gray-400 text-xs uppercase font-semibold mb-3">
            在线 — 4
          </div>
          
          {[
            { name: 'Discord风格展示', status: 'online', activity: '展示界面设计' },
            { name: '设计师小王', status: 'online', activity: '使用 Figma' },
            { name: '开发者小李', status: 'away', activity: '' },
            { name: '产品经理', status: 'online', activity: '在线中' }
          ].map((member, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 cursor-pointer mb-1">
              <div className="relative">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {member.name.charAt(0)}
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-gray-800 ${
                  member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">{member.name}</div>
                {member.activity && (
                  <div className="text-gray-400 text-xs">{member.activity}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部信息卡片 */}
      <div className="fixed bottom-4 left-4 right-4 max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-indigo-400 font-semibold mb-2">🎨 设计特点</h3>
              <p className="text-gray-300 text-sm">深色主题、紫色点缀、圆角设计、现代感强</p>
            </div>
            <div>
              <h3 className="text-indigo-400 font-semibold mb-2">📱 适用场景</h3>
              <p className="text-gray-300 text-sm">工具应用、管理后台、聊天应用、游戏界面</p>
            </div>
            <div>
              <h3 className="text-indigo-400 font-semibold mb-2">✨ 关键词</h3>
              <p className="text-gray-300 text-sm">深色、现代、功能性、专业</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between">
            <Link 
              href="/styles"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              ← 返回列表
            </Link>
            
            <Link 
              href="/styles/notion"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              下一个：Notion风格 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 