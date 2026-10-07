import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminCustomers from './pages/admin/AdminCustomers';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './pages/WishlistPage';
import OffersPage from './pages/OffersPage';
import HelpCenterPage from './pages/policies/HelpCenterPage';
import ShippingPolicyPage from './pages/policies/ShippingPolicyPage';
import ReturnsPolicyPage from './pages/policies/ReturnsPolicyPage';
import PrivacyPolicyPage from './pages/policies/PrivacyPolicyPage';
import TermsPage from './pages/policies/TermsPage';
import TrackOrderPage from './pages/TrackOrderPage';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/category/:categoryName" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/shipping" element={<ShippingPolicyPage />} />
          <Route path="/returns" element={<ReturnsPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/track" element={<TrackOrderPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
