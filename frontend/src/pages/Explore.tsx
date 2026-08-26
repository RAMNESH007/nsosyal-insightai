import { useState } from 'react';
import { ArrowLeft, Sparkles, MessageCircle, Heart, Share, Bookmark } from 'lucide-react';

export default function Explore() {
  const [activeTab, setActiveTab] = useState('Trendler');
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background max-w-3xl mx-auto border-x border-surface">
      {/* Header Tabs */}
      <div className="flex justify-around border-b border-surface p-4">
        {['Trendler', 'Etiketler', 'Haberler'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-medium pb-2 ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted hover:text-white'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 flex items-center gap-4">
        <button className="text-white hover:bg-surface p-2 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-bold">Keşfet</h2>
      </div>

      {/* Post Content */}
      <div className="p-4 border-b border-surface">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-black overflow-hidden">
            TRT
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold">TRT Haber</span>
              <span className="text-blue-500">✓</span>
              <span className="text-muted text-sm">@trthaber · 59dk</span>
            </div>
            
            <p className="mt-2">
              26 Ağustos 1071'de Malazgirt'te kazanılan büyük zafer, Türklere Anadolu'nun kapılarını açtı...
            </p>
            <p className="mt-2">
              Tarihin seyrini değiştiren Malazgirt Zaferi'nin 955. yıl dönümü kutlu olsun.
            </p>

            <div className="mt-4 rounded-xl overflow-hidden border border-surface">
              <div className="bg-gray-800 h-64 w-full flex items-center justify-center text-muted">
                [Malazgirt Image Placeholder]
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-muted">
              <button className="flex items-center gap-2 hover:text-primary"><MessageCircle size={18} /> 124</button>
              <button className="flex items-center gap-2 hover:text-red-500"><Heart size={18} /> 2.4B</button>
              <button className="flex items-center gap-2 hover:text-green-500"><Share size={18} /> 145</button>
              <button className="flex items-center gap-2 hover:text-primary"><Bookmark size={18} /></button>
            </div>

            {/* Explainable AI Layer Integration */}
            <div className="mt-6 border border-surface rounded-lg p-4 bg-[#111827]">
              <button 
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex items-center gap-2 text-primary hover:underline font-medium w-full"
              >
                <Sparkles size={18} />
                Neden bunu görüyorum?
              </button>
              
              {showExplanation && (
                <div className="mt-4 space-y-3 text-sm border-t border-surface pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Konu Eşleşmesi</span>
                    <div className="w-1/2 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '42%' }}></div>
                    </div>
                    <span>42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Tazelik</span>
                    <div className="w-1/2 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: '28%' }}></div>
                    </div>
                    <span>28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Sosyal Yakınlık</span>
                    <div className="w-1/2 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full" style={{ width: '15%' }}></div>
                    </div>
                    <span>15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Kalite & Güvenlik</span>
                    <div className="w-1/2 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full" style={{ width: '15%' }}></div>
                    </div>
                    <span>15%</span>
                  </div>
                  <div className="mt-4 p-3 bg-background rounded-md text-gray-300">
                    "Tarih ve haber içerikleriyle sık etkileşime girdiğiniz için gösterildi."
                  </div>
                  <div className="flex gap-4 mt-2">
                    <button className="text-xs text-muted hover:text-white px-2 py-1 bg-surface rounded">Bunun gibi daha az</button>
                    <button className="text-xs text-muted hover:text-white px-2 py-1 bg-surface rounded">Bunun gibi daha çok</button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
