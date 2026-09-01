import { useState } from 'react';
import { 
  ArrowLeft, Sparkles, MessageCircle, Heart, Share2, Bookmark, 
  Repeat2, Rocket, Eye, Hash, ExternalLink, Flame, Newspaper, 
  Cpu, Award, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Explore() {
  const [activeTab, setActiveTab] = useState<'Trendler' | 'Etiketler' | 'Haberler' | 'Teknoloji' | 'TEKNOFEST'>('Trendler');
  const [showExplanation, setShowExplanation] = useState(false);
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (id: string) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const newsItems = [
    {
      id: 1,
      source: 'Habertürk',
      badge: 'SON DAKİKA',
      time: '3dk önce',
      title: 'Yapay zeka inovasyon teşvik paketi Resmi Gazete\'de yayımlandı',
      summary: 'Sanayi ve Teknoloji Bakanlığı, yerli yapay zeka girişimlerine yönelik 1 milyar TL değerinde yeni hibe desteğini duyurdu.',
      author: 'Habertürk Teknoloji Masası',
      image: '/ai_chip.jpg',
    },
    {
      id: 2,
      source: 'A Haber',
      badge: 'GÜNDEM',
      time: '4dk önce',
      title: 'TEKNOFEST 2026 İnovasyon Yarışması rekor katılımla başladı',
      summary: 'İstanbul semalarında sergilenen yerli insansız hava araçları ve otonom sistemler ziyaretçilerden yoğun ilgi görüyor.',
      author: 'A Haber Canlı',
      image: '/teknofest.jpg',
    },
    {
      id: 3,
      source: 'TRT Haber',
      badge: 'BİLİM & TEKNOLOJİ',
      time: '5dk önce',
      title: 'İTÜ ve ASELSAN işbirliğiyle geliştirilen yeni insansı robot tanıtıldı',
      summary: 'Yüksek hareket kabiliyetine ve Türkçe doğal dil işleme motoruna sahip bionic robot laboratuvar testlerini başarıyla tamamladı.',
      author: 'TRT Bilim Servisi',
      image: '/robotics.jpg',
    },
    {
      id: 4,
      source: 'Sabah',
      badge: 'EKONOMİ',
      time: '8dk önce',
      title: 'Sosyal Medya İçerik Üreticileri için GVK 20/B vergi muafiyeti detaylandırıldı',
      summary: 'Dijital gelirlerde banka stopaj entegrasyonuyla beyanname verme yükümlülüğü kalktı, süreç tamamen otomatikleşti.',
      author: 'Sabah Ekonomi',
      image: '/ai_chip.jpg',
    },
    {
      id: 5,
      source: 'Yeniasır',
      badge: 'BÖLGE',
      time: '12dk önce',
      title: 'Ege Teknopark\'tan küresel yapay zeka ihracatı atağı',
      summary: 'İzmirli genç mühendislerin kurduğu derin öğrenme girişimi ilk uluslararası yatırım turunu kapattı.',
      author: 'Yeniasır Ege',
      image: '/robotics.jpg',
    },
  ];

  const tags = [
    { name: '#TEKNOFEST2026', count: '48.5K', category: 'Teknoloji & İnovasyon' },
    { name: '#YapayZeka', count: '33.9K', category: 'Bilim & Yazılım' },
    { name: '#MilliTeknoloji', count: '21.4K', category: 'Savunma & Havacılık' },
    { name: '#YerliÇip', count: '18.7K', category: 'Donanım & Mühendislik' },
    { name: '#Robotik2026', count: '14.2K', category: 'Otomasyon' },
    { name: '#FeedDNA', count: '11.8K', category: 'NSosyal Topluluk' },
    { name: '#Girişimcilik', count: '9.4K', category: 'Ekonomi' },
    { name: '#AyaAsistan', count: '7.6K', category: 'AI Rehber' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0B0F19] text-white overflow-hidden w-full">
      
      {/* Top Header Category Tabs matching Image 1 & 2 */}
      <div className="sticky top-0 z-20 bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#1e293b]">
        <div className="flex justify-center sm:justify-start gap-8 px-6 max-w-4xl mx-auto overflow-x-auto scrollbar-none">
          {(['Trendler', 'Etiketler', 'Haberler', 'Teknoloji', 'TEKNOFEST'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 text-sm font-semibold transition-all relative flex-shrink-0 cursor-pointer ${
                activeTab === tab 
                  ? 'text-blue-400' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-minimal p-4 sm:p-6 max-w-3xl mx-auto w-full">
        
        {/* Top Title */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="p-2 rounded-xl bg-[#111827] border border-[#1e293b] text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <h2 className="text-xl font-bold text-white">Keşfet · {activeTab}</h2>
        </div>

        {/* 1. TAB: TRENDLER (Visual Video / Reels Reel Feed matching Image 1) */}
        {activeTab === 'Trendler' && (
          <div className="space-y-6">
            
            {/* Viral / Trending Card matching Image 1 */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center font-bold text-sm text-white">
                  ÇD
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">Çetin Dalkıran</span>
                    <span className="text-gray-500 text-xs">@cdalkiran59 · 26dk</span>
                  </div>
                  <span className="text-xs text-purple-400 font-medium">Trend Video</span>
                </div>
              </div>

              {/* Video Player Card mockup matching Image 1 */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/10] sm:aspect-[16/10] flex items-center justify-center border border-[#1e293b] group">
                <div className="w-full h-full bg-gradient-to-br from-amber-950/20 via-slate-900 to-stone-900 flex flex-col items-center justify-center p-8 text-center">
                  <div className="p-4 bg-[#F5F0EB] text-[#8B1E0F] rounded-2xl max-w-xs shadow-2xl">
                    <p className="font-extrabold text-base mb-1">Sevgili EYLÜL</p>
                    <p className="text-xs font-semibold text-gray-800">Hiç bir beklentim yok. Kafana göre takıl.</p>
                    <div className="mt-3 flex justify-center">
                      <span className="text-3xl">☕</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  0:07
                </div>
              </div>

              {/* Interaction Bar matching Image 1 */}
              <div className="flex justify-between items-center mt-4 text-gray-400 pt-3 border-t border-gray-800/60 text-xs">
                <button className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <MessageCircle size={17} /> 1
                </button>
                <button className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
                  <Repeat2 size={17} /> 0
                </button>
                <button 
                  onClick={() => toggleLike('trend1')}
                  className={`flex items-center gap-1.5 transition-colors ${likedPosts['trend1'] ? 'text-red-500' : 'hover:text-red-400'}`}
                >
                  <Rocket size={17} /> 14
                </button>
                <span className="flex items-center gap-1 text-gray-500">
                  <Eye size={17} /> 54
                </span>
                <div className="flex items-center gap-3">
                  <button className="hover:text-yellow-400 transition-colors"><Bookmark size={17} /></button>
                  <button className="hover:text-blue-400 transition-colors"><Share2 size={17} /></button>
                </div>
              </div>
            </div>

            {/* AI Tech Card in Trending */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center">
                  TR
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">TEKNOFEST Resmi</span>
                    <span className="text-blue-400 text-xs">✓</span>
                    <span className="text-gray-500 text-xs">@teknofest · 45dk</span>
                  </div>
                  <span className="text-xs text-blue-400 font-medium">Geleceğin Teknolojisi</span>
                </div>
              </div>

              <p className="text-sm text-gray-200 mb-3">
                Milli teknoloji hamlesi kapsamında geliştirilen yeni nesil otonom drone filosu İstanbul semalarında ilk formasyon uçuşunu gerçekleştirdi! 🇹🇷✈️
              </p>

              <div className="rounded-2xl overflow-hidden border border-[#1e293b] aspect-video">
                <img src="/teknofest.jpg" alt="TEKNOFEST Drone" className="w-full h-full object-cover" />
              </div>

              <div className="flex justify-between items-center mt-4 text-gray-400 pt-3 border-t border-gray-800/60 text-xs">
                <button className="flex items-center gap-1.5 hover:text-blue-400"><MessageCircle size={17} /> 342</button>
                <button className="flex items-center gap-1.5 hover:text-green-400"><Repeat2 size={17} /> 812</button>
                <button className="flex items-center gap-1.5 text-red-500"><Heart size={17} fill="currentColor" /> 4.8K</button>
                <span className="flex items-center gap-1 text-gray-500"><Eye size={17} /> 24.6K</span>
              </div>
            </div>

          </div>
        )}

        {/* 2. TAB: HABERLER matching Image 2 */}
        {activeTab === 'Haberler' && (
          <div className="space-y-4">
            {newsItems.map((news) => (
              <div 
                key={news.id}
                className="bg-[#111827] border border-[#1e293b] hover:border-gray-700 rounded-2xl p-4 sm:p-5 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm group"
              >
                {/* News Thumbnail */}
                <div className="w-full sm:w-32 h-32 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800 border border-gray-700/60">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* News Body */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-bold text-xs text-white">{news.source}</span>
                    <span className="text-[10px] bg-red-500/20 text-red-400 font-bold px-1.5 py-0.2 rounded border border-red-500/30">
                      {news.badge}
                    </span>
                    <span className="text-xs text-gray-500">· {news.time}</span>
                  </div>

                  <h3 className="font-bold text-sm text-gray-100 group-hover:text-blue-400 transition-colors leading-snug mb-1.5">
                    {news.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-2">
                    {news.summary}
                  </p>

                  <span className="text-[11px] text-gray-500 font-medium">
                    Yazar: <strong className="text-gray-300">{news.author}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. TAB: ETIKETLER */}
        {activeTab === 'Etiketler' && (
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Gündemdeki Popüler Etiketler</h3>
            {tags.map((tag, i) => (
              <div 
                key={tag.name}
                className="bg-[#111827] border border-[#1e293b] hover:border-blue-500/40 rounded-2xl p-4 flex items-center justify-between transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                    #{i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">{tag.name}</h4>
                    <span className="text-xs text-gray-400">{tag.category}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-bold text-blue-400">{tag.count}</span>
                  <p className="text-[10px] text-gray-500">gönderi</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. TAB: TEKNOLOJI (AI generated imagery for chips and robots) */}
        {activeTab === 'Teknoloji' && (
          <div className="space-y-6">
            <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Yapay Zeka Çip Teknolojileri</h3>
                  <p className="text-xs text-gray-400">Kuantum Nöral İşlemci Mimarisi</p>
                </div>
              </div>

              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                8nm FinFET optik foton mimarisiyle geliştirilen yeni yerli yapay zeka çipi, LLM çıkarım hızını 14 kat artırırken güç tüketimini %60 azaltıyor.
              </p>

              <div className="rounded-2xl overflow-hidden border border-[#1e293b] mb-4">
                <img src="/ai_chip.jpg" alt="AI Chip" className="w-full h-full object-cover" />
              </div>

              {/* Explainable AI Layer Trigger */}
              <div className="bg-[#161F30] border border-blue-500/20 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
                  <Sparkles size={15} /> Bu gönderi %42 ilgi alanı eşleşmesiyle önerildi
                </div>
                <Link to="/why" className="text-xs text-blue-400 hover:underline font-semibold">İncele</Link>
              </div>
            </div>
          </div>
        )}

        {/* 5. TAB: TEKNOFEST */}
        {activeTab === 'TEKNOFEST' && (
          <div className="space-y-6">
            
            {/* Robotik Post */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">
                  TF
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">TEKNOFEST Robotik & Otonom Sistemler</h3>
                  <p className="text-xs text-gray-400">İTÜ & ASELSAN Ortak Projesi</p>
                </div>
              </div>

              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                Anadolu 2.0 İnsansı Robot Platformu, TEKNOFEST 2026'da genç araştırmacılarla birlikte sahada interaktif görevleri başarıyla icra etti.
              </p>

              <div className="rounded-2xl overflow-hidden border border-[#1e293b] mb-4">
                <img src="/robotics.jpg" alt="Robotics Innovation" className="w-full h-full object-cover" />
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-2 border-t border-gray-800">
                <span>Konum: <strong>Atatürk Havalimanı / İstanbul</strong></span>
                <span className="text-green-400 font-semibold">✓ Resmi Doğrulanmış Proje</span>
              </div>
            </div>

            {/* Aerospace Post */}
            <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                  ✈️
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Havacılık & Uzay Gösterisi</h3>
                  <p className="text-xs text-gray-400">Boğaziçi Hava Koridoru</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#1e293b]">
                <img src="/teknofest.jpg" alt="TEKNOFEST Aerospace" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
