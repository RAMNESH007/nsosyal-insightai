import { type ReactNode } from 'react';
import { Home, Bell, Mail, Bookmark, List, Hash, Radio, Activity, Settings, PlusCircle, Search, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label, badge }: { to: string, icon: any, label: string, badge?: number }) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to} className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors ${isActive ? 'bg-[#1e293b] text-white font-medium' : 'text-gray-400 hover:bg-[#1e293b]/50 hover:text-white'}`}>
        <div className="flex items-center gap-4">
          <Icon size={22} className={isActive ? 'text-primary' : ''} />
          <span>{label}</span>
        </div>
        {badge && (
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{badge}</span>
        )}
      </Link>
    );
  };

  return (
    <div className="flex h-screen bg-[#0B0F19] text-white overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-[#1e293b] flex flex-col hidden lg:flex flex-shrink-0 overflow-y-auto">
        <div className="p-4 sticky top-0 bg-[#0B0F19] z-10 flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-white">N</div>
          <span className="text-xl font-bold tracking-wide">NSOSYAL</span>
        </div>
        
        <div className="flex-1 px-3 space-y-6">
          <nav className="space-y-1">
            <NavItem to="/" icon={Home} label="Ana Sayfa" />
            <NavItem to="/explore" icon={Search} label="Keşfet" />
            <NavItem to="/notifications" icon={Bell} label="Bildirimler" badge={3} />
            <NavItem to="/messages" icon={Mail} label="Mesajlar" />
            <NavItem to="/bookmarks" icon={Bookmark} label="Kaydedilenler" />
            <NavItem to="/lists" icon={List} label="Listeler" />
          </nav>

          <div>
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Yapay Zeka (AI)</h3>
            <nav className="space-y-1">
              <NavItem to="/dna" icon={Hash} label="Feed DNA" />
              <NavItem to="/pacing" icon={Activity} label="Duygusal Akış (Pacing)" />
              <NavItem to="/crisis" icon={Radio} label="Kriz Doğrulama Modu" />
            </nav>
          </div>

          <div>
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Creator Modu</h3>
            <nav className="space-y-1">
              <NavItem to="/profile" icon={Activity} label="Creator Lens" />
              <NavItem to="/revenue" icon={List} label="Gelir Merkezi" />
              <NavItem to="/settings" icon={Settings} label="Ayarlar" />
            </nav>
          </div>
        </div>

        <div className="p-4 sticky bottom-0 bg-[#0B0F19]">
          <button className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-full transition-colors flex items-center justify-center gap-2">
            <PlusCircle size={20} />
            <span>Paylaş</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {children}
      </main>
    </div>
  );
}
