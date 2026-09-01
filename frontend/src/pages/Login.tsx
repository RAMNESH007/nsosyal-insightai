import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen w-full bg-[#0B0F19] text-white">
      {/* Left side - Cinematic Earth & Branding */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden flex-col justify-between p-12 border-r border-[#1e293b]/60">
        {/* Earth background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transition-transform duration-10000 ease-out"
          style={{ backgroundImage: `url('/earth.png')` }}
        >
          {/* Subtle dark gradient overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0F19]/30 to-[#0B0F19]/80"></div>
        </div>

        {/* Top Branding */}
        <div className="relative z-10 flex items-center gap-3">
          <img src="/n-logo.png" alt="NSosyal Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          <div>
            <h2 className="text-xl font-bold tracking-wider leading-none">NSOSYAL</h2>
            <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mt-0.5">InsightAI</p>
          </div>
        </div>

        {/* Center Hero Text */}
        <div className="relative z-10 max-w-lg mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Explainable AI Trust Layer
          </div>
          <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Sosyal Medyayı Şeffaf ve Anlaşılır Yaşayın
          </h1>
          <p className="text-gray-300 text-sm xl:text-base leading-relaxed drop-shadow">
            Algoritmik kararları görün, içerik evreninizi Feed DNA ile şekillendirin ve duygusal akışınızı kontrol altında tutun.
          </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 border-t border-white/10 pt-4">
          <span>TEKNOFEST 2026 NSosyal İnovasyon</span>
          <span>© 2026 NSosyal InsightAI</span>
        </div>
      </div>

      {/* Right side - Login Form Card */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative z-10">
        <div className="w-full max-w-md bg-[#111827]/90 backdrop-blur-xl p-8 rounded-3xl border border-[#1e293b] shadow-2xl">
          
          {/* Mobile Logo View */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-6">
            <img src="/n-logo.png" alt="NSosyal" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-wide">NSOSYAL</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Giriş Yap</h2>
            <p className="text-gray-400 text-sm">Hesabınıza devam etmek için bilgilerinizi girin.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">E-posta veya kullanıcı adı</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@nsosyal.com"
                className="w-full bg-[#1F2937]/80 border border-gray-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-medium text-gray-300">Şifre</label>
                <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Şifremi unuttum</a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#1F2937]/80 border border-gray-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 active:scale-[0.99] mt-2 text-sm"
            >
              Giriş Yap
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-6">
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-800"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider">veya</span>
              <div className="flex-grow border-t border-gray-800"></div>
            </div>

            <div className="space-y-3 mt-4">
              <button 
                onClick={() => navigate('/')} 
                className="w-full bg-[#1F2937] hover:bg-[#283548] text-gray-200 border border-gray-700/80 font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-3 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google ile devam et
              </button>

              <button 
                onClick={() => navigate('/')} 
                className="w-full bg-[#1F2937] hover:bg-[#283548] text-gray-200 border border-gray-700/80 font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-3 text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.13.65-2.79 1.43-.58.68-1.1 1.76-.96 2.82 1.07.08 2.12-.57 2.74-1.38z" />
                </svg>
                Apple ile devam et
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            Hesabın yok mu?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline">
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
