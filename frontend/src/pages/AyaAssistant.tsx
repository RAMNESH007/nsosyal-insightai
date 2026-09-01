import { useState } from 'react';
import { Sparkles, Send, Bot, User, CheckCircle2, Sliders, ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  sender: 'user' | 'aya';
  text: string;
  actionTaken?: string;
}

export default function AyaAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'user',
      text: 'Neden bu gönderiyi görüyorum?',
    },
    {
      id: '2',
      sender: 'aya',
      text: 'Bu gönderiyi teknoloji ve yapay zeka ile ilgili içeriklere olan yüksek ilgin nedeniyle gösteriyorum. Ayrıca yakın zamanda benzer 3 çip mimarisi gönderisiyle etkileşimde bulundun.',
    },
    {
      id: '3',
      sender: 'user',
      text: 'Daha az negatif içerik gösterir misin?',
    },
    {
      id: '4',
      sender: 'aya',
      text: 'Tamam Ahmet! Negatif ve yüksek yoğunluklu içerikleri azaltacak şekilde akış algoritmik tercihlerini anında güncelliyorum.',
      actionTaken: 'Negatif içerik filtresi %40 oranında artırıldı.',
    },
  ]);

  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'Daha fazla teknoloji içeriği göster',
    'Eğitim ve bilim içeriklerini artır',
    'Duygusal akışı Sakin moda al',
    'Gündemdeki dezenformasyon filtrelerini sıkılaştır',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulate smart AI response
    setTimeout(() => {
      let replyText = 'Anladım! İsteğin doğrultusunda akışını kişiselleştiriyorum.';
      let action = 'Algoritma ağırlıkları güncellendi.';

      if (text.toLowerCase().includes('teknoloji')) {
        replyText = 'Teknoloji kategorisi önceliğini %15 artırdım. Akışında daha fazla yapay zeka ve yazılım haberi göreceksin.';
        action = 'Teknoloji ağırlığı: %32 ➔ %45';
      } else if (text.toLowerCase().includes('sakin') || text.toLowerCase().includes('pacing')) {
        replyText = 'Duygusal Pacing modunu "Sakin" olarak ayarladım. Yoğun ve tartışmalı içerikler arka plana alındı.';
        action = 'Pacing Modu: Sakin (Calm) olarak güncellendi.';
      } else if (text.toLowerCase().includes('eğitim') || text.toLowerCase().includes('bilim')) {
        replyText = 'Bilim ve eğitim üreticilerini akışında öne çıkardım.';
        action = 'Eğitim kategorisi: %9 ➔ %20';
      }

      const ayaMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'aya',
        text: replyText,
        actionTaken: action,
      };

      setMessages(prev => [...prev, ayaMsg]);
    }, 700);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0B0F19] overflow-hidden">
      
      {/* Top Header */}
      <div className="p-4 sm:p-6 border-b border-[#1e293b] flex items-center justify-between bg-[#0B0F19]/90 backdrop-blur z-10">
        <div className="flex items-center gap-3">
          <Link to="/" className="lg:hidden p-2 rounded-xl bg-[#111827] border border-[#1e293b] text-gray-400">
            <ArrowLeft size={18} />
          </Link>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white">Aya Asistan</h1>
              <span className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full font-bold border border-blue-500/30">BETA</span>
            </div>
            <p className="text-xs text-gray-400">Sosyal Medya Algoritma ve Akış Rehberiniz</p>
          </div>
        </div>

        <Link 
          to="/settings" 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111827] border border-[#1e293b] text-xs text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
        >
          <Sliders size={14} /> Tercihler
        </Link>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto scrollbar-minimal p-4 sm:p-8 space-y-6 max-w-4xl mx-auto w-full">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'aya' && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-xs text-white flex-shrink-0 shadow-md">
                A
              </div>
            )}

            <div className={`max-w-[85%] sm:max-w-md ${
              msg.sender === 'user'
                ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm p-4 shadow-md shadow-blue-600/20'
                : 'bg-[#111827] text-gray-200 border border-[#1e293b] rounded-2xl rounded-tl-sm p-4 shadow-sm'
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              
              {msg.actionTaken && (
                <div className="mt-3 pt-2.5 border-t border-gray-800 flex items-center gap-2 text-xs text-green-400 font-medium">
                  <CheckCircle2 size={14} className="flex-shrink-0" />
                  <span>{msg.actionTaken}</span>
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-gray-700 flex items-center justify-center font-bold text-xs text-white flex-shrink-0">
                <User size={14} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Input Area & Quick Action Chips */}
      <div className="p-4 sm:p-6 border-t border-[#1e293b] bg-[#0B0F19] max-w-4xl mx-auto w-full">
        
        {/* Quick Prompts */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none mb-3">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="flex-shrink-0 text-xs bg-[#111827] hover:bg-[#1e293b] hover:border-blue-500/40 text-gray-300 hover:text-white px-3.5 py-1.5 rounded-full border border-gray-800 transition-all cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Box */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="relative flex items-center"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Aya'ya akışın veya bir içerik hakkında soru sor..."
            className="w-full bg-[#111827] border border-gray-700/80 focus:border-blue-500 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none transition-all placeholder-gray-500 pr-12 shadow-inner"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="absolute right-2.5 p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white rounded-xl transition-all"
          >
            <Send size={16} />
          </button>
        </form>
      </div>

    </div>
  );
}
