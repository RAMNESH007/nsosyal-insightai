import { Image, Video, BarChart2, Smile, MoreHorizontal, MessageCircle, Heart, Share, Bookmark, Sparkles, Send } from 'lucide-react';
import FeedDNAChart from '../components/FeedDNAChart';

export default function Home() {
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Middle Column - Feed */}
      <div className="flex-1 max-w-3xl border-r border-[#1e293b] flex flex-col overflow-y-auto">
        
        {/* Top Header */}
        <div className="sticky top-0 bg-[#0B0F19]/90 backdrop-blur-sm z-10 p-4 border-b border-[#1e293b] flex gap-4">
          <div className="flex-1 bg-[#1e293b] rounded-full flex items-center px-4 py-2">
            <span className="text-gray-400 text-sm">Ara NSosyal'de...</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <span className="font-medium text-sm">Ahmet</span>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Stories */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {['Hikaye Ekle', 'zeynep.tech', 'mert.yildiz', 'bilim.ve.ozel', 'oguzhan.tr'].map((story, i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[72px]">
                <div className={`w-16 h-16 rounded-full border-2 p-0.5 ${i === 0 ? 'border-dashed border-gray-500' : 'border-primary'}`}>
                  <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                    {i === 0 ? <PlusCircle className="text-gray-400" /> : <div className="w-full h-full bg-gray-500 rounded-full"></div>}
                  </div>
                </div>
                <span className="text-xs text-gray-400 truncate w-full text-center">{story}</span>
              </div>
            ))}
          </div>

          {/* New Post Input */}
          <div className="bg-[#111827] rounded-xl p-4 border border-[#1e293b]">
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
              <input 
                type="text" 
                placeholder="Ne düşünüyorsun, Ahmet?"
                className="bg-transparent border-none focus:outline-none text-gray-200 w-full"
              />
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-[#1e293b]">
              <div className="flex gap-4 text-gray-400">
                <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Image size={18} /> Fotoğraf</button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Video size={18} /> Video</button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><BarChart2 size={18} /> Anket</button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Smile size={18} /> Duygu</button>
              </div>
              <button className="bg-primary hover:bg-blue-600 text-white px-6 py-1.5 rounded-full font-medium transition-colors">
                Paylaş
              </button>
            </div>
          </div>

          {/* Feed Post */}
          <div className="bg-[#111827] rounded-xl p-4 border border-[#1e293b]">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                 <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                   <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold">Teknoloji Gündemi</span>
                     <span className="text-gray-500 text-sm">@teknolojigundemi · 2s</span>
                   </div>
                   <p className="text-gray-300 mt-1 text-sm">
                     Yapay zeka destekli yeni çipler, mobil cihazlarda devrim yaratacak.
                   </p>
                   <p className="text-primary text-sm mt-1">#teknoloji #yapayzeka</p>
                 </div>
              </div>
              <button className="text-gray-500 hover:text-white"><MoreHorizontal size={20} /></button>
            </div>

            <div className="rounded-xl overflow-hidden mt-3 h-64 bg-gray-800 border border-[#1e293b]">
               {/* Placeholder for AI chip image */}
               <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-slate-900 flex items-center justify-center text-gray-500">
                  [Görsel]
               </div>
            </div>

            <div className="flex justify-between items-center mt-4 text-gray-400">
              <button className="flex items-center gap-2 hover:text-primary"><MessageCircle size={18} /> 128</button>
              <button className="flex items-center gap-2 hover:text-green-500"><Share size={18} /> 256</button>
              <button className="flex items-center gap-2 text-red-500"><Heart size={18} fill="currentColor" /> 1.2K</button>
              <button className="flex items-center gap-2 hover:text-primary"><Bookmark size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Explainability & Tools */}
      <div className="w-[350px] bg-[#0B0F19] p-4 flex flex-col gap-4 overflow-y-auto hidden xl:flex">
        
        {/* Neden bunu görüyorum? */}
        <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-4">
          <div className="flex items-center gap-2 mb-4 text-gray-300">
            <span className="font-semibold">Neden bunu görüyorum?</span>
            <Sparkles size={16} className="text-gray-500" />
          </div>

          <div className="space-y-4 text-sm">
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-400"><div className="w-2 h-2 rounded-full bg-blue-500"></div> İlgi Alanı Eşleşmesi</span>
                 <span className="font-medium">42%</span>
               </div>
               <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }}></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-400"><div className="w-2 h-2 rounded-full bg-green-500"></div> Güncellik</span>
                 <span className="font-medium">28%</span>
               </div>
               <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 rounded-full" style={{ width: '28%' }}></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-400"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Sosyal Yakınlık</span>
                 <span className="font-medium">15%</span>
               </div>
               <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                 <div className="h-full bg-purple-500 rounded-full" style={{ width: '15%' }}></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-400"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Kalite ve Güvenlik</span>
                 <span className="font-medium">15%</span>
               </div>
               <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                 <div className="h-full bg-yellow-500 rounded-full" style={{ width: '15%' }}></div>
               </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            Teknoloji ile ilgili içeriklere sık etkileşimde bulunduğun için bunu görüyorsun.
          </p>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-[#1e293b] hover:bg-gray-700 text-white py-2 rounded-lg text-xs font-medium transition-colors">Daha az göster</button>
            <button className="flex-1 bg-primary hover:bg-blue-600 text-white py-2 rounded-lg text-xs font-medium transition-colors">Daha fazla göster</button>
          </div>
        </div>

        {/* Feed DNA */}
        <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Feed DNA</span>
            <span className="text-primary text-xs hover:underline cursor-pointer">Tümünü Gör</span>
          </div>
          
          <div className="flex items-center gap-4">
            <FeedDNAChart />

            <div className="flex-1 space-y-2 text-xs">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="flex-1 text-gray-400">Teknoloji</span><span className="font-medium">32%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="flex-1 text-gray-400">Eğlence</span><span className="font-medium">24%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="flex-1 text-gray-400">Spor</span><span className="font-medium">17%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500"></div><span className="flex-1 text-gray-400">Haber</span><span className="font-medium">13%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500"></div><span className="flex-1 text-gray-400">Eğitim</span><span className="font-medium">9%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-500"></div><span className="flex-1 text-gray-400">Diğer</span><span className="font-medium">5%</span></div>
            </div>
          </div>
        </div>

        {/* Aya Asistan */}
        <div className="bg-[#111827] rounded-xl border border-[#1e293b] p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-semibold">Aya Asistan</span>
            <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold">BETA</span>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
               <span className="text-white text-xs font-bold">A</span>
            </div>
            <div>
              <p className="text-sm font-medium">Merhaba Ahmet! 👋</p>
              <p className="text-xs text-gray-400 mt-1">Bugün sana nasıl yardımcı olabilirim?</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <button className="bg-[#1e293b] hover:bg-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full transition-colors border border-gray-700">
              Neden bunu görüyorum?
            </button>
            <button className="bg-[#1e293b] hover:bg-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full transition-colors border border-gray-700">
              Daha az negatif içerik göster
            </button>
            <button className="bg-[#1e293b] hover:bg-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full transition-colors border border-gray-700">
              Daha fazla teknoloji göster
            </button>
          </div>

          <div className="relative mt-auto">
            <input 
              type="text" 
              placeholder="Aya'ya bir şey sor..." 
              className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary pr-10"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-blue-400 p-1">
              <Send size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Add a dummy PlusCircle component to avoid importing errors
function PlusCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
}
