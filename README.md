# 天气应用 Weather App

一个使用 Next.js 构建的现代化天气应用，支持两种天气数据源：Open-Meteo 免费 API 和 OpenWeatherMap API。

## 功能特性

### 🌤️ 双天气源支持
- **Open-Meteo 版本** (`/`) - 免费 API，无需注册
- **OpenWeatherMap 版本** (`/openweather`) - 官方 API，需要 API Key

### 📱 现代化界面
- 响应式设计，支持移动端
- 毛玻璃效果和渐变背景
- 流畅的动画和交互效果

### 🌍 多城市支持
- 城市下拉选择器，支持全球主要城市
- 快速城市按钮，一键切换
- 随机城市功能
- 📱 获取当前地理位置天气

### 📊 丰富的天气数据
- 实时温度和体感温度
- 湿度、风速、气压
- 能见度和云量
- 天气描述和图标

## 快速开始

### 1. 克隆项目
```bash
git clone <repository-url>
cd weather
```

### 2. 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 3. 环境变量配置（可选）
如果要使用 OpenWeatherMap API，需要配置环境变量：

```bash
# 复制环境变量示例文件
cp .env.example .env.local
```

编辑 `.env.local` 文件，添加你的 OpenWeatherMap API Key：
```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=你的API密钥
```

### 4. 获取 OpenWeatherMap API Key
1. 访问 [OpenWeatherMap](https://openweathermap.org/api)
2. 免费注册账户
3. 在 API Keys 页面生成新的 API Key
4. 将 API Key 添加到 `.env.local` 文件

### 5. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 页面路由

- `/` - Open-Meteo 版本（免费，无需 API Key）
- `/openweather` - OpenWeatherMap 版本（需要 API Key）

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **API**: 
  - Open-Meteo API (免费)
  - OpenWeatherMap API

## 项目结构

```
weather/
├── src/
│   └── app/
│       ├── page.tsx              # Open-Meteo 版本首页
│       ├── openweather/
│       │   └── page.tsx          # OpenWeatherMap 版本
│       ├── layout.tsx            # 全局布局
│       └── globals.css           # 全局样式
├── .env.local                    # 环境变量（本地）
├── .env.example                  # 环境变量示例
└── README.md
```

## 环境变量

| 变量名 | 描述 | 必需 |
|--------|------|------|
| `NEXT_PUBLIC_OPENWEATHER_API_KEY` | OpenWeatherMap API 密钥 | 仅 OpenWeatherMap 版本 |

## API 使用说明

### Open-Meteo API
- 完全免费，无需注册
- 支持全球天气数据
- 限制较少，适合开发测试

### OpenWeatherMap API
- 免费版本每分钟60次调用
- 需要注册获取 API Key
- 提供更详细的天气数据和官方图标

## 部署

### Vercel 部署（推荐）
1. 将项目推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 在环境变量中添加 `NEXT_PUBLIC_OPENWEATHER_API_KEY`
4. 部署完成

### 其他平台
确保在部署平台的环境变量中设置：
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=你的API密钥
```

## 开发

### 添加新城市
在相应页面的 `cities` 数组中添加新城市：

```typescript
const cities = [
  { name: 'Beijing', country: 'CN', displayName: '北京' },
  // 添加更多城市...
];
```

### 自定义样式
修改 `src/app/globals.css` 和组件中的 Tailwind 类名。

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！
