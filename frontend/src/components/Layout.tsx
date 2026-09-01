import { type ReactNode, useState } from 'react';
import { 
  Home, Bell, Mail, Bookmark, List, Hash, Radio, Activity, Settings, 
  PlusCircle, Search, Sparkles, MessageSquare, DollarSign, Award, 
  Briefcase, TrendingUp, HelpCircle, User, LogOut, Menu, X 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ 
    to, 
    icon: Icon, 
    label, 
    badge,
    highlight 
  }: { 
    to: string; 
    icon: any; 
    label: string; 
    badge?: string | number;
    highlight?: boolean;
  }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        onClick={() => setMobileMenuOpen(false)}
        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
          isActive 
            ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30 shadow-sm shadow-blue-500/10' 
            : 'text-gray-400 hover:bg-[#1e293b]/60 hover:text-gray-200'
        } ${highlight ? 'text-blue-300' : ''}`}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <Icon size={19} className={`flex-shrink-0 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
          <span className="text-sm truncate">{label}</span>
        </div>
        {badge && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
            {badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <div className="flex h-screen w-full bg-[#0B0F19] text-white overflow-hidden font-sans">
      
      {/* Mobile Top Navigation Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#1e293b] z-50 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/n-logo.png" alt="NSosyal" className="w-7 h-7 object-contain" />
          <span className="text-lg font-bold tracking-wide">NSOSYAL</span>
          <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/30">INSIGHT</span>
        </Link>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Left Sidebar (Desktop + Mobile overlay) */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 xl:w-72 border-r border-[#1e293b] flex flex-col flex-shrink-0 
        bg-[#0B0F19] overflow-y-auto scrollbar-none select-none transition-transform duration-200 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* App Branding */}
        <div className="p-4 pt-5 pb-3 sticky top-0 bg-[#0B0F19]/95 backdrop-blur z-10 flex items-center justify-between border-b border-[#1e293b]/40">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/n-logo.png" 
              alt="NSosyal Logo" 
              className="w-8 h-8 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-transform hover:scale-105" 
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-wide">NSOSYAL</span>
                <span className="bg-blue-500/20 text-blue-400 text-[10px] px-1.5 py-0.5 rounded font-bold border border-blue-500/30">BETA</span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium tracking-wider">InsightAI Platform</p>
            </div>
          </Link>
        </div>
        
        {/* Auth Action Buttons matching Image 1 */}
        <div className="px-3 pt-3 pb-1 space-y-2">
          <Link
            to="/login"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-2xl transition-all shadow-md shadow-blue-600/20 text-center block text-sm active:scale-[0.98]"
          >
            Giriş Yap
          </Link>
          <Link
            to="/register"
            className="w-full bg-[#161F30] hover:bg-[#1e293b] text-gray-200 border border-gray-700/80 font-semibold py-2.5 rounded-2xl transition-colors text-center block text-sm active:scale-[0.98]"
          >
            Kayıt Ol
          </Link>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 px-3 py-3 space-y-6">
          
          {/* Main Navigation */}
          <div>
            <h3 className="px-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Ana Menü</h3>
            <nav className="space-y-1">
              <NavItem to="/" icon={Home} label="Ana Sayfa" />
              <NavItem to="/explore" icon={Search} label="Keşfet" />
              <NavItem to="/notifications" icon={Bell} label="Bildirimler" badge={3} />
              <NavItem to="/messages" icon={Mail} label="Mesajlar" />
              <NavItem to="/bookmarks" icon={Bookmark} label="Kaydedilenler" />
              <NavItem to="/lists" icon={List} label="Listeler" />
            </nav>
          </div>

          {/* AI Trust Layer / Viewer Mode */}
          <div>
            <div className="px-3 flex items-center justify-between mb-2">
              <h3 className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={13} /> Yapay Zeka (AI)
              </h3>
              <span className="text-[9px] bg-blue-900/40 text-blue-300 px-1.5 py-0.2 rounded border border-blue-500/30">VIEWER</span>
            </div>
            <nav className="space-y-1">
              <NavItem to="/why" icon={HelpCircle} label="Neden Bunu Görüyorum?" />
              <NavItem to="/dna" icon={Hash} label="Feed DNA Evreni" />
              <NavItem to="/aya" icon={MessageSquare} label="Aya Asistan" />
              <NavItem to="/pacing" icon={Activity} label="Duygusal Akış (Pacing)" />
              <NavItem to="/crisis" icon={Radio} label="Kriz Doğrulama Modu" badge="Canlı" />
            </nav>
          </div>

          {/* Creator Mode */}
          <div>
            <div className="px-3 flex items-center justify-between mb-2">
              <h3 className="text-[11px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award size={13} /> Creator Modu
              </h3>
              <span className="text-[9px] bg-purple-900/40 text-purple-300 px-1.5 py-0.2 rounded border border-purple-500/30">PRO</span>
            </div>
            <nav className="space-y-1">
              <NavItem to="/creator" icon={TrendingUp} label="Creator Lens Dashboard" />
              <NavItem to="/brand-matches" icon={Briefcase} label="Marka Eşleşmeleri" />
              <NavItem to="/campaign-valuation" icon={Award} label="Kampanya Değerlendirmesi" />
              <NavItem to="/revenue" icon={DollarSign} label="Gelir Merkezi & Fair Share" />
              <NavItem to="/settings" icon={Settings} label="Ayarlar & Tercihler" />
            </nav>
          </div>
        </div>

        {/* User Card & Create Post Button */}
        <div className="p-3.5 sticky bottom-0 bg-[#0B0F19] border-t border-[#1e293b]/60 space-y-3">
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-[0.98] flex items-center justify-center gap-2 text-sm">
            <PlusCircle size={18} />
            <span>Yeni Gönderi Paylaş</span>
          </button>

          {/* User Profile Pill */}
          <Link to="/creator" className="flex items-center justify-between p-2 rounded-xl bg-[#111827]/80 hover:bg-[#1e293b] border border-[#1e293b] transition-colors group">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-xs text-white flex-shrink-0 shadow-sm">
                A
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-200 group-hover:text-white truncate">Ahmet Yılmaz</p>
                <p className="text-[10px] text-gray-500 truncate">@ahmetyilmaz</p>
              </div>
            </div>
            <Link to="/login" title="Çıkış Yap" className="text-gray-500 hover:text-red-400 p-1 transition-colors">
              <LogOut size={15} />
            </Link>
          </Link>
        </div>
      </aside>

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden w-full h-full pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
