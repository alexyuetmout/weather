# 🎨 风格代号实现参考

## instagram风格
```css
.instagram-style {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  border: 1px solid #f0f0f0;
  padding: 20px;
}
```

## discord风格  
```css
.discord-style {
  background: #36393f;
  border-radius: 8px;
  border: 1px solid #4f545c;
  color: #dcddde;
  accent-color: #5865f2;
}
```

## spotify风格
```css
.spotify-style {
  background: linear-gradient(135deg, #1db954, #191414);
  border-radius: 12px;
  color: white;
  box-shadow: 0 8px 24px rgba(29, 185, 84, 0.2);
}
```

## notion风格
```css
.notion-style {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  color: #37352f;
  font-family: -apple-system, BlinkMacSystemFont;
}
```

## xiaohongshu风格
```css
.xiaohongshu-style {
  background: #fff7f0;
  border-radius: 16px;
  border: 1px solid #ffe4cc;
  color: #7c4a3a;
  accent-color: #fe2c55;
}
```

## 苹果风格
```css
.apple-style {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 0.5px solid rgba(255,255,255,0.3);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
```

## 温馨风格
```css
.warm-style {
  background: linear-gradient(135deg, #fff8e1, #ffecb3);
  border-radius: 20px;
  color: #5d4037;
  box-shadow: 0 4px 16px rgba(255, 193, 7, 0.2);
}
```

## 酷炫风格
```css
.cool-style {
  background: linear-gradient(135deg, #0f0f23, #1a1a3a);
  border-radius: 8px;
  border: 1px solid #00d4ff;
  color: #00d4ff;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}
```

## 高端风格
```css
.luxury-style {
  background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
  border-radius: 12px;
  border: 1px solid #d4af37;
  color: #f5f5f5;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.2);
}
```

## 游戏风格
```css
.gaming-style {
  background: linear-gradient(135deg, #0a0a0a, #1a0033);
  border-radius: 8px;
  border: 2px solid #ff006e;
  color: #ffffff;
  box-shadow: 0 0 30px rgba(255, 0, 110, 0.4);
  position: relative;
}

.gaming-style::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff);
  border-radius: inherit;
  z-index: -1;
  animation: glow 2s ease-in-out infinite alternate;
}
``` 