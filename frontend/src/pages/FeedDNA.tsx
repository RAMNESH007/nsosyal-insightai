import { useState } from 'react';
import { Sparkles, Compass, Plus, Sliders, ArrowUpRight, Check, RefreshCw } from 'lucide-react';
import FeedDNAChart from '../components/FeedDNAChart';

export default function FeedDNA() {
  const [selectedTopic, setSelectedTopic] = useState('Teknoloji');

  const topics = [
    { name: 'Teknoloji', percent: 32, color: '#3B82F6', creators: 18, desc: '18 teknoloji içerik üreticisini takip ediyorsun. Etkileşimlerinin %27\'si yapay zeka ve yazılım konularında.' },
    { name: 'Eğlence', percent: 24, color: '#10B981', creators: 12, desc: 'Mizah, dizi incelemeleri ve viral videolar. Günün belirli saatlerinde öneriliyor.' },
    { name: 'Spor', percent: 17, color: '#8B5CF6', creators: 7, desc: 'Futbol, basketbol ve e-spor turnuvaları güncel gelişmeleri.' },
    { name: 'Haber', percent: 13, color: '#F59E0B', creators: 9, desc: 'Doğrulanmış haber kaynaklarından derlenen günlük özetler.' },
    { name: 'Eğitim', percent: 9, color: '#06B6D4', creators: 5, desc: 'Bilimsel makaleler, online kurs tavsiyeleri ve dil öğrenimi.' },
    { name: 'Diğer', percent: 5, color: '#6B7280', creators: 3, desc: 'Seyahat, gastronomi ve karma keşif içerikleri.' },
  ];

  const exploreTopics = ['Bilim', 'Sanat & Tasarım', 'Tarih & Felsefe', 'Doğa & Çevre', 'Psikoloji', 'Astronomi'];

  const currentTopic = topics.find(t => t.name === selectedTopic) || topics[0];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-6xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">#</span> Feed DNA Evreni
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            İçerik evreninizi ve ilgi alanlarınızı keşfedin, algoritmanızı doğrudan şekillendirin.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#111827] border border-[#1e293b] rounded-xl px-3 py-1.5 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          Canlı Algoritmik Harita
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        
        {/* Visual Map / DNA Network */}
        <div className="lg:col-span-7 bg-[#111827] border border-[#1e293b] rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[380px]">
          <div className="absolute top-4 left-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            İlgi Alanı Dağılımı
          </div>

          {/* Central Orbit Network Visual */}
          <div className="w-full max-w-sm flex items-center justify-center my-6">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-6 rounded-full border border-purple-500/15"></div>

              {/* Center Node (User) */}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-base flex items-center justify-center shadow-lg shadow-blue-500/40 z-10 border-2 border-blue-400">
                Siz
              </div>

              {/* Orbiting Satellite Topics */}
              {topics.map((t, idx) => {
                const angle = (idx * (360 / topics.length)) * (Math.PI / 180);
                const radius = 95;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = t.name === selectedTopic;

                return (
                  <button
                    key={t.name}
                    onClick={() => setSelectedTopic(t.name)}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className={`absolute p-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 z-20 ${
                      isSelected 
                        ? 'scale-110 ring-2 ring-white shadow-xl shadow-blue-500/30' 
                        : 'hover:scale-105 opacity-85'
                    }`}
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-md"
                      style={{ backgroundColor: t.color }}
                    >
                      %{t.percent}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-200 mt-1 bg-[#0B0F19]/80 px-1.5 py-0.5 rounded backdrop-blur-sm">
                      {t.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Düğümlere tıklayarak kategorileri detaylı inceleyebilir ve filtreleyebilirsiniz.
          </p>
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1e293b] rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Seçili Kategori</span>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2 mt-0.5">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: currentTopic.color }}></span>
                  {currentTopic.name}
                </h2>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-blue-400">%{currentTopic.percent}</span>
                <p className="text-[10px] text-gray-400">Mevcut Maruziyet</p>
              </div>
            </div>

            <div className="bg-[#161F30] rounded-2xl p-4 border border-[#1e293b] mb-6">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Algoritmik Neden?</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {currentTopic.desc}
              </p>
            </div>

            {/* Quick Actions for this topic */}
            <div className="space-y-2.5">
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2">
                <Plus size={15} /> Bu Kategoriyi Akışta Artır (+%10)
              </button>
              <button className="w-full bg-[#1F2937] hover:bg-gray-700 text-gray-300 text-xs font-semibold py-2.5 rounded-xl transition-colors border border-gray-700 flex items-center justify-center gap-2">
                Bu Kategoriyi Azalt (-%10)
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800/80 mt-6 flex justify-between items-center text-xs text-gray-400">
            <span>İlgili Üretici Sayısı: <strong className="text-white">{currentTopic.creators}</strong></span>
            <span className="text-blue-400 font-medium cursor-pointer hover:underline">Detaylı Rapor</span>
          </div>
        </div>

      </div>

      {/* Keşfetmeye Açık Alanlar (Expand content universe) */}
      <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Compass className="text-blue-400" size={20} />
          <h3 className="font-bold text-white text-base">Keşfetmeye Açık Yeni Alanlar</h3>
        </div>
        <p className="text-xs text-gray-400 mb-4">
          Yankı odasından (Echo Chamber) çıkmak için akışınıza yeni kategoriler ekleyin:
        </p>

        <div className="flex flex-wrap gap-2.5">
          {exploreTopics.map((topic) => (
            <button 
              key={topic}
              className="flex items-center gap-2 bg-[#1e293b]/60 hover:bg-blue-600/20 hover:border-blue-500/40 text-gray-300 hover:text-blue-300 text-xs font-medium px-4 py-2 rounded-xl transition-all border border-gray-700/80 group"
            >
              <span>{topic}</span>
              <Plus size={14} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
