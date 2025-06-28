'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface OpenWeatherData {
  location: string;
  country: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  description: string;
  icon: string;
  feelsLike: number;
  visibility: number;
  uvIndex?: number;
  clouds: number;
}

interface City {
  name: string;
  country: string;
  displayName: string;
}

const cities: City[] = [
  { name: 'Beijing', country: 'CN', displayName: '北京' },
  { name: 'Shanghai', country: 'CN', displayName: '上海' },
  { name: 'Tokyo', country: 'JP', displayName: '东京' },
  { name: 'New York', country: 'US', displayName: '纽约' },
  { name: 'London', country: 'GB', displayName: '伦敦' },
  { name: 'Paris', country: 'FR', displayName: '巴黎' },
  { name: 'Sydney', country: 'AU', displayName: '悉尼' },
  { name: 'Moscow', country: 'RU', displayName: '莫斯科' },
  { name: 'Singapore', country: 'SG', displayName: '新加坡' },
  { name: 'Dubai', country: 'AE', displayName: '迪拜' },
];

export default function OpenWeatherPage() {
  // 在客户端组件中正确获取环境变量
  const [apiKey, setApiKey] = useState('');
  const [weather, setWeather] = useState<OpenWeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showApiInput, setShowApiInput] = useState(true);
  const [selectedCity, setSelectedCity] = useState('');
  const [locationLoading, setLocationLoading] = useState(false);
  
  // 在客户端初始化时获取环境变量
  useEffect(() => {
    const envApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    console.log('环境变量 API Key:', envApiKey ? '已加载' : '未找到'); // 调试日志
    if (envApiKey && envApiKey !== 'your_api_key_here') {
      setApiKey(envApiKey);
      setShowApiInput(false);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchWeather = useCallback(async (cityName?: string, lat?: number, lon?: number) => {
    if (!apiKey || !apiKey.trim() || apiKey === 'your_api_key_here') {
      setError('请先设置有效的 API Key');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      let url = '';
      let locationName = '';

      if (lat && lon) {
        // 使用经纬度获取天气
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=zh_cn`;
        locationName = '当前位置';
      } else {
        // 使用城市名获取天气
        const targetCity = cityName 
          ? cities.find(c => c.displayName === cityName)
          : cities[Math.floor(Math.random() * cities.length)];
        
        if (!targetCity) {
          throw new Error('城市未找到');
        }

        url = `https://api.openweathermap.org/data/2.5/weather?q=${targetCity.name},${targetCity.country}&appid=${apiKey}&units=metric&lang=zh_cn`;
        locationName = targetCity.displayName;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(`API Key 无效！请检查：
          
1. 🔑 API Key 是否正确复制
2. ⏱️ 新申请的 API Key 需要等待激活（通常需要几分钟到2小时）
3. 🌐 确保账户已验证邮箱
4. 💳 免费账户限制：60次/分钟，1000次/天

当前使用的 API Key: ${apiKey.substring(0, 8)}...

💡 解决方案：
• 重新生成 API Key
• 等待激活完成
• 检查 OpenWeatherMap 账户状态`);
        } else if (response.status === 429) {
          throw new Error('API 调用次数超限，请稍后再试');
        }
        throw new Error(`API 请求失败: ${response.status}`);
      }
      
      const data = await response.json();
      
      setWeather({
        location: lat && lon ? `${data.name}` : locationName,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // 转换为 km/h
        pressure: data.main.pressure,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        feelsLike: Math.round(data.main.feels_like),
        visibility: Math.round(data.visibility / 1000), // 转换为 km
        clouds: data.clouds.all,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生未知错误');
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      setError('您的浏览器不支持地理位置服务');
      return;
    }

    setLocationLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log('获取到位置:', latitude, longitude);
        await fetchWeather(undefined, latitude, longitude);
        setLocationLoading(false);
      },
      (error) => {
        console.error('地理位置错误:', error);
        let errorMessage = '获取位置失败';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = '位置访问被拒绝，请在浏览器设置中允许位置访问';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = '位置信息不可用';
            break;
          case error.TIMEOUT:
            errorMessage = '获取位置超时';
            break;
        }
        setError(errorMessage);
        setLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5分钟
      }
    );
  };

  useEffect(() => {
    if (apiKey && apiKey.trim() && apiKey !== 'your_api_key_here') {
      fetchWeather();
    }
  }, [apiKey, fetchWeather]);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newApiKey = formData.get('apiKey') as string;
    setApiKey(newApiKey);
    setShowApiInput(false);
    if (newApiKey.trim()) {
      fetchWeather();
    }
  };

  if (showApiInput || !apiKey || !apiKey.trim() || apiKey === 'your_api_key_here') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">OpenWeatherMap</h1>
            <p className="text-white/80">请输入你的 API Key</p>
          </div>
          
          <form onSubmit={handleApiKeySubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="apiKey"
                placeholder="输入你的 OpenWeatherMap API Key"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white/30 hover:bg-white/40 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              开始使用
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              还没有 API Key？
              <a 
                href="https://openweathermap.org/api" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white underline ml-1"
              >
                免费申请
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 加载状态组件
  const LoadingOverlay = () => {
    if (!loading && !locationLoading) return null;
    
    return (
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
        <div className="bg-white/20 rounded-2xl p-6 text-center">
          <div className="text-white text-lg font-semibold mb-2">
            {locationLoading ? '📍 正在定位...' : '🌤️ 获取天气中...'}
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    );
  };

  if (loading && !weather) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-white text-2xl font-semibold animate-pulse">
          正在初始化...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-600 flex items-center justify-center p-4">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 text-center max-w-lg w-full">
          <div className="text-white text-lg font-semibold mb-6 whitespace-pre-line text-left">
            ❌ {error}
          </div>
          <div className="space-y-3">
            <button
              onClick={() => fetchWeather()}
              className="w-full bg-white/30 hover:bg-white/40 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              重试
            </button>
            <button
              onClick={() => setShowApiInput(true)}
              className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              重新设置 API Key
            </button>
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
            >
              🔗 管理 API Keys
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 天气数据显示组件
  const WeatherDisplay = ({ weatherData }: { weatherData: OpenWeatherData | null }) => {
    if (!weatherData) {
      return (
        <div className="text-center mb-8 h-96 flex items-center justify-center">
          <div className="text-white/60 text-lg">
            请选择城市或获取当前位置
          </div>
        </div>
      );
    }

    return (
      <div 
        key={`${weatherData.location}-${weatherData.temperature}`}
        className="text-center mb-8 transition-all duration-500 ease-in-out"
      >
        <div className="text-6xl mb-4 transition-transform duration-300 hover:scale-110">
          <Image 
            src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt={weatherData.description}
            width={80}
            height={80}
            className="mx-auto transition-opacity duration-300"
          />
        </div>
        <div className="text-4xl font-bold text-white mb-2 transition-all duration-300">
          {weatherData.temperature}°C
        </div>
        <div className="text-xl text-white/90 mb-1 capitalize transition-all duration-300">
          {weatherData.description}
        </div>
        <div className="text-lg font-semibold text-white transition-all duration-300">
          {weatherData.location}, {weatherData.country}
        </div>
        <div className="text-sm text-white/70 mt-1 transition-all duration-300">
          体感温度 {weatherData.feelsLike}°C
        </div>
      </div>
    );
  };

  // 天气详情组件
  const WeatherDetails = ({ weatherData }: { weatherData: OpenWeatherData | null }) => {
    if (!weatherData) {
      return (
        <div className="grid grid-cols-2 gap-3 mb-8 h-32">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`bg-white/10 rounded-xl p-3 text-center animate-pulse ${i === 5 ? 'col-span-2' : ''}`}>
              <div className="text-white/40 text-sm">--</div>
              <div className="text-white/40 font-semibold">-- --</div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div 
        key={`details-${weatherData.location}-${weatherData.temperature}`}
        className="grid grid-cols-2 gap-3 mb-8 transition-all duration-500 ease-in-out"
      >
        <div className="bg-white/10 rounded-xl p-3 text-center transition-all duration-300 hover:bg-white/20">
          <div className="text-white/80 text-sm">湿度</div>
          <div className="text-white font-semibold">💧 {weatherData.humidity}%</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center transition-all duration-300 hover:bg-white/20">
          <div className="text-white/80 text-sm">风速</div>
          <div className="text-white font-semibold">💨 {weatherData.windSpeed} km/h</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center transition-all duration-300 hover:bg-white/20">
          <div className="text-white/80 text-sm">气压</div>
          <div className="text-white font-semibold">🌡️ {weatherData.pressure} hPa</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center transition-all duration-300 hover:bg-white/20">
          <div className="text-white/80 text-sm">能见度</div>
          <div className="text-white font-semibold">👁️ {weatherData.visibility} km</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center col-span-2 transition-all duration-300 hover:bg-white/20">
          <div className="text-white/80 text-sm">云量</div>
          <div className="text-white font-semibold">☁️ {weatherData.clouds}%</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 relative">
          <LoadingOverlay />
          
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">OpenWeatherMap</h1>
            <p className="text-white/80">实时天气数据</p>
          </div>
          
          <WeatherDisplay weatherData={weather} />
          <WeatherDetails weatherData={weather} />
          
          <div className="space-y-4">
            {/* 城市选择下拉框 */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                选择城市:
              </label>
              <select
                value={selectedCity}
                onChange={(e) => {
                  const city = e.target.value;
                  setSelectedCity(city);
                  if (city) {
                    fetchWeather(city);
                  }
                }}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <option value="" style={{ color: '#333' }}>请选择城市</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.displayName} style={{ color: '#333' }}>
                    {city.displayName} ({city.country})
                  </option>
                ))}
              </select>
            </div>

            {/* 操作按钮 */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => selectedCity ? fetchWeather(selectedCity) : fetchWeather()}
                disabled={loading || locationLoading}
                className="bg-white/30 hover:bg-white/40 disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                {loading ? '获取中...' : selectedCity ? `📍 ${selectedCity}` : '🎲 随机城市'}
              </button>
              
              <button
                onClick={() => {
                  setSelectedCity(''); // 清空城市选择
                  getCurrentLocation();
                }}
                disabled={loading || locationLoading}
                className="bg-white/30 hover:bg-white/40 disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                {locationLoading ? '定位中...' : '📱 当前位置'}
              </button>
            </div>
            
            {/* 快速城市按钮 */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                快速选择:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {cities.slice(0, 6).map((city) => (
                  <button
                    key={city.name}
                    onClick={() => {
                      setSelectedCity(city.displayName);
                      fetchWeather(city.displayName);
                    }}
                    disabled={loading || locationLoading}
                    className="bg-white/20 hover:bg-white/30 disabled:opacity-50 text-white text-sm font-medium py-2 px-3 rounded-lg transition-all duration-300"
                  >
                    {city.displayName}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setShowApiInput(true)}
              className="w-full bg-white/10 hover:bg-white/20 text-white/80 text-sm py-2 px-4 rounded-lg transition-all duration-300"
            >
              ⚙️ 更换 API Key
            </button>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            数据来源: OpenWeatherMap API
          </p>
        </div>
      </div>
    </div>
  );
} 