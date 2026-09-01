import { useState } from 'react';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen w-full bg-[#0B0F19] text-white">
      {/* Left side - Cinematic Earth & Branding */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden flex-col justify-between p-12 border-r border-[#1e293b]/60">
        {/* Earth background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105"
          style={{ backgroundImage: `url('/earth.png')` }}
        >
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
            Açık & Şeffaf Sosyal Ağ
          </div>
          <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Algoritmanın Seni Değil, Senin Algoritmayı Yönettiğin Yer
          </h1>
          <p className="text-gray-300 text-sm xl:text-base leading-relaxed drop-shadow">
            Hemen ücretsiz hesabınızı oluşturun, yapay zeka şeffaflığı ile tanışın.
          </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 border-t border-white/10 pt-4">
          <span>TEKNOFEST 2026 NSosyal İnovasyon</span>
          <span>© 2026 NSosyal InsightAI</span>
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative z-10 overflow-y-auto scrollbar-minimal">
        <div className="w-full max-w-md bg-[#111827]/90 backdrop-blur-xl p-8 rounded-3xl border border-[#1e293b] shadow-2xl my-auto">
          
          {/* Mobile Logo View */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-6">
            <img src="/n-logo.png" alt="NSosyal" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-wide">NSOSYAL</span>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-1.5">Kayıt Ol</h2>
            <p className="text-gray-400 text-sm">Hesap oluştur ve topluluğa katıl.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Kullanıcı Adı</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="kullaniciadi"
                className="w-full bg-[#1F2937]/80 border border-gray-700/80 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">E-posta adresi</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@nsosyal.com"
                className="w-full bg-[#1F2937]/80 border border-gray-700/80 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-gray-300 mb-1">Şifre</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#1F2937]/80 border border-gray-700/80 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-400 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Şifreyi doğrula</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#1F2937]/80 border border-gray-700/80 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                required
              />
            </div>

            {/* 4 Brand Guarantees matching Image 3 */}
            <div className="space-y-2 py-2 text-xs text-gray-300 bg-[#161F30]/60 p-3 rounded-xl border border-gray-800/80">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" />
                <span>Kişiselleştirilmiş akış</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" />
                <span>Algoritmayı anla ve kontrol et</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" />
                <span>Daha güvenli sosyal deneyim</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" />
                <span>İçerik üreticileri için adil ekonomi</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 active:scale-[0.99] mt-2 text-sm"
            >
              Kayıt Ol
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-4">
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-800"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider">veya</span>
              <div className="flex-grow border-t border-gray-800"></div>
            </div>

            <button 
              onClick={() => navigate('/')} 
              className="w-full mt-2 bg-[#1F2937] hover:bg-[#283548] text-gray-200 border border-gray-700/80 font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-3 text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google ile kayıt ol
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            Zaten hesabın var mı?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline">
              Giriş yap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
