'use client';

import Link from 'next/link';

export default function NotionStylePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/styles" className="text-gray-600 hover:text-gray-800">
            ← 返回风格列表
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Notion风格</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* 左侧边栏 */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
          {/* 用户信息 */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm font-medium">
                N
              </div>
              <div>
                <div className="font-medium text-gray-900">我的工作区</div>
                <div className="text-xs text-gray-500">notion风格展示</div>
              </div>
            </div>
          </div>

          {/* 导航菜单 */}
          <div className="flex-1 p-3">
            <div className="space-y-1">
              <div className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                <span className="mr-2">🔍</span>
                <span className="text-sm">搜索</span>
              </div>
              <div className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                <span className="mr-2">🏠</span>
                <span className="text-sm">主页</span>
              </div>
              <div className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                <span className="mr-2">📝</span>
                <span className="text-sm">所有页面</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-2">
                最近访问
              </div>
              <div className="space-y-1">
                {[
                  { icon: '📋', name: '项目管理', active: true },
                  { icon: '📝', name: '会议记录', active: false },
                  { icon: '📊', name: '数据分析', active: false },
                  { icon: '💡', name: '创意想法', active: false }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center px-2 py-1 rounded cursor-pointer text-sm ${
                      item.active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-2">
                收藏夹
              </div>
              <div className="space-y-1">
                <div className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 rounded cursor-pointer text-sm">
                  <span className="mr-2">⭐</span>
                  <span>重要文档</span>
                </div>
                <div className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 rounded cursor-pointer text-sm">
                  <span className="mr-2">📚</span>
                  <span>学习资料</span>
                </div>
              </div>
            </div>
          </div>

          {/* 底部操作 */}
          <div className="p-3 border-t border-gray-200">
            <button className="w-full flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm">
              <span className="mr-2">➕</span>
              <span>新建页面</span>
            </button>
          </div>
        </div>

        {/* 主内容区域 */}
        <div className="flex-1 flex flex-col">
          {/* 页面头部 */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <span>我的工作区</span>
              <span>/</span>
              <span>项目管理</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">📋</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">项目管理</h1>
                <p className="text-gray-600">团队协作和项目跟踪的中央枢纽</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm">
                <span className="mr-1">👥</span>
                分享
              </button>
              <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm">
                <span className="mr-1">⋯</span>
                更多
              </button>
            </div>
          </div>

          {/* 页面内容 */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* 快速操作 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '📊', title: '项目概览', desc: '查看所有项目的进度和状态' },
                { icon: '📝', title: '创建任务', desc: '快速添加新的任务和待办事项' },
                { icon: '👥', title: '团队协作', desc: '邀请成员并分配工作' }
              ].map((card, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* 数据库表格 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">当前项目</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目名称</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">负责人</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">截止日期</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { name: '网站重设计', status: '进行中', owner: '设计团队', date: '2024-02-15' },
                      { name: 'API 开发', status: '待开始', owner: '开发团队', date: '2024-02-28' },
                      { name: '用户测试', status: '已完成', owner: '产品团队', date: '2024-01-30' }
                    ].map((project, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <span className="mr-2">📁</span>
                            <span className="font-medium text-gray-900">{project.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            project.status === '进行中' ? 'bg-yellow-100 text-yellow-800' :
                            project.status === '已完成' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-900">{project.owner}</td>
                        <td className="px-4 py-3 text-gray-600">{project.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 文档块 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">项目文档</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                  <div className="text-lg">📄</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">项目需求文档</h3>
                    <p className="text-sm text-gray-600 mb-2">详细描述项目的功能需求和技术规范</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>最后编辑：2小时前</span>
                      <span>编辑者：产品经理</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                  <div className="text-lg">🎨</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">设计规范</h3>
                    <p className="text-sm text-gray-600 mb-2">UI/UX设计指南和视觉规范文档</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>最后编辑：1天前</span>
                      <span>编辑者：设计师</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className="bg-gray-50 border-t border-gray-200 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎨 设计特点</h3>
              <p className="text-sm text-gray-600">极简灰白配色、功能导向、清晰层级</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 适用场景</h3>
              <p className="text-sm text-gray-600">办公工具、文档应用、知识管理</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✨ 关键词</h3>
              <p className="text-sm text-gray-600">简洁、实用、专业</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
            <Link 
              href="/styles/discord"
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
            >
              ← Discord风格
            </Link>
            
            <Link 
              href="/styles/apple"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              下一个：苹果风格 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 