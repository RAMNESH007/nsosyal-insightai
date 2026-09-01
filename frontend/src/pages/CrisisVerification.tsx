import { AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';

export default function CrisisVerification() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-minimal bg-background p-6 lg:p-10 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          Kriz Doğrulama Modu <span className="bg-red-500/20 text-red-500 text-xs px-2 py-1 rounded ml-2 font-medium">AKTİF</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">Önemli olaylarda yanlış bilgiyi önlemek için doğrulama sistemleri.</p>
      </div>

      <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6 mb-8 flex items-start gap-4">
        <div className="text-red-500 mt-1"><AlertTriangle size={24} /></div>
        <div>
           <h3 className="text-red-400 font-bold mb-1">Gündem: Orman Yangınları</h3>
           <p className="text-sm text-gray-300">Bölgedeki durum nedeniyle kriz doğrulama modu otomatik olarak etkinleştirildi. Yalnızca teyit edilmiş veya resmi kaynaklardan gelen bilgiler akışınızda önceliklendirilir.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Verified Sources */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} /> Doğrulanmış Kaynaklar
          </h2>
          <div className="space-y-4">
            <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-4 flex gap-4">
               <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">AF</div>
               <div className="flex-1">
                 <h4 className="text-white font-medium flex items-center gap-1">AFAD <CheckCircle className="text-blue-400" size={14} /></h4>
                 <p className="text-gray-400 text-xs mb-2">Resmi Kurum</p>
                 <p className="text-sm text-gray-300">Antalya bölgesindeki yangın kontrol altına alındı. Soğutma çalışmaları devam ediyor.</p>
                 <p className="text-[10px] text-gray-500 mt-2">12 dakika önce</p>
               </div>
            </div>

            <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-4 flex gap-4">
               <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">TR</div>
               <div className="flex-1">
                 <h4 className="text-white font-medium flex items-center gap-1">TRT Haber <CheckCircle className="text-blue-400" size={14} /></h4>
                 <p className="text-gray-400 text-xs mb-2">Haber Ajansı</p>
                 <p className="text-sm text-gray-300">Orman Genel Müdürlüğü son durum haritasını paylaştı.</p>
                 <p className="text-[10px] text-gray-500 mt-2">24 dakika önce</p>
               </div>
            </div>
          </div>
        </div>

        {/* Verification Queue */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="text-yellow-500" size={20} /> Doğrulama Bekleyenler
          </h2>
          <div className="space-y-4">
            <div className="bg-[#111827] border border-yellow-500/30 rounded-xl p-4 relative opacity-75">
               <div className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-500 text-[10px] px-2 py-1 rounded flex items-center gap-1">
                 <Clock size={10} /> İnceleniyor
               </div>
               <h4 className="text-gray-300 font-medium mb-1">Anonim Kullanıcı</h4>
               <p className="text-sm text-gray-400">Manavgat merkezde yeni bir yangın başladığı iddia ediliyor. Lütfen dikkatli olun!</p>
               
               <div className="mt-4 flex items-center gap-2">
                 <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-yellow-500 w-1/3"></div>
                 </div>
                 <span className="text-xs text-gray-500">Yapay zeka doğrulama oranı: %34</span>
               </div>
               <p className="text-[10px] text-red-400 mt-2 flex items-center gap-1"><Shield size={10} /> Bu içerik henüz teyit edilmemiştir.</p>
            </div>
            
            <div className="bg-[#111827] border border-[#1e293b] rounded-xl p-4 relative opacity-50">
               <div className="absolute top-2 right-2 bg-red-500/20 text-red-500 text-[10px] px-2 py-1 rounded">
                 Yanıltıcı İçerik
               </div>
               <h4 className="text-gray-400 font-medium mb-1">Haber_Vakti</h4>
               <p className="text-sm text-gray-500 line-through">Tahliye emirleri tüm ilçeye yayıldı, yollar kapalı.</p>
               <p className="text-[10px] text-red-400 mt-2 font-bold">Resmi makamlarca yalanlandı.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
