import { useState } from 'react';
import { Sparkles, ThumbsUp, ThumbsDown, Sliders, ShieldCheck, Clock, Users, Flame, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyAmISeeingThis() {
  const [feedbackGiven, setFeedbackGiven] = useState<'more' | 'less' | null>(null);

  const factors = [
    {
      title: 'İlgi Alanı Eşleşmesi',
      percent: 42,
      color: 'bg-blue-500',
      icon: Flame,
      desc: 'Teknoloji, yapay zeka ve yazılım konularındaki yüksek etkileşim geçmişiniz nedeniyle bu içerik en üstte yer aldı.',
    },
    {
      title: 'Güncellik (Freshness)',
      percent: 28,
      color: 'bg-green-500',
      icon: Clock,
      desc: 'İçerik son 2 saat içinde paylaşıldı ve yüksek anlık okunma oranına sahip.',
    },
    {
      title: 'Sosyal Yakınlık (Social Proximity)',
      percent: 15,
      color: 'bg-purple-500',
      icon: Users,
      desc: 'Takip ettiğiniz 3 kişi bu gönderiyi beğendi ve kaydetti.',
    },
    {
      title: 'Kalite ve Güvenlik Skoru',
      percent: 15,
      color: 'bg-yellow-500',
      icon: ShieldCheck,
      desc: 'İçerik moderasyon motorundan %99.4 güvenilirlik ve sıfır toksisite puanı aldı.',
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-4xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="p-2 rounded-xl bg-[#111827] border border-[#1e293b] text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Sparkles className="text-blue-400" size={24} /> Neden Bunu Görüyorum?
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Yapay zeka öneri motorumuzun bu gönderiyi akışınızda gösterme gerekçeleri.
          </p>
        </div>
      </div>

      {/* Target Post Preview Card */}
      <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 mb-8 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center">
            TG
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">Teknoloji Gündemi</h3>
            <p className="text-xs text-gray-400">@teknolojigundemi · 2 saat önce</p>
          </div>
        </div>
        <p className="text-sm text-gray-200">
          Yapay zeka destekli yeni çipler, mobil cihazlarda devrim yaratacak. Yeni mimari enerji tasarrufunu %40 artırıyor.
        </p>
        <div className="mt-3 flex gap-2">
          <span className="text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">#teknoloji</span>
          <span className="text-xs text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md">#yapayzeka</span>
        </div>
      </div>

      {/* Factors Breakdown */}
      <div className="space-y-4 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Ağırlıklı Sıralama Faktörleri</h2>
        
        {factors.map((factor, i) => {
          const Icon = factor.icon;
          return (
            <div key={i} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 hover:border-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${factor.color}/10 text-white`}>
                    <Icon size={18} className={factor.color.replace('bg-', 'text-')} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{factor.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{factor.desc}</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-white flex-shrink-0 ml-4">%{factor.percent}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className={`h-full ${factor.color} rounded-full`} style={{ width: `${factor.percent}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feedback & Actions */}
      <div className="bg-[#161F30] border border-blue-500/30 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white text-sm">Bu öneri sizin için doğru muydu?</h3>
          <p className="text-xs text-gray-400 mt-1">Geri bildiriminiz bir sonraki akışınızı anında optimize eder.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button 
            onClick={() => setFeedbackGiven('less')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              feedbackGiven === 'less' 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' 
                : 'bg-[#1F2937] hover:bg-gray-700 text-gray-200 border border-gray-700'
            }`}
          >
            <ThumbsDown size={15} /> Daha Az Göster
          </button>
          <button 
            onClick={() => setFeedbackGiven('more')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              feedbackGiven === 'more' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-[#1F2937] hover:bg-gray-700 text-gray-200 border border-gray-700'
            }`}
          >
            <ThumbsUp size={15} /> Daha Fazla Göster
          </button>
        </div>
      </div>

      {/* Direct Link to Settings */}
      <div className="text-center">
        <Link 
          to="/settings" 
          className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 font-medium hover:underline"
        >
          <Sliders size={14} /> Algoritma ayarlarınızı doğrudan değiştirmek için tıklayın
        </Link>
      </div>

    </div>
  );
}
