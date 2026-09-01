import { Settings as SettingsIcon, Sliders, Shield, Bell } from 'lucide-react';

export default function Settings() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-background p-6 lg:p-10 max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <SettingsIcon className="text-primary" /> Ayarlar
        </h1>
        <p className="text-gray-400 text-sm mt-1">İçerik tercihlerinizi ve hesap güvenliğinizi yönetin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Sidebar settings nav */}
        <div className="md:col-span-1 space-y-2">
           <button className="w-full flex items-center gap-3 bg-[#1F2937] text-white px-4 py-3 rounded-lg text-sm font-medium">
             <Sliders size={16} /> İçerik Tercihleri
           </button>
           <button className="w-full flex items-center gap-3 text-gray-400 hover:bg-[#111827] px-4 py-3 rounded-lg text-sm transition-colors">
             <Shield size={16} /> Gizlilik
           </button>
           <button className="w-full flex items-center gap-3 text-gray-400 hover:bg-[#111827] px-4 py-3 rounded-lg text-sm transition-colors">
             <Bell size={16} /> Bildirimler
           </button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3 space-y-6">
           <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-6">
             <h2 className="text-lg font-bold text-white mb-6">İçerik DNA'nızı Şekillendirin</h2>
             
             <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Teknoloji & Bilim</label>
                    <span className="text-sm text-primary">Yüksek</span>
                  </div>
                  <input type="range" min="0" max="100" defaultValue="80" className="w-full accent-primary" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Eğlence & Mizah</label>
                    <span className="text-sm text-primary">Orta</span>
                  </div>
                  <input type="range" min="0" max="100" defaultValue="50" className="w-full accent-primary" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Siyaset & Gündem</label>
                    <span className="text-sm text-gray-500">Düşük</span>
                  </div>
                  <input type="range" min="0" max="100" defaultValue="20" className="w-full accent-primary" />
                </div>
             </div>
           </div>

           <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-6">
             <h2 className="text-lg font-bold text-white mb-6">Algoritma Kontrolleri</h2>
             
             <div className="space-y-4">
               <label className="flex items-center justify-between cursor-pointer">
                 <div>
                   <h3 className="text-gray-300 font-medium">Yankı Odası Kırıcı (Echo Chamber Breaker)</h3>
                   <p className="text-xs text-gray-500 mt-1">Farklı görüşlere sahip içerikleri ara sıra akışınıza dahil eder.</p>
                 </div>
                 <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle1" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                 </div>
               </label>
               <hr className="border-gray-800" />
               <label className="flex items-center justify-between cursor-pointer">
                 <div>
                   <h3 className="text-gray-300 font-medium">Negatif İçerik Filtresi</h3>
                   <p className="text-xs text-gray-500 mt-1">Stres yaratan veya tetikleyici haberciliği azaltır.</p>
                 </div>
                 <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-600 cursor-pointer"></label>
                 </div>
               </label>
             </div>
           </div>

           <div className="flex justify-end">
             <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
               Değişiklikleri Kaydet
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
