import { useState } from 'react';
import { 
  TrendingUp, Sparkles, Award, Users, Eye, BarChart2, PlusCircle, 
  DollarSign, Briefcase, ArrowUpRight, CheckCircle2, Shield 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CreatorLens() {
  const [activeTab, setActiveTab] = useState<'overview' | 'score' | 'insights'>('overview');

  const scoreComponents = [
    { label: 'Kitle Kalitesi', score: 86, color: 'bg-blue-500', desc: 'Organik takipçi oranı ve sahte hesap filtreleme skoru.' },
    { label: 'Etkileşim Kalitesi', score: 78, color: 'bg-green-500', desc: 'Kaydetme, paylaşım ve nitelikli yorum yoğunluğu.' },
    { label: 'İçerik Kalitesi', score: 91, color: 'bg-purple-500', desc: 'Özgünlük, görüntüleme süresi ve moderasyon güveni.' },
    { label: 'Marka Uyumu', score: 75, color: 'bg-yellow-500', desc: 'Teknoloji ve eğitim sektörüyle sektörel örtüşme.' },
    { label: 'Kitle Tutarlılığı', score: 80, color: 'bg-cyan-500', desc: 'Zaman içindeki düzenli etkileşim istikrarı.' },
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-[#0B0F19] p-6 lg:p-10 max-w-7xl mx-auto w-full">
      
      {/* Top Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Sparkles className="text-blue-400" size={24} /> Creator Dashboard & Lens
            </h1>
            <span className="text-[10px] bg-purple-500/20 text-purple-400 font-bold px-2 py-0.5 rounded-full border border-purple-500/30">PRO</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">İçeriğinizin ekonomik potansiyelini, kitle kalitesini ve sponsorluk değerini keşfedin.</p>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            to="/brand-matches"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/30"
          >
            <Briefcase size={15} /> Marka Fırsatları
          </Link>
          <span className="text-xs text-gray-400 bg-[#111827] px-3 py-2 rounded-xl border border-[#1e293b]">
            Son 30 Gün
          </span>
        </div>
      </div>

      {/* Top 4 Key Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        
        {/* Creator Score Quick Card */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-gray-400 font-medium">Creator Ekonomik Skoru</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-extrabold text-white">81</span>
              <span className="text-xs text-gray-500">/100</span>
            </div>
            <span className="text-[11px] text-green-400 font-semibold flex items-center gap-1 mt-1">
              <TrendingUp size={12} /> Yüksek Performans
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
            <Award size={24} />
          </div>
        </div>

        {/* Followers */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-gray-400 font-medium">Toplam Takipçi</p>
            <p className="text-3xl font-extrabold text-white mt-1">128K</p>
            <span className="text-[11px] text-green-400 font-semibold flex items-center gap-1 mt-1">
              <TrendingUp size={12} /> +12% bu ay
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
            <Users size={24} />
          </div>
        </div>

        {/* Impressions */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-gray-400 font-medium">Toplam Görüntülenme</p>
            <p className="text-3xl font-extrabold text-white mt-1">4.2M</p>
            <span className="text-[11px] text-green-400 font-semibold flex items-center gap-1 mt-1">
              <TrendingUp size={12} /> +18% artış
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
            <Eye size={24} />
          </div>
        </div>

        {/* Engagement Rate */}
        <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-gray-400 font-medium">Etkileşim Oranı</p>
            <p className="text-3xl font-extrabold text-white mt-1">%8.7</p>
            <span className="text-[11px] text-green-400 font-semibold flex items-center gap-1 mt-1">
              <TrendingUp size={12} /> Sektör ort. x2.1
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold">
            <BarChart2 size={24} />
          </div>
        </div>

      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        
        {/* Creator Lens Gauge & Breakdown */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-white text-base">Creator Ekonomik Skoru</h3>
              <span className="text-xs bg-green-500/20 text-green-400 px-2.5 py-1 rounded-full font-bold">
                İyi Bir Performans! 🚀
              </span>
            </div>

            {/* Circular SVG Gauge */}
            <div className="flex items-center justify-center my-4">
              <div className="relative w-36 h-36">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-800"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                  />
                  <path
                    className="text-blue-500"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeDasharray="81, 100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold text-white tracking-tight">81</span>
                  <span className="text-[11px] text-gray-400 font-semibold">/ 100 PUAN</span>
                </div>
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-3.5 mt-6">
              {scoreComponents.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300 font-medium">{item.label}</span>
                    <span className="font-bold text-white">{item.score}/100</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center mt-6 pt-4 border-t border-gray-800">
            Bu skor yapay zeka modelinin organik etkileşim ve güvenilirlik tahminidir.
          </p>
        </div>

        {/* 30-Day Trend Chart & Quick Actions */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Performance Chart */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-white text-base">Performans (Son 30 Gün)</h3>
                <p className="text-xs text-gray-400">Görüntülenme ve etkileşim korelasyonu</p>
              </div>
              <div className="flex gap-4">
                <span className="text-xs text-blue-400 flex items-center gap-1.5 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div> Görüntülenme
                </span>
                <span className="text-xs text-purple-400 flex items-center gap-1.5 font-medium">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div> Etkileşim
                </span>
              </div>
            </div>

            {/* Line SVG Visualization */}
            <div className="h-44 w-full relative my-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                {/* Grid Lines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="#1e293b" strokeDasharray="4,4" />
                <line x1="0" y1="60" x2="400" y2="60" stroke="#1e293b" strokeDasharray="4,4" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#1e293b" strokeDasharray="4,4" />

                {/* Line 1 (Impressions - Blue) */}
                <path
                  d="M 0 90 Q 70 65, 130 75 T 260 30 T 340 45 T 400 15"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Line 2 (Engagement - Purple) */}
                <path
                  d="M 0 105 Q 70 95, 130 90 T 260 60 T 340 70 T 400 45"
                  fill="none"
                  stroke="#A855F7"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex justify-between text-[11px] text-gray-500 pt-3 border-t border-gray-800">
              <span>1 Ağu</span>
              <span>8 Ağu</span>
              <span>15 Ağu</span>
              <span>22 Ağu</span>
              <span>30 Ağu</span>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-5">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Hızlı İşlemler</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Link to="/revenue" className="flex flex-col items-center gap-2 p-3 bg-[#161F30] hover:bg-blue-600/20 border border-gray-800 rounded-2xl transition-colors text-center group">
                <DollarSign size={18} className="text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">Gelir Raporu</span>
              </Link>

              <Link to="/brand-matches" className="flex flex-col items-center gap-2 p-3 bg-[#161F30] hover:bg-purple-600/20 border border-gray-800 rounded-2xl transition-colors text-center group">
                <Briefcase size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">Yeni İşbirliği</span>
              </Link>

              <Link to="/campaign-valuation" className="flex flex-col items-center gap-2 p-3 bg-[#161F30] hover:bg-blue-600/20 border border-gray-800 rounded-2xl transition-colors text-center group">
                <Award size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">Değerleme</span>
              </Link>

              <Link to="/settings" className="flex flex-col items-center gap-2 p-3 bg-[#161F30] hover:bg-gray-700/40 border border-gray-800 rounded-2xl transition-colors text-center group">
                <Sparkles size={18} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">AI Ayarları</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
