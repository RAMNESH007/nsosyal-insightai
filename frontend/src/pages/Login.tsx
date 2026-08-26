import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center p-12 border-r border-surface">
        <div className="text-center">
          <div className="flex justify-center mb-6">
             <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center font-bold text-white text-4xl">
              N
            </div>
          </div>
          <p className="text-muted mb-2 tracking-widest text-sm uppercase">BETA</p>
          <h1 className="text-2xl font-semibold mt-8 mb-4 max-w-md leading-relaxed">
            NSosyal ile gündemi keşfet, düşüncelerinizi paylaşın ve dünyaya bağlanın!
          </h1>
        </div>
        <div className="absolute bottom-8 text-sm text-muted">
          Tüm hakları saklıdır. ©2026
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md bg-surface p-8 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Hesabına Giriş Yap</h2>
            <p className="text-muted text-sm">Devam etmek için bilgilerini gir.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Kullanıcı adı veya e-posta"
                className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                className="w-full bg-[#1F2937] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            <div className="text-center">
              <a href="#" className="text-primary text-sm hover:underline">Şifrenizi mi unuttunuz?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#374151] hover:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors mt-4"
            >
              Hesabına Giriş Yap
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-muted space-y-2">
            <p>Hesabınız yok mu? <a href="#" className="text-primary hover:underline font-medium">Hesap Oluştur</a></p>
            <p>Hesabına ulaşamıyor musun? <a href="#" className="text-primary hover:underline font-medium">Bizimle iletişime geç</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
