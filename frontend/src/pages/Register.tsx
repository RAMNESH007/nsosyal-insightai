import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center p-12 border-r border-surface relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="text-center relative z-10">
          <div className="flex justify-center mb-6">
             <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-5xl shadow-lg shadow-blue-500/50">
              N
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-wide mb-2">NSOSYAL</h1>
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-8">InsightAI</p>
          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            Explainable AI-Powered Social Experience Platform
          </p>
        </div>
        <div className="absolute bottom-8 text-sm text-gray-500">
          Tüm hakları saklıdır. © 2026
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-[#0B0F19]">
        <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-white">Kayıt Ol</h2>
            <p className="text-gray-400 text-sm">Hesap oluştur ve topluluğa katıl.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-posta adresi"
                className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifre"
                className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifreyi doğrula"
                className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div className="space-y-3 mt-6 text-sm text-gray-300">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 bg-gray-800 border-gray-600 rounded text-primary focus:ring-primary" required />
                <span>Kişiselleştirilmiş içerik deneyimini kabul ediyorum.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 bg-gray-800 border-gray-600 rounded text-primary focus:ring-primary" required />
                <span>Algoritmayı anla ve kontrol et şartlarını okudum.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 bg-gray-800 border-gray-600 rounded text-primary focus:ring-primary" required />
                <span>Daha güvenli sosyal deneyim kurallarını onaylıyorum.</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors mt-6 shadow-lg shadow-blue-500/30"
            >
              Kayıt Ol
            </button>
          </form>

          <div className="mt-6">
             <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">veya</span>
                <div className="flex-grow border-t border-gray-700"></div>
             </div>
             
             <button className="w-full mt-4 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google ile kayıt ol
             </button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            Zaten hesabın var mı? <Link to="/login" className="text-primary hover:underline font-medium">Giriş yap</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
