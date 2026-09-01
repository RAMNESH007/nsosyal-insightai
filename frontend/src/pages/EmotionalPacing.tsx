import { Activity, ShieldAlert, Zap } from 'lucide-react';

export default function EmotionalPacing() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-background p-6 lg:p-10 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          Duygusal Akış Dengesi
        </h1>
        <p className="text-gray-400 text-sm mt-1">Günlük akışınızın duygusal yoğunluk dengesi.</p>
      </div>

      {/* Pacing Slider */}
      <div className="bg-[#111827] rounded-2xl border border-[#1e293b] p-8 mb-8">
        <div className="flex justify-between text-sm font-medium mb-4">
          <span className="text-green-500">Sakin</span>
          <span className="text-blue-500">Dengeli</span>
          <span className="text-red-500">Yoğun</span>
        </div>
        <div className="relative h-2 bg-gray-700 rounded-full mb-8">
           <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 via-blue-500 to-transparent w-1/2 rounded-full"></div>
           <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-500 cursor-pointer shadow-lg"></div>
        </div>

        {/* Günlük Akış Sıralaması */}
        <h3 className="text-gray-300 font-medium mb-6">Günlük Akış Sıralaması:</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#1e293b]/50 border border-[#1e293b] rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm mb-1">Sakin</p>
            <p className="text-2xl font-bold text-green-500">%30</p>
          </div>
          <div className="bg-[#1e293b]/50 border border-blue-500/30 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5"></div>
            <p className="text-gray-400 text-sm mb-1 relative z-10">Orta</p>
            <p className="text-2xl font-bold text-blue-500 relative z-10">%50</p>
          </div>
          <div className="bg-[#1e293b]/50 border border-[#1e293b] rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm mb-1">Yoğun</p>
            <p className="text-2xl font-bold text-red-500">%20</p>
          </div>
        </div>
      </div>

      {/* Pacing Mode Selection */}
      <h2 className="text-xl font-bold text-white mb-4">Pacing Modu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 cursor-pointer hover:border-gray-500 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Activity size={20} /></div>
            <h3 className="font-medium text-white">Sakin</h3>
          </div>
          <p className="text-xs text-gray-400">Rahatlatıcı içerik öncelikli.</p>
        </div>

        <div className="bg-[#111827] border-2 border-blue-500 rounded-xl p-5 cursor-pointer relative">
          <div className="absolute top-3 right-3 text-blue-500">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><ShieldAlert size={20} /></div>
            <h3 className="font-medium text-white">Dengeli</h3>
          </div>
          <p className="text-xs text-gray-400">Dengeli bir içerik akışı sağlar.</p>
        </div>

        <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 cursor-pointer hover:border-gray-500 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><Zap size={20} /></div>
            <h3 className="font-medium text-white">Canlı / Yoğun</h3>
          </div>
          <p className="text-xs text-gray-400">Yoğun ve gündem odaklı içerikler.</p>
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-green-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Akışınız iyi bir dengede.
      </div>

    </div>
  );
}
