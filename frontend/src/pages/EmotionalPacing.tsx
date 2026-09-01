import { useState } from 'react';
import { Activity, ShieldAlert, Zap, CheckCircle2, Sliders, Heart, Sparkles, Smile, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmotionalPacing() {
  const [selectedMode, setSelectedMode] = useState<'calm' | 'balanced' | 'intense'>('balanced');
  const [intensityValue, setIntensityValue] = useState(50);

  const handleModeChange = (mode: 'calm' | 'balanced' | 'intense') => {
    setSelectedMode(mode);
    if (mode === 'calm') setIntensityValue(20);
    if (mode === 'balanced') setIntensityValue(50);
    if (mode === 'intense') setIntensityValue(85);
  };

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-5xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Activity className="text-blue-400" size={24} /> Duygusal Akış Dengesi (Pacing)
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Sosyal medya akışınızın stres seviyesini ve duygusal yoğunluk temposunu kontrol edin.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#111827] border border-[#1e293b] rounded-xl px-3 py-1.5 text-xs text-green-400 font-semibold">
          <CheckCircle2 size={14} /> Akış Dengede
        </div>
      </div>

      {/* Main Interactive Slider Card */}
      <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">Mevcut Pacing Düzeyi</h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full capitalize bg-blue-500/10 text-blue-400 border border-blue-500/30">
            {selectedMode === 'calm' ? '🟢 Sakin Mod' : selectedMode === 'balanced' ? '🔵 Dengeli Mod' : '🔴 Yoğun / Canlı Mod'}
          </span>
        </div>

        {/* 3 Step Slider */}
        <div className="relative my-6 px-2">
          <div className="flex justify-between text-xs font-semibold mb-2">
            <span className="text-green-400">Sakin (Rahatlatıcı)</span>
            <span className="text-blue-400">Dengeli (Varsayılan)</span>
            <span className="text-red-400">Yoğun (Gündem & Tartışma)</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={intensityValue}
            onChange={(e) => {
              const val = Number(e.target.value);
              setIntensityValue(val);
              if (val < 35) setSelectedMode('calm');
              else if (val > 65) setSelectedMode('intense');
              else setSelectedMode('balanced');
            }}
            className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        {/* Günlük Akış Sıralaması / Breakdown */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Günlük İçerik Duygu Dağılımı:
          </h4>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#161F30] border border-gray-800/80 rounded-2xl p-4 text-center">
              <p className="text-xs text-gray-400 mb-1">Sakin & Pozitif</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-green-400">%30</p>
              <p className="text-[10px] text-gray-500 mt-1">Doğa, bilim, sanat</p>
            </div>

            <div className="bg-[#161F30] border border-blue-500/40 rounded-2xl p-4 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5"></div>
              <p className="text-xs text-gray-400 mb-1 relative z-10">Orta & Bilgilendirici</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 relative z-10">%50</p>
              <p className="text-[10px] text-gray-400 mt-1 relative z-10">Teknoloji, eğitim, haber</p>
            </div>

            <div className="bg-[#161F30] border border-gray-800/80 rounded-2xl p-4 text-center">
              <p className="text-xs text-gray-400 mb-1">Yoğun & Tartışmalı</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-red-400">%20</p>
              <p className="text-[10px] text-gray-500 mt-1">Siyaset, acil gündem</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Mode Selection Cards */}
      <h2 className="text-lg font-bold text-white mb-4">Pacing Modu Seçimi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        
        {/* Calm */}
        <div 
          onClick={() => handleModeChange('calm')}
          className={`p-6 rounded-3xl cursor-pointer transition-all border ${
            selectedMode === 'calm'
              ? 'bg-[#161F30] border-green-500 shadow-lg shadow-green-500/10'
              : 'bg-[#111827] border-[#1e293b] hover:border-gray-700'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-green-500/10 rounded-2xl text-green-400">
              <Smile size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Sakin Mod</h3>
              <span className="text-[10px] text-green-400 font-semibold">Stres Azaltıcı</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Rahatlatıcı, yapıcı ve eğitici içerikleri öne çıkarır. Felaket haberciliğini en aza indirir.
          </p>
        </div>

        {/* Balanced */}
        <div 
          onClick={() => handleModeChange('balanced')}
          className={`p-6 rounded-3xl cursor-pointer transition-all border ${
            selectedMode === 'balanced'
              ? 'bg-[#161F30] border-blue-500 shadow-lg shadow-blue-500/10'
              : 'bg-[#111827] border-[#1e293b] hover:border-gray-700'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Dengeli Mod</h3>
              <span className="text-[10px] text-blue-400 font-semibold">Önerilen</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Gündemden koparmadan, sağlıklı ve dengeli bir içerik akış ritmi sağlar.
          </p>
        </div>

        {/* Intense */}
        <div 
          onClick={() => handleModeChange('intense')}
          className={`p-6 rounded-3xl cursor-pointer transition-all border ${
            selectedMode === 'intense'
              ? 'bg-[#161F30] border-red-500 shadow-lg shadow-red-500/10'
              : 'bg-[#111827] border-[#1e293b] hover:border-gray-700'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
              <Zap size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Canlı / Yoğun</h3>
              <span className="text-[10px] text-red-400 font-semibold">Hızlı Akış</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Anlık gelişen olaylar, son dakika haberleri ve yoğun gündem tartışmalarını önceliklendirir.
          </p>
        </div>

      </div>

      {/* 24-Hour Timeline Flow Visual */}
      <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6">
        <h3 className="font-bold text-white text-base mb-2">24 Saatlik Akış Yoğunluk Eğrisi</h3>
        <p className="text-xs text-gray-400 mb-6">Akşam saatlerinde sakinleştirici içerik ağırlığı otomatik olarak yükseltilir.</p>
        
        <div className="h-32 w-full relative">
          <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
            <path
              d="M 0 80 Q 125 70, 250 35 T 375 50 T 500 85"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 0 80 Q 125 70, 250 35 T 375 50 T 500 85 L 500 100 L 0 100 Z"
              fill="url(#flowGradient)"
              opacity="0.15"
            />
            <defs>
              <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>00:00 (Gece)</span>
          <span>06:00 (Sabah)</span>
          <span>12:00 (Öğle)</span>
          <span>18:00 (Akşam)</span>
          <span>24:00 (Gece)</span>
        </div>
      </div>

    </div>
  );
}
