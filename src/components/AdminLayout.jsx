import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Users, Package, ArrowLeft, LogOut } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
    { name: 'Customers', path: '/admin/customers', icon: Users },
  ];

  const currentNav = navItems.find((item) => location.pathname === item.path) || { name: 'Admin Portal' };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-walnut text-white flex flex-col h-full shrink-0 shadow-lg">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <Link to="/" className="font-serif text-2xl font-bold tracking-wider text-white">
              MAJIN<span className="text-brand-terracotta">.</span>
            </Link>
            <span className="text-xs text-white/60 block mt-0.5 uppercase tracking-widest font-medium">Admin Portal</span>
          </div>
          <span className="text-[10px] bg-brand-terracotta/30 text-brand-terracotta px-2 py-0.5 rounded-full font-bold">
            Demo
          </span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-terracotta text-white shadow-md'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={18} /> {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2.5 w-full text-left rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} /> Return to Store
          </Link>
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-3 px-4 py-2.5 w-full text-left rounded-lg text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-colors text-sm"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <h2 className="font-semibold text-brand-walnut text-lg">{currentNav.name}</h2>
            <span className="text-xs text-gray-400">• Standalone Mock Mode</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/shop"
              className="text-xs bg-brand-ivory border border-brand-beige px-3 py-1.5 rounded-md text-brand-walnut font-medium hover:bg-brand-beige transition-colors"
            >
              View Live Store
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-terracotta text-white flex items-center justify-center font-bold text-sm shadow-sm">
                A
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-semibold text-brand-walnut leading-none">Admin User</p>
                <p className="text-[10px] text-gray-400">admin@majin.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
