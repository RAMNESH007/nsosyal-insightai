import { Image, Video, BarChart2, Smile, MoreHorizontal, MessageCircle, Heart, Share2, Bookmark, Sparkles, Send, Plus } from 'lucide-react';
import FeedDNAChart from '../components/FeedDNAChart';

export default function Home() {
  return (
    <div className="flex-1 flex w-full h-full overflow-hidden">
      {/* Middle Column - Feed (Smooth minimal scroll, perfectly fills central area) */}
      <div className="flex-1 min-w-0 border-r border-[#1e293b] flex flex-col h-full overflow-y-auto scrollbar-minimal">
        
        {/* Top Header */}
        <div className="sticky top-0 bg-[#0B0F19]/90 backdrop-blur-md z-10 p-4 border-b border-[#1e293b] flex gap-4 items-center">
          <div className="flex-1 bg-[#1e293b]/70 border border-gray-800 rounded-full flex items-center px-4 py-2">
            <span className="text-gray-400 text-sm">Ara NSosyal'de...</span>
          </div>
          <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-md">
              A
            </div>
            <span className="font-medium text-sm hidden sm:inline text-gray-200">Ahmet</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-6 max-w-4xl mx-auto w-full">
          {/* Stories */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {['Hikaye Ekle', 'zeynep.tech', 'mert.yildiz', 'bilim.ve.ozel', 'oguzhan.tr'].map((story, i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer group">
                <div className={`w-16 h-16 rounded-full border-2 p-0.5 transition-transform duration-200 group-hover:scale-105 ${i === 0 ? 'border-dashed border-gray-500' : 'border-primary shadow-sm shadow-blue-500/30'}`}>
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    {i === 0 ? (
                      <Plus className="text-gray-400 w-6 h-6" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-900/60 to-gray-800 flex items-center justify-center text-xs font-semibold text-gray-300">
                        {story.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-400 truncate w-full text-center group-hover:text-gray-200 transition-colors">{story}</span>
              </div>
            ))}
          </div>

          {/* New Post Input */}
          <div className="bg-[#111827] rounded-2xl p-4 sm:p-5 border border-[#1e293b] shadow-sm">
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 shadow-md">
                A
              </div>
              <input 
                type="text" 
                placeholder="Ne düşünüyorsun, Ahmet?"
                className="bg-transparent border-none focus:outline-none text-gray-200 w-full placeholder-gray-500 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-[#1e293b]">
              <div className="flex gap-2 sm:gap-4 text-gray-400">
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs sm:text-sm px-2 py-1 rounded-lg hover:bg-gray-800/50"><Image size={17} /> Fotoğraf</button>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs sm:text-sm px-2 py-1 rounded-lg hover:bg-gray-800/50"><Video size={17} /> Video</button>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs sm:text-sm px-2 py-1 rounded-lg hover:bg-gray-800/50"><BarChart2 size={17} /> Anket</button>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs sm:text-sm px-2 py-1 rounded-lg hover:bg-gray-800/50"><Smile size={17} /> Duygu</button>
              </div>
              <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md shadow-blue-500/20 active:scale-95">
                Paylaş
              </button>
            </div>
          </div>

          {/* Quick Category Chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {['Tümü', 'Bilim & Teknoloji', 'TEKNOFEST 2026', 'Haberler', 'Eğitim', 'Yapay Zeka'].map((cat, i) => (
              <button
                key={cat}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  i === 0 
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30' 
                    : 'bg-[#111827] text-gray-400 hover:text-white border border-[#1e293b]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Feed Post 1 - AI Quantum Chip */}
          <div className="bg-[#111827] rounded-2xl p-4 sm:p-5 border border-[#1e293b] shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                 <div className="w-11 h-11 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                   TG
                 </div>
                 <div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-gray-100">Teknoloji Gündemi</span>
                     <span className="text-gray-500 text-xs sm:text-sm">@teknolojigundemi · 2s</span>
                   </div>
                   <p className="text-gray-300 mt-1 text-sm leading-relaxed">
                     Yapay zeka destekli yeni nöral işlemciler, mobil cihazlarda ve yerli otomobillerde devrim yaratacak. Yeni mimari enerji tasarrufunu %40 artırıyor.
                   </p>
                   <p className="text-primary text-sm mt-1 font-medium">#teknoloji #yapayzeka #yerliçip</p>
                 </div>
              </div>
              <button className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition-colors"><MoreHorizontal size={20} /></button>
            </div>

            <div className="rounded-2xl overflow-hidden mt-3 aspect-video bg-gray-900 border border-[#1e293b]">
               <img src="/ai_chip.jpg" alt="AI Chip Architecture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="flex justify-between items-center mt-4 text-gray-400 pt-2 border-t border-gray-800/60">
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><MessageCircle size={18} /> 128</button>
              <button className="flex items-center gap-2 hover:text-green-500 transition-colors text-sm"><Share2 size={18} /> 256</button>
              <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-sm"><Heart size={18} fill="currentColor" /> 1.2K</button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Bookmark size={18} /></button>
            </div>
          </div>

          {/* Feed Post 2 - TEKNOFEST Aerospace */}
          <div className="bg-[#111827] rounded-2xl p-4 sm:p-5 border border-[#1e293b] shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                 <div className="w-11 h-11 bg-red-600/20 text-red-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                   TF
                 </div>
                 <div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-gray-100">TEKNOFEST Havacılık & Uzay</span>
                     <span className="text-blue-400 text-xs">✓</span>
                     <span className="text-gray-500 text-xs sm:text-sm">@teknofest · 4s</span>
                   </div>
                   <p className="text-gray-300 mt-1 text-sm leading-relaxed">
                     Milli kanatlarımız İstanbul Boğazı semalarında! Otonom uçuş algoritmasıyla senkronize edilen İHA filomuz gösterisini başarıyla tamamladı. 🇹🇷
                   </p>
                   <p className="text-primary text-sm mt-1 font-medium">#TEKNOFEST2026 #MilliTeknoloji #Havacılık</p>
                 </div>
              </div>
              <button className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition-colors"><MoreHorizontal size={20} /></button>
            </div>

            <div className="rounded-2xl overflow-hidden mt-3 aspect-video bg-gray-900 border border-[#1e293b]">
               <img src="/teknofest.jpg" alt="TEKNOFEST Drone Flight" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="flex justify-between items-center mt-4 text-gray-400 pt-2 border-t border-gray-800/60">
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><MessageCircle size={18} /> 482</button>
              <button className="flex items-center gap-2 hover:text-green-500 transition-colors text-sm"><Share2 size={18} /> 1.1K</button>
              <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-sm"><Heart size={18} fill="currentColor" /> 5.4K</button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Bookmark size={18} /></button>
            </div>
          </div>

          {/* Feed Post 3 - Robotics & Lab */}
          <div className="bg-[#111827] rounded-2xl p-4 sm:p-5 border border-[#1e293b] shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                 <div className="w-11 h-11 bg-purple-600/20 text-purple-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                   BT
                 </div>
                 <div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-gray-100">Bilim ve İnovasyon Kulübü</span>
                     <span className="text-gray-500 text-xs sm:text-sm">@bilim.ve.ozel · 6s</span>
                   </div>
                   <p className="text-gray-300 mt-1 text-sm leading-relaxed">
                     İnsansı robot teknolojilerinde yerli kontrol algoritmaları ve Türkçe konuşma sentezi testleri laboratuvar ortamında başarıyla tamamlandı.
                   </p>
                   <p className="text-primary text-sm mt-1 font-medium">#robotik #bilim #yapayzeka</p>
                 </div>
              </div>
              <button className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition-colors"><MoreHorizontal size={20} /></button>
            </div>

            <div className="rounded-2xl overflow-hidden mt-3 aspect-video bg-gray-900 border border-[#1e293b]">
               <img src="/robotics.jpg" alt="Robotics Innovation Lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="flex justify-between items-center mt-4 text-gray-400 pt-2 border-t border-gray-800/60">
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><MessageCircle size={18} /> 214</button>
              <button className="flex items-center gap-2 hover:text-green-500 transition-colors text-sm"><Share2 size={18} /> 430</button>
              <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-sm"><Heart size={18} fill="currentColor" /> 2.8K</button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Bookmark size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Explainability & Tools (Clean full-height side panel) */}
      <div className="w-[370px] 2xl:w-[410px] bg-[#0B0F19] p-4 2xl:p-5 flex flex-col gap-4 overflow-y-auto scrollbar-minimal hidden lg:flex flex-shrink-0 h-full border-l border-[#1e293b]/50">
        
        {/* Neden bunu görüyorum? */}
        <div className="bg-[#111827] rounded-2xl border border-[#1e293b] p-4.5 shadow-sm">
          <div className="flex items-center justify-between mb-4 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">Neden bunu görüyorum?</span>
              <Sparkles size={15} className="text-blue-400" />
            </div>
            <Link to="/why" className="text-[11px] text-blue-400 hover:underline font-medium">Detaylar</Link>
          </div>

          <div className="space-y-3 text-xs">
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-300 font-medium"><div className="w-2 h-2 rounded-full bg-blue-500"></div> İlgi Alanı Eşleşmesi</span>
                 <span className="font-bold text-white">42%</span>
               </div>
               <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }}></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-300 font-medium"><div className="w-2 h-2 rounded-full bg-green-500"></div> Güncellik</span>
                 <span className="font-bold text-white">28%</span>
               </div>
               <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 rounded-full" style={{ width: '28%' }}></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-300 font-medium"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Sosyal Yakınlık</span>
                 <span className="font-bold text-white">15%</span>
               </div>
               <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-purple-500 rounded-full" style={{ width: '15%' }}></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between mb-1">
                 <span className="flex items-center gap-2 text-gray-300 font-medium"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Kalite ve Güvenlik</span>
                 <span className="font-bold text-white">15%</span>
               </div>
               <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-yellow-500 rounded-full" style={{ width: '15%' }}></div>
               </div>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 mt-3.5 leading-relaxed bg-[#161F30] p-2.5 rounded-xl border border-gray-800/80">
            Teknoloji ile ilgili içeriklere sık etkileşimde bulunduğun için bu gönderi önceliklendirildi.
          </p>

          <div className="flex gap-2 mt-3.5">
            <Link to="/why" className="flex-1 text-center bg-[#1e293b] hover:bg-gray-700 text-gray-200 py-2 rounded-xl text-xs font-semibold transition-colors">Daha az göster</Link>
            <Link to="/why" className="flex-1 text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl text-xs font-semibold transition-colors shadow-md shadow-blue-600/20">Daha fazla göster</Link>
          </div>
        </div>

        {/* Feed DNA */}
        <div className="bg-[#111827] rounded-2xl border border-[#1e293b] p-4.5 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-white text-sm">Feed DNA</span>
            <Link to="/dna" className="text-blue-400 text-xs hover:underline font-semibold cursor-pointer">Tümünü Gör</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <FeedDNAChart />

            <div className="flex-1 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="flex-1 text-gray-300">Teknoloji</span><span className="font-bold text-white">32%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="flex-1 text-gray-300">Eğlence</span><span className="font-bold text-white">24%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="flex-1 text-gray-300">Spor</span><span className="font-bold text-white">17%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500"></div><span className="flex-1 text-gray-300">Haber</span><span className="font-bold text-white">13%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500"></div><span className="flex-1 text-gray-300">Eğitim</span><span className="font-bold text-white">9%</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-500"></div><span className="flex-1 text-gray-300">Diğer</span><span className="font-bold text-white">5%</span></div>
            </div>
          </div>
        </div>

        {/* Aya Asistan */}
        <div className="bg-[#111827] rounded-2xl border border-[#1e293b] p-4.5 flex flex-col shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">Aya Asistan</span>
              <span className="bg-blue-500/20 text-blue-400 text-[10px] px-1.5 py-0.5 rounded font-bold border border-blue-500/30">BETA</span>
            </div>
            <Link to="/aya" className="text-xs text-blue-400 hover:underline font-medium">Genişlet</Link>
          </div>

          <div className="flex items-start gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 text-xs font-bold text-white shadow-sm">
               A
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Merhaba Ahmet! 👋</p>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">Bugün akışını nasıl optimize etmek istersin?</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            <Link to="/why" className="bg-[#1e293b] hover:bg-gray-700 text-gray-300 text-[10px] px-2.5 py-1 rounded-full transition-colors border border-gray-700">
              Neden bunu görüyorum?
            </Link>
            <Link to="/aya" className="bg-[#1e293b] hover:bg-gray-700 text-gray-300 text-[10px] px-2.5 py-1 rounded-full transition-colors border border-gray-700">
              Daha az negatif içerik
            </Link>
          </div>

          <Link to="/aya" className="relative mt-auto block">
            <div className="w-full bg-[#1e293b] border border-gray-700 hover:border-blue-500 rounded-xl px-3 py-2 text-xs text-gray-400 transition-colors flex items-center justify-between">
              <span>Aya'ya bir şey sor...</span>
              <Send size={13} className="text-blue-400" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
