import { useState } from 'react';
import { 
  DollarSign, PieChart, TrendingUp, Award, Calendar, 
  CreditCard, ShieldCheck, FileText, ArrowUpRight, HelpCircle, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RevenueCenter() {
  const [activeTab, setActiveTab] = useState<'overview' | 'payouts' | 'compliance'>('overview');

  const revenueItems = [
    { label: 'Reklam Gelirleri', amount: 18400, percent: 43, color: 'bg-blue-500', hex: '#3B82F6' },
    { label: 'Marka İşbirlikleri', amount: 15000, percent: 35, color: 'bg-purple-500', hex: '#A855F7' },
    { label: 'Abonelikler & Rozetler', amount: 7200, percent: 17, color: 'bg-emerald-500', hex: '#10B981' },
    { label: 'Diğer / Bahşişler', amount: 2250, percent: 5, color: 'bg-yellow-500', hex: '#F59E0B' },
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-6xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <DollarSign className="text-green-400" size={26} /> Gelir Merkezi & Adil Paylaşım (Fair Share)
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Şeffaf reklam gelirleri, marka anlaşmaları ve doğruluk bonusu kazançlarınız.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 bg-[#111827] px-3 py-2 rounded-xl border border-[#1e293b]">
            Ağustos 2026
          </span>
          <button className="bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-green-600/30">
            Hesaba Aktar
          </button>
        </div>
      </div>

      {/* Top 3 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Total Monthly Earnings */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Bu Ayki Toplam Gelir</span>
              <span className="text-xs text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                <TrendingUp size={12} /> +15% geçen aya göre
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              ₺42,850
            </div>
          </div>
          <p className="text-[11px] text-gray-500 mt-4 pt-3 border-t border-gray-800">
            Otomatik vergi kesintisi öncesi brüt gelir.
          </p>
        </div>

        {/* Fair Share Bonus */}
        <div className="bg-[#111827] border border-blue-500/30 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#111827] to-blue-950/20">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Award size={14} /> Fair Share Bonusu
              </span>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">AKTİF</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mt-2">
              +₺3,450
            </div>
          </div>
          <p className="text-[11px] text-gray-400 mt-4 pt-3 border-t border-gray-800">
            Yüksek doğruluk ve güvenilirlik puanınız nedeniyle bu ay kazandığınız ek ödül.
          </p>
        </div>

        {/* Payout Schedule */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Sonraki Ödeme Tarihi</span>
              <Calendar size={15} className="text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-white mt-1">
              15 Eylül 2026
            </div>
            <p className="text-xs text-gray-400 mt-1">Bekleyen Ödeme: <strong className="text-white">₺8,750</strong></p>
          </div>
          <div className="text-[11px] text-gray-500 mt-4 pt-3 border-t border-gray-800 flex justify-between">
            <span>2026 Yıllık Toplam:</span>
            <span className="text-white font-semibold">₺287,600</span>
          </div>
        </div>

      </div>

      {/* Revenue Breakdown Donut & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        
        {/* Visual Distribution */}
        <div className="lg:col-span-6 bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white text-base mb-6 flex items-center gap-2">
              <PieChart className="text-blue-400" size={18} /> Gelir Dağılımı (Kategori Bazlı)
            </h3>

            {/* Donut Simulation */}
            <div className="flex items-center justify-center my-4">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Item 1 - Reklam (43%) */}
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="43 100" strokeDashoffset="0" />
                  {/* Item 2 - Sponsorluk (35%) */}
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#A855F7" strokeWidth="4" strokeDasharray="35 100" strokeDashoffset="-43" />
                  {/* Item 3 - Abonelik (17%) */}
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="17 100" strokeDashoffset="-78" />
                  {/* Item 4 - Diger (5%) */}
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="5 100" strokeDashoffset="-95" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-white">₺42.8K</span>
                  <span className="text-[10px] text-gray-400">TOPLAM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-800">
            {revenueItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.hex }}></span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-300 truncate">{item.label}</p>
                  <p className="text-[11px] font-bold text-white">₺{item.amount.toLocaleString()} (%{item.percent})</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Assistant & Next Best Action */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Turkey Tax Compliance Guide (20/B) */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <ShieldCheck className="text-green-400" size={18} /> Vergi ve Yasal Uyum Asistanı
              </h3>
              <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded font-semibold border border-green-500/20">
                GVK 20/B Uyumlu
              </span>
            </div>
            
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Türkiye Sosyal İçerik Üreticiliği İstisnası kapsamında gelirleriniz otomatik olarak banka stopajı (%15) ile vergilendirilir.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#161F30] p-2.5 rounded-xl">
                <CheckCircle2 size={15} className="text-green-400" />
                <span>İstisna belgesi onaylandı ve sisteme tanımlandı.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#161F30] p-2.5 rounded-xl">
                <CheckCircle2 size={15} className="text-green-400" />
                <span>Stopaj kesintisi banka entegrasyonuyla otomatik yapılır.</span>
              </div>
            </div>
          </div>

          {/* Next Best Action Card (AI Suggestion) */}
          <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-3xl p-6">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              <TrendingUp size={14} /> Yapay Zeka Sonraki En İyi Hamle
            </div>
            <h4 className="text-white font-bold text-sm">Teknoloji inceleme videosu yayınlayın</h4>
            <p className="text-xs text-gray-300 mt-1">
              En iyi paylaşım saati: <strong>Bugün 18:00</strong>. Bu paylaşımla tahmini potansiyel erişim artışı: <strong className="text-green-400">+%32</strong>.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
