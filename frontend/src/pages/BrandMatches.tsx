import { useState } from 'react';
import { Briefcase, CheckCircle, ArrowUpRight, Search, Sparkles, Filter, Building2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandMatches() {
  const [filter, setFilter] = useState('all');

  const brands = [
    {
      id: 1,
      name: 'TeknoMark Teknoloji',
      category: 'Teknoloji & Akıllı Cihazlar',
      matchScore: 94,
      logoBg: 'bg-blue-600',
      logoText: 'T',
      campaign: 'Yeni Nesil Akıllı Saat & Yapay Zeka Çip Lansmanı',
      budget: '₺18.000 - ₺25.000',
      reasons: [
        'Teknoloji odaklı takipçi kitleniz %86 oranında örtüşüyor.',
        '18-24 yaş demografik uyumu çok yüksek.',
        'İçerik tonunuz ve kalite skorunuz markaya kusursuz uygun.',
      ],
      tags: ['Story + Reels', 'Ürün İnceleme', 'Uzun Vadeli Sponsorluk'],
    },
    {
      id: 2,
      name: 'EduPlatform Eğitim',
      category: 'Eğitim & Online Kurslar',
      matchScore: 88,
      logoBg: 'bg-purple-600',
      logoText: 'E',
      campaign: 'Geleceğin Yazılımcıları Bootcamp Duyurusu',
      budget: '₺12.000 - ₺16.000',
      reasons: [
        'Eğitim ve bilim içeriklerinizin etkileşim kalitesi %91.',
        'Hedef kitle bilgi odaklı içeriklere yüksek reaksiyon veriyor.',
        'Topluluk güven skorunuz sektör ortalamasının üzerinde.',
      ],
      tags: ['Video Entegrasyonu', 'Özel İndirim Kodu'],
    },
    {
      id: 3,
      name: 'GameWorld / GameForce',
      category: 'Oyun & Donanım',
      matchScore: 82,
      logoBg: 'bg-emerald-600',
      logoText: 'G',
      campaign: 'Yeni E-Spor Turnuvası & Mekanik Klavye Testi',
      budget: '₺10.000 - ₺14.000',
      reasons: [
        'Oyun ve eğlence içeriklerinizle %82 oranında etkileşim var.',
        'Genç kitle erişiminiz yüksek.',
      ],
      tags: ['Canlı Yayın Konukluğu', 'Post Paylaşımı'],
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-6xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Briefcase className="text-purple-400" size={24} /> Sizin İçin AI ile Eşleşen Markalar
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Profilinize, içerik kalitenize ve kitle demografinize en uygun yapay zeka onaylı sponsorluk fırsatları.
          </p>
        </div>
        
        <Link 
          to="/campaign-valuation" 
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-purple-600/30"
        >
          <Sparkles size={15} /> Kampanya Değerini Hesapla
        </Link>
      </div>

      {/* Stats Quick Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center font-bold">
            3
          </div>
          <div>
            <p className="text-xs text-gray-400">Aktif Eşleşen Kampanya</p>
            <p className="text-lg font-bold text-white">₺40.000 - ₺55.000</p>
          </div>
        </div>

        <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
            %94
          </div>
          <div>
            <p className="text-xs text-gray-400">En Yüksek Eşleşme Oranı</p>
            <p className="text-sm font-semibold text-white">TeknoMark Teknoloji</p>
          </div>
        </div>

        <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
            81
          </div>
          <div>
            <p className="text-xs text-gray-400">Creator Ekonomik Skoru</p>
            <p className="text-sm font-semibold text-green-400">Yüksek Güvenilirlik</p>
          </div>
        </div>
      </div>

      {/* Brand Match Cards */}
      <div className="space-y-6 mb-10">
        {brands.map((brand) => (
          <div 
            key={brand.id} 
            className="bg-[#111827] border border-[#1e293b] hover:border-purple-500/40 rounded-3xl p-6 sm:p-7 transition-all shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-gray-800/80">
              
              {/* Brand Header & Info */}
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl ${brand.logoBg} flex items-center justify-center text-white font-extrabold text-2xl shadow-lg flex-shrink-0`}>
                  {brand.logoText}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2.5 py-0.5 rounded-full font-medium">
                      {brand.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium mt-1">{brand.campaign}</p>
                  <p className="text-xs text-purple-400 font-semibold mt-1">Tahmini Bütçe: {brand.budget}</p>
                </div>
              </div>

              {/* Match Score Badge & Actions */}
              <div className="flex items-center justify-between lg:justify-end gap-5">
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold text-green-400">%{brand.matchScore}</div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">AI Uyumluluk</p>
                </div>
                <Link 
                  to="/campaign-valuation" 
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center gap-1.5"
                >
                  Detayları Gör <ChevronRight size={15} />
                </Link>
              </div>
            </div>

            {/* Why This Match? */}
            <div className="mt-5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles size={13} className="text-purple-400" /> Neden Bu Eşleşme?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {brand.reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#161F30] p-3 rounded-xl border border-gray-800/80 text-xs text-gray-300">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-gray-800/50">
              {brand.tags.map((tag) => (
                <span key={tag} className="text-[11px] text-gray-400 bg-gray-800/60 px-3 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Discover More CTA */}
      <div className="text-center">
        <button className="bg-[#1e293b] hover:bg-[#283548] text-gray-200 border border-gray-700 font-semibold px-6 py-3 rounded-xl text-xs transition-colors">
          Daha Fazla Marka ve Kampanya Yükle
        </button>
      </div>

    </div>
  );
}
