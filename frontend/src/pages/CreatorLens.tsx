import { BarChart2, Star, TrendingUp, DollarSign, Users, Sparkles, PlusCircle } from 'lucide-react';

export default function CreatorLens() {
  return (
    <div className="flex-1 overflow-y-auto bg-background p-6">
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="text-primary" /> Creator Lens
          </h1>
          <p className="text-gray-400 text-sm mt-1">İçeriğinin ekonomik potansiyelini keşfet</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">25 Ağu - 31 Ağu 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Creator Economic Score */}
        <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-6 flex flex-col justify-between">
          <h3 className="text-gray-300 font-medium mb-4 text-center">Creator Ekonomik Skoru</h3>
          <div className="flex items-center justify-center flex-1">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-700"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                />
                <path
                  className="text-green-500"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="81, 100"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">81</span>
                <span className="text-xs text-gray-400">/100</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded font-medium">İyi bir performans! 🚀</span>
          </div>
          <p className="text-[10px] text-gray-500 text-center mt-4">Bu skor yapay zeka tahminidir ve piyasa değerinin garantisi değildir.</p>
        </div>

        {/* Value Estimate & Reach */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-gray-400 text-sm mb-2">Aylık Tahmini Değer</h3>
            <p className="text-2xl font-bold text-white">₺18.000 - ₺25.000</p>
            <p className="text-xs text-green-400 mt-2 flex items-center gap-1">Güven: %82</p>
          </div>
          <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-gray-400 text-sm mb-2">Toplam Takipçi</h3>
            <p className="text-2xl font-bold text-white">245K</p>
            <p className="text-xs text-green-400 mt-2 flex items-center gap-1"><TrendingUp size={12} /> +12%</p>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-6">
          <h3 className="text-gray-300 font-medium mb-6">Skor Bileşenleri</h3>
          <div className="space-y-4 text-sm">
            {[
              { label: 'Kitle Kalitesi', score: 86, color: 'bg-blue-500' },
              { label: 'Etkileşim Kalitesi', score: 78, color: 'bg-green-500' },
              { label: 'İçerik Kalitesi', score: 91, color: 'bg-purple-500' },
              { label: 'Marka Uyumu', score: 75, color: 'bg-yellow-500' },
              { label: 'Kitle Tutarlılığı', score: 80, color: 'bg-cyan-500' },
            ].map((item) => (
              <div key={item.label}>
                 <div className="flex justify-between mb-1">
                   <span className="text-gray-400">{item.label}</span>
                   <span className="font-medium text-white">{item.score}/100</span>
                 </div>
                 <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                   <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }}></div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart Placeholder */}
        <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-300 font-medium">Performans (7 Gün)</h3>
            <div className="flex gap-4">
              <span className="text-xs text-blue-400 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400"></div> Görüntülenme</span>
              <span className="text-xs text-purple-400 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Etkileşim</span>
            </div>
          </div>
          <div className="h-48 border-b border-l border-gray-700 flex items-end justify-between p-2 pb-0">
             {/* Mock Chart lines */}
             <div className="w-full h-full relative">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <polyline fill="none" stroke="#3B82F6" strokeWidth="2" points="0,80 20,60 40,70 60,30 80,40 100,10" />
                  <polyline fill="none" stroke="#8B5CF6" strokeWidth="2" points="0,90 20,85 40,88 60,60 80,65 100,50" />
                </svg>
             </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-gray-400 text-xs">Görüntülenme</p>
              <p className="text-white font-medium">1.2M <span className="text-green-500 text-xs">+18%</span></p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Etkileşim</p>
              <p className="text-white font-medium">124K <span className="text-green-500 text-xs">+24%</span></p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Etkileşim Oranı</p>
              <p className="text-white font-medium">%10.3 <span className="text-green-500 text-xs">+2.1%</span></p>
            </div>
          </div>
        </div>

        {/* AI Brand Matches Preview */}
        <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-300 font-medium">Sizin İçin AI ile Eşleşen Markalar</h3>
          </div>
          
          <div className="space-y-4 flex-1">
             <div className="bg-[#1e293b]/50 p-4 rounded-lg flex items-center gap-4 border border-[#1e293b]">
               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">T</div>
               <div className="flex-1">
                 <h4 className="text-white font-medium">TeknoMark Teknoloji</h4>
                 <p className="text-gray-400 text-xs">Yeni Akıllı Saat Lansmanı</p>
               </div>
               <div className="text-right">
                 <div className="text-green-400 font-bold text-lg">%94</div>
                 <div className="text-gray-500 text-[10px]">Eşleşme</div>
               </div>
             </div>

             <div className="bg-[#1e293b]/50 p-4 rounded-lg flex items-center gap-4 border border-[#1e293b]">
               <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white">E</div>
               <div className="flex-1">
                 <h4 className="text-white font-medium">EduPlus Platformu</h4>
                 <p className="text-gray-400 text-xs">Eğitim - Online Kurslar</p>
               </div>
               <div className="text-right">
                 <div className="text-green-400 font-bold text-lg">%88</div>
                 <div className="text-gray-500 text-[10px]">Eşleşme</div>
               </div>
             </div>
          </div>
          
          <button className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary py-3 rounded-lg font-medium transition-colors">
            Daha Fazla Kampanya Keşfet
          </button>
        </div>
      </div>
    </div>
  );
}
