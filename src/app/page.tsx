'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  location: string;
  country: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  description: string;
  latitude: number;
  longitude: number;
}

interface City {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

const cities: City[] = [
  { name: '北京', country: '中国', latitude: 39.9042, longitude: 116.4074 },
  { name: '上海', country: '中国', latitude: 31.2304, longitude: 121.4737 },
  { name: '东京', country: '日本', latitude: 35.6762, longitude: 139.6503 },
  { name: '纽约', country: '美国', latitude: 40.7128, longitude: -74.0060 },
  { name: '伦敦', country: '英国', latitude: 51.5074, longitude: -0.1278 },
  { name: '巴黎', country: '法国', latitude: 48.8566, longitude: 2.3522 },
  { name: '悉尼', country: '澳大利亚', latitude: -33.8688, longitude: 151.2093 },
  { name: '莫斯科', country: '俄罗斯', latitude: 55.7558, longitude: 37.6173 },
  { name: '新加坡', country: '新加坡', latitude: 1.3521, longitude: 103.8198 },
  { name: '迪拜', country: '阿联酋', latitude: 25.2048, longitude: 55.2708 },
  { name: '洛杉矶', country: '美国', latitude: 34.0522, longitude: -118.2437 },
  { name: '柏林', country: '德国', latitude: 52.5200, longitude: 13.4050 },
  { name: '香港', country: '中国', latitude: 22.3193, longitude: 114.1694 },
  { name: '首尔', country: '韩国', latitude: 37.5665, longitude: 126.9780 },
  { name: '罗马', country: '意大利', latitude: 41.9028, longitude: 12.4964 },
];

const getWeatherDescription = (code: number): string => {
  const weatherCodes: { [key: number]: string } = {
    0: '晴朗',
    1: '大部分晴朗',
    2: '部分多云',
    3: '阴天',
    45: '雾',
    48: '结霜雾',
    51: '小雨',
    53: '中雨',
    55: '大雨',
    56: '冻毛毛雨',
    57: '重冻毛毛雨',
    61: '小雨',
    63: '中雨',
    65: '大雨',
    66: '冻雨',
    67: '重冻雨',
    71: '小雪',
    73: '中雪',
    75: '大雪',
    77: '雪粒',
    80: '小阵雨',
    81: '中阵雨',
    82: '大阵雨',
    85: '小雪阵雨',
    86: '大雪阵雨',
    95: '雷暴',
    96: '雷暴伴小冰雹',
    99: '雷暴伴大冰雹',
  };
  return weatherCodes[code] || '未知天气';
};

const getWeatherIcon = (code: number): string => {
  if (code === 0) return '☀️';
  if ([1, 2].includes(code)) return '⛅';
  if (code === 3) return '☁️';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 61, 63, 65].includes(code)) return '🌧️';
  if ([56, 57, 66, 67].includes(code)) return '🌨️';
  if ([71, 73, 75, 77].includes(code)) return '❄️';
  if ([80, 81, 82].includes(code)) return '🌦️';
  if ([85, 86].includes(code)) return '🌨️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '🌤️';
};

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomWeather = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${randomCity.latitude}&longitude=${randomCity.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
      );
      
      if (!response.ok) {
        throw new Error('获取天气数据失败');
      }
      
      const data = await response.json();
      
      setWeather({
        location: randomCity.name,
        country: randomCity.country,
        temperature: Math.round(data.current.temperature_2m),
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
        weatherCode: data.current.weather_code,
        description: getWeatherDescription(data.current.weather_code),
        latitude: randomCity.latitude,
        longitude: randomCity.longitude,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生未知错误');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomWeather();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl font-semibold animate-pulse">
          正在获取天气数据...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-600 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 text-center">
          <div className="text-white text-xl font-semibold mb-4">
            ❌ {error}
          </div>
          <button
            onClick={fetchRandomWeather}
            className="bg-white/30 hover:bg-white/40 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Random Weather</h1>
            <p className="text-white/80">随机天气预报</p>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {getWeatherIcon(weather.weatherCode)}
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {weather.temperature}°C
            </div>
            <div className="text-xl text-white/90 mb-1">
              {weather.description}
            </div>
            <div className="text-lg font-semibold text-white">
              {weather.location}, {weather.country}
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
              <span className="text-white/80">湿度</span>
              <span className="text-white font-semibold">💧 {weather.humidity}%</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
              <span className="text-white/80">风速</span>
              <span className="text-white font-semibold">💨 {weather.windSpeed} km/h</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
              <span className="text-white/80">坐标</span>
              <span className="text-white font-semibold">📍 {weather.latitude.toFixed(2)}, {weather.longitude.toFixed(2)}</span>
            </div>
          </div>
          
          <button
            onClick={fetchRandomWeather}
            disabled={loading}
            className="w-full bg-white/30 hover:bg-white/40 disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
          >
            {loading ? '获取中...' : '🎲 随机天气'}
          </button>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            数据来源: Open-Meteo API
          </p>
        </div>
      </div>
    </div>
  );
}
