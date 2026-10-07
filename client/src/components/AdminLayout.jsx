import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Users, Package, Settings, LogOut, TrendingUp, DollarSign } from 'lucide-react';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-walnut text-white flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="font-serif text-2xl font-bold tracking-wider">MAJIN<span className="text-brand-terracotta">.</span></Link>
          <span className="text-xs text-white/50 block mt-1">Admin Portal</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/products" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            <Package size={20} /> Products
          </Link>
          <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            <ShoppingBag size={20} /> Orders
          </Link>
          <Link to="/admin/customers" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            <Users size={20} /> Customers
          </Link>
          <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <h2 className="font-medium text-brand-walnut">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-terracotta text-white flex items-center justify-center font-bold text-sm">
              A
            </div>
            <span className="text-sm font-medium">Admin User</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
