import { useState } from 'react';
import { Settings as SettingsIcon, Sliders, Shield, Bell, CheckCircle2, User, Eye, Sparkles } from 'lucide-react';

export default function Settings() {
  const [techWeight, setTechWeight] = useState(80);
  const [funWeight, setFunWeight] = useState(60);
  const [sportWeight, setSportWeight] = useState(50);
  const [newsWeight, setNewsWeight] = useState(40);
  const [eduWeight, setEduWeight] = useState(70);

  const [negativePref, setNegativePref] = useState<'more' | 'balanced' | 'less'>('balanced');
  const [echoChamberBreaker, setEchoChamberBreaker] = useState(true);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-5xl mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <SettingsIcon className="text-blue-400" size={24} /> Ayarlar ve Algoritmik Tercihler
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            İçerik akış ağırlıklarınızı, güvenlik filtrelerinizi ve duygu filtrelerinizi manuel kontrol edin.
          </p>
        </div>

        {savedNotice && (
          <div className="flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/40 px-3 py-1.5 rounded-xl text-xs font-semibold animate-fade-in">
            <CheckCircle2 size={14} /> Tercihler Başarıyla Kaydedildi
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <button className="w-full flex items-center gap-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-semibold px-4 py-3 rounded-2xl text-sm text-left">
            <Sliders size={18} /> İçerik Tercihleri
          </button>
          <button className="w-full flex items-center gap-3 bg-[#111827] hover:bg-[#161F30] border border-[#1e293b] text-gray-400 hover:text-white px-4 py-3 rounded-2xl text-sm text-left transition-colors">
            <Shield size={18} /> Güvenlik & Gizlilik
          </button>
          <button className="w-full flex items-center gap-3 bg-[#111827] hover:bg-[#161F30] border border-[#1e293b] text-gray-400 hover:text-white px-4 py-3 rounded-2xl text-sm text-left transition-colors">
            <Bell size={18} /> Bildirim Ayarları
          </button>
        </div>

        {/* Right Side Settings Form */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Content Sliders matching Screen 7 */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-7">
            <h3 className="font-bold text-white text-base mb-6 flex items-center gap-2">
              <Sliders className="text-blue-400" size={18} /> İçerik Tercihleriniz (Kategori Ağırlıkları)
            </h3>

            <div className="space-y-6">
              
              {/* Teknoloji */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-gray-300">Teknoloji & Yapay Zeka</span>
                  <span className="text-blue-400 font-bold">%{techWeight}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={techWeight}
                  onChange={(e) => setTechWeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Eğlence */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-gray-300">Eğlence & Mizah</span>
                  <span className="text-blue-400 font-bold">%{funWeight}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={funWeight}
                  onChange={(e) => setFunWeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Spor */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-gray-300">Spor & E-Spor</span>
                  <span className="text-blue-400 font-bold">%{sportWeight}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sportWeight}
                  onChange={(e) => setSportWeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Haber */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-gray-300">Haber & Güncel Gelişmeler</span>
                  <span className="text-blue-400 font-bold">%{newsWeight}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newsWeight}
                  onChange={(e) => setNewsWeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Eğitim */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-gray-300">Eğitim & Bilim</span>
                  <span className="text-blue-400 font-bold">%{eduWeight}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={eduWeight}
                  onChange={(e) => setEduWeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

            </div>
          </div>

          {/* Negatif İçerik & Yankı Odası Kontrolleri */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-7 space-y-6">
            
            {/* Negatif İçerik */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Negatif İçerik Tercihi</h4>
              <p className="text-xs text-gray-400 mb-3">
                Kriz, felaket veya kutuplaştırıcı haberlerin akışınızdaki görünürlüğü.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'more', label: 'Daha Fazla Göster' },
                  { id: 'balanced', label: 'Dengeli Göster' },
                  { id: 'less', label: 'Daha Az Göster' },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setNegativePref(btn.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      negativePref === btn.id
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-[#161F30] text-gray-400 hover:text-white border border-gray-800'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Echo Chamber Breaker Toggle */}
            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
              <div className="pr-4">
                <h4 className="text-sm font-bold text-white">Yankı Odası Kırıcı (Echo Chamber Breaker)</h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  Farklı görüş ve perspektiflerden kaliteli içerikleri ölçülü olarak akışınıza dahil eder.
                </p>
              </div>
              <input
                type="checkbox"
                checked={echoChamberBreaker}
                onChange={(e) => setEchoChamberBreaker(e.target.checked)}
                className="w-5 h-5 accent-blue-600 rounded cursor-pointer flex-shrink-0"
              />
            </div>

          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-8 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-98"
            >
              Değişiklikleri Kaydet
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
