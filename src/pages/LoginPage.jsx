import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck, User } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'admin' || email.includes('admin')) {
      navigate('/admin/dashboard');
    } else {
      navigate('/');
    }
  };

  const quickAdminLogin = () => {
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-brand-ivory">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <Link to="/" className="font-serif text-3xl font-bold text-brand-walnut tracking-wide">
            MAJIN<span className="text-brand-terracotta">.</span>
          </Link>
          <h2 className="text-xl font-bold text-brand-walnut mt-4">Welcome back</h2>
          <p className="text-sm text-gray-500 mt-1">Sign in to your MAJIN account</p>
        </div>

        {/* Role toggle */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg mb-6">
          <button
            type="button"
            onClick={() => setRole('customer')}
            className={`py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
              role === 'customer'
                ? 'bg-white text-brand-walnut shadow-sm'
                : 'text-gray-500 hover:text-brand-walnut'
            }`}
          >
            <User size={16} /> Customer
          </button>
          <button
            type="button"
            onClick={() => setRole('admin')}
            className={`py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
              role === 'admin'
                ? 'bg-brand-walnut text-white shadow-sm'
                : 'text-gray-500 hover:text-brand-walnut'
            }`}
          >
            <ShieldCheck size={16} /> Store Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'admin' ? 'admin@majin.com' : 'you@example.com'}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-terracotta text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-terracotta text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center text-gray-500 cursor-pointer">
              <input type="checkbox" className="rounded text-brand-terracotta mr-2" defaultChecked />
              Remember me
            </label>
            <a href="#forgot" className="text-brand-terracotta hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-walnut hover:bg-brand-walnut/90 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            Sign In <ArrowRight size={16} />
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400">Demo Shortcuts</span>
          </div>
        </div>

        <button
          type="button"
          onClick={quickAdminLogin}
          className="w-full py-2.5 border border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta hover:text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          <ShieldCheck size={16} /> Quick Launch Admin Portal
        </button>

        <p className="text-center text-xs text-gray-500 mt-6">
          Don't have an account?{' '}
          <Link to="/contact" className="text-brand-terracotta font-medium hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
