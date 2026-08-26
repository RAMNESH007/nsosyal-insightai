import { DollarSign, PieChart, TrendingUp, Users, Award } from 'lucide-react';

export default function RevenueCenter() {
  return (
    <div className="flex-1 overflow-y-auto bg-background p-6 lg:p-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <DollarSign className="text-green-500" /> Gelir Merkezi
          </h1>
          <p className="text-gray-400 text-sm mt-1">İçerik üretiminden elde ettiğiniz finansal değer.</p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Para Çek
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Total Revenue */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-6 lg:col-span-2 flex flex-col justify-between">
          <div className="flex justify-between items-start">
             <div>
               <h3 className="text-gray-400 text-sm mb-1">Tahmini Aylık Gelir (Ağustos)</h3>
               <p className="text-4xl font-bold text-white">₺42,850</p>
               <div className="mt-2 flex items-center gap-2 text-sm">
                 <span className="text-green-500 flex items-center gap-1"><TrendingUp size={16} /> +%14</span>
                 <span className="text-gray-500">geçen aya göre</span>
               </div>
             </div>
             <div className="bg-green-500/10 text-green-500 p-3 rounded-xl">
               <DollarSign size={24} />
             </div>
          </div>
          
          {/* Revenue Chart Placeholder */}
          <div className="h-32 mt-8 flex items-end justify-between border-b border-gray-800 pb-2">
            {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
               <div key={i} className="w-8 bg-gradient-to-t from-green-600 to-green-400 rounded-t-sm" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-6">
          <h3 className="text-gray-300 font-medium mb-6 flex items-center gap-2"><PieChart size={18} /> Gelir Dağılımı</h3>
          
          <div className="space-y-4">
             <div>
               <div className="flex justify-between text-sm mb-1">
                 <span className="text-gray-400">Reklam Payı (Ad-Share)</span>
                 <span className="text-white font-medium">₺24,500</span>
               </div>
               <div className="h-2 bg-gray-800 rounded-full"><div className="h-full bg-blue-500 rounded-full w-[60%]"></div></div>
             </div>
             <div>
               <div className="flex justify-between text-sm mb-1">
                 <span className="text-gray-400">Abonelikler (Premium)</span>
                 <span className="text-white font-medium">₺12,350</span>
               </div>
               <div className="h-2 bg-gray-800 rounded-full"><div className="h-full bg-purple-500 rounded-full w-[30%]"></div></div>
             </div>
             <div>
               <div className="flex justify-between text-sm mb-1">
                 <span className="text-gray-400">Marka İşbirlikleri</span>
                 <span className="text-white font-medium">₺6,000</span>
               </div>
               <div className="h-2 bg-gray-800 rounded-full"><div className="h-full bg-yellow-500 rounded-full w-[10%]"></div></div>
             </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fair Share System */}
        <div className="bg-[#111827] border border-blue-500/30 rounded-xl p-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={100} className="text-blue-500" /></div>
           <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2"><Award size={20} /> Adil Paylaşım (Fair Share)</h3>
           <p className="text-sm text-gray-300 mb-6 relative z-10">
             İçeriklerinizin doğruluk puanı ve topluluk kalitesi yüksek olduğu için bu ay <strong>+%5 Ekstra Bonus</strong> kazandınız.
           </p>
           <div className="bg-[#1e293b]/50 border border-[#1e293b] rounded-lg p-4 inline-block">
             <p className="text-xs text-gray-400">Bonus Kazancı</p>
             <p className="text-xl font-bold text-blue-400">+₺2,142</p>
           </div>
        </div>

        {/* Micro-Collabs */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-6">
           <h3 className="text-gray-300 font-medium mb-4 flex items-center gap-2"><Users size={20} /> Bekleyen Mikro-İşbirlikleri</h3>
           <div className="space-y-3">
             <div className="flex items-center justify-between p-3 bg-[#1F2937] rounded-lg">
               <div>
                 <p className="text-sm text-white font-medium">Kahve Dünyası - Yaz Kampanyası</p>
                 <p className="text-xs text-gray-400">Story + 1 Post</p>
               </div>
               <div className="text-right">
                 <p className="text-sm font-bold text-green-400">₺4,500</p>
                 <button className="text-[10px] text-primary hover:underline">İncele</button>
               </div>
             </div>
             <div className="flex items-center justify-between p-3 bg-[#1F2937] rounded-lg">
               <div>
                 <p className="text-sm text-white font-medium">TechGear TR - İnceleme</p>
                 <p className="text-xs text-gray-400">Reels Videosu</p>
               </div>
               <div className="text-right">
                 <p className="text-sm font-bold text-green-400">₺8,000</p>
                 <button className="text-[10px] text-primary hover:underline">İncele</button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
