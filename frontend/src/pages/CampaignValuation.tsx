import { useState } from 'react';
import { Award, TrendingUp, CheckCircle, ShieldCheck, Sparkles, DollarSign, ArrowLeft, BarChart3, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CampaignValuation() {
  const [selectedRange, setSelectedRange] = useState('standard');

  const factors = [
    { label: 'Kitle Kalitesi & Demografi', percent: 31, color: 'bg-blue-500', desc: 'Takipçilerinizin %86\'sı organik, aktif ve teknolojiye ilgi duyan gerçek kullanıcılardan oluşuyor.' },
    { label: 'Etkileşim Kalitesi', percent: 27, color: 'bg-green-500', desc: 'Gönderilerinizin ortalama kaydetme, yorum ve paylaşım oranı sektör ortalamasının 2.4 katı.' },
    { label: 'İçerik Kalitesi & Güven', percent: 22, color: 'bg-purple-500', desc: 'Toksisite içermeyen, yüksek çözünürlüklü ve özgün anlatım üslubu.' },
    { label: 'Marka & Kategori Uyumu', percent: 20, color: 'bg-yellow-500', desc: 'TeknoMark ürün portföyü ile kanalınızın ana teması %94 uyumlu.' },
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-5xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/brand-matches" className="p-2 rounded-xl bg-[#111827] border border-[#1e293b] text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Award className="text-blue-400" size={24} /> Kampanya Değerlendirmesi
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Yapay zeka tabanlı adil, şeffaf ve analitik sponsorluk değerleme motoru.
          </p>
        </div>
      </div>

      {/* Main Valuation Highlight Card */}
      <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <DollarSign size={160} className="text-blue-500" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                T
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">TeknoMark Teknoloji</h3>
                <p className="text-xs text-gray-400">Yeni Akıllı Saat Lansmanı Kampanyası</p>
              </div>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CheckCircle size={14} /> AI Onaylı Piyasa Değerlemesi
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4 border-t border-gray-800">
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tahmini Kampanya Değeri</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                ₺18.000 - ₺25.000
              </div>
              <p className="text-xs text-gray-400 mt-2">
                1 Reels Videosu + 2 Story paylaşımı için önerilen taban ve tavan anlaşma tutarı.
              </p>
            </div>

            <div className="bg-[#161F30] p-5 rounded-2xl border border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-300">Model Güven Skoru</span>
                <span className="text-sm font-bold text-green-400">%82 Yüksek Güven</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ width: '82%' }}></div>
              </div>
              <p className="text-[11px] text-gray-400">
                Piyasadaki son 30 günlük 450+ benzer sponsorluk işlemi baz alınarak hesaplanmıştır.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Factor Breakdown */}
      <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-8 mb-8">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 className="text-blue-400" size={20} /> Değer Oluşturan Ana Faktörler
        </h3>

        <div className="space-y-5">
          {factors.map((factor, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-gray-200">{factor.label}</span>
                <span className="font-bold text-white">%{factor.percent}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className={`h-full ${factor.color} rounded-full`} style={{ width: `${factor.percent}%` }}></div>
              </div>
              <p className="text-xs text-gray-400">{factor.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-[#161F30] rounded-2xl border border-blue-500/20 text-xs text-gray-300 flex items-start gap-3">
          <Sparkles className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
          <div>
            <strong className="text-white">Neden Bu Değer?</strong>
            <p className="mt-0.5 leading-relaxed">
              Kitlenizin teknoloji ilgisi yüksek ve kampanyanın hedef kitlesiyle benzerlik oranı güçlü. İçerikleriniz bot takipçiden arındırılmış yüksek etkileşim kalitesine sahip olduğu için fiyat piyasa tabanının %25 üzerindedir.
            </p>
          </div>
        </div>
      </div>

      {/* Negotiation & Actions CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111827] border border-[#1e293b] p-6 rounded-3xl">
        <div>
          <h4 className="font-semibold text-white text-sm">Bu teklifi markaya iletmek ister misiniz?</h4>
          <p className="text-xs text-gray-400 mt-0.5">Sözleşme ve vergi uyumluluğu otomatik hazırlanır.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30">
            Kampanya Detaylarını Görüntüle
          </button>
        </div>
      </div>

    </div>
  );
}
