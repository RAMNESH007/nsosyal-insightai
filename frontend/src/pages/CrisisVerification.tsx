import { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, ShieldAlert, ShieldCheck, Filter, Radio, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrisisVerification() {
  const [activeTab, setActiveTab] = useState<'all' | 'verified' | 'unverified' | 'suspicious'>('all');

  const items = [
    {
      id: 1,
      type: 'verified',
      badge: 'Doğrulanmış',
      badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      icon: ShieldCheck,
      iconColor: 'text-green-400',
      source: 'AFAD',
      sourceDesc: 'Resmi Kurum · 10 dk önce',
      title: 'AFAD resmi durum açıklaması yayınladı',
      content: 'Bölgedeki yangın söndürme ve soğutma çalışmaları 4 helikopter ve 12 arazöz ile koordineli şekilde devam ediyor. Can kaybı bulunmamaktadır.',
      confidence: 100,
    },
    {
      id: 2,
      type: 'verified',
      badge: 'Doğrulanmış',
      badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      icon: ShieldCheck,
      iconColor: 'text-green-400',
      source: 'Türk Kızılay',
      sourceDesc: 'Yardım Kuruluşu · 15 dk önce',
      title: 'Afet bölgesinde yardım koordinasyonu sağlandı',
      content: 'Acil ihtiyaç malzemeleri ve mobil aşevi ekipleri bölgeye intikal ettirildi. Resmi bağış hesapları dışında paylaşılan linklere itibar etmeyiniz.',
      confidence: 98,
    },
    {
      id: 3,
      type: 'suspicious',
      badge: 'Şüpheli / Dezenformasyon',
      badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      icon: AlertTriangle,
      iconColor: 'text-yellow-400',
      source: 'Doğrulama Ekibi & AI Denetimi',
      sourceDesc: '20 dk önce',
      title: 'Eski ve sahte yangın görüntüsü tekrar dolaşıma sokuldu',
      content: 'Sosyal medyada yayılan alevli video 2021 yılındaki Yunanistan yangınına aittir. Mevcut olayla ilgisi olmadığı teyit edildi.',
      confidence: 94,
    },
    {
      id: 4,
      type: 'unverified',
      badge: 'Doğrulama Bekliyor',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      icon: Clock,
      iconColor: 'text-blue-400',
      source: 'Anonim Kullanıcı İhbarı',
      sourceDesc: '5 dk önce',
      title: 'Merkez ilçede yolun kapandığı iddia ediliyor',
      content: 'Yerel ekiplerle irtibat kuruluyor. Emniyet güçlerinden henüz teyit gelmedi.',
      confidence: 42,
    },
  ];

  const filteredItems = items.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-5xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Radio className="text-red-500 animate-pulse" size={24} /> Kriz Doğrulama Modu
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Olağanüstü durumlarda doğrulanmamış dezenformasyonu filtreleyen ve resmi kaynakları öne çıkaran kriz katmanı.
          </p>
        </div>

        <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/40 px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          Kriz Modu Aktif
        </span>
      </div>

      {/* Emergency Red Banner */}
      <div className="bg-red-950/30 border border-red-500/40 rounded-3xl p-6 mb-8 flex items-start gap-4 shadow-lg shadow-red-950/20">
        <div className="p-3 bg-red-500/20 rounded-2xl text-red-400 flex-shrink-0">
          <ShieldAlert size={26} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-red-400 font-bold text-base">Acil Durum Bilgi Doğrulama Devrede</h3>
          </div>
          <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">
            Sistemimiz resmi makamlar (AFAD, Kızılay, Valilikler) ile entegre çalışmaktadır. Doğrulanmamış panik yaratıcı gönderiler otomatik olarak uyarı etiketiyle işaretlenir veya akıştan kısıtlanır.
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs text-red-300 font-medium">
            <span>Doğrulama Güven Skoru: <strong>%87</strong></span>
            <span>·</span>
            <span>Filtrelenen Sahte İçerik: <strong>142 Gönderi</strong></span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
        {[
          { id: 'all', label: 'Tüm Bilgiler' },
          { id: 'verified', label: '✓ Doğrulanmış Kaynaklar' },
          { id: 'suspicious', label: '⚠ Şüpheli & Yalanlanan' },
          { id: 'unverified', label: '⏳ Teyit Bekleyenler' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex-shrink-0 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-[#111827] text-gray-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Verified Content Feed */}
      <div className="space-y-4 mb-8">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.id}
              className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 sm:p-6 hover:border-gray-700 transition-colors shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Icon size={18} className={item.iconColor} />
                  <span className="font-bold text-white text-sm">{item.source}</span>
                  <span className="text-xs text-gray-500">· {item.sourceDesc}</span>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h4 className="text-base font-semibold text-white mb-1.5">{item.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{item.content}</p>

              <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-400">
                <span>AI Teyit Güvenilirlik Oranı: <strong className="text-white">%{item.confidence}</strong></span>
                <button className="text-blue-400 hover:underline font-medium">Resmi Kaynağı İncele</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action CTA */}
      <div className="bg-[#111827] border border-[#1e293b] p-6 rounded-3xl text-center">
        <h4 className="font-semibold text-white text-sm">Şüpheli bir bilgi veya sahte görüntü mü gördünüz?</h4>
        <p className="text-xs text-gray-400 mt-1 mb-4">Topluluğu ve doğrulama motorunu anında bilgilendirebilirsiniz.</p>
        <button className="bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all shadow-md shadow-red-600/30">
          Şüpheli İçerik Bildir
        </button>
      </div>

    </div>
  );
}
