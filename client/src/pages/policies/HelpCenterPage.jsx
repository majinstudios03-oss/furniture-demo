import { Link } from 'react-router-dom';
import { Search, ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const HelpCenterPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "For metro cities, delivery typically takes 3-5 business days. For non-metro and remote locations, please allow 7-10 business days. Custom-made furniture may take up to 3 weeks. You will receive a tracking link via email and SMS once your order is dispatched."
    },
    {
      question: "Do you offer assembly services?",
      answer: "Yes! We provide complimentary professional assembly for all furniture that requires it. Our delivery executives will assemble the product at your home at the time of delivery."
    },
    {
      question: "Can I customize the furniture dimensions or fabric?",
      answer: "Currently, we do not offer custom dimensions for our standard catalog. However, for sofas and upholstered beds, we offer a selection of 5-10 premium fabrics that you can choose from on the product page."
    },
    {
      question: "What is your warranty policy?",
      answer: "All MAJIN furniture comes with a comprehensive 1-year warranty covering manufacturing defects, wood borer issues, and structural integrity. Upholstery is covered for 6 months against tearing or stitching failure under normal use."
    },
    {
      question: "How do I care for solid wood furniture?",
      answer: "To maintain the beauty of your solid wood furniture, dust regularly with a soft, dry cloth. Avoid exposure to direct sunlight and extreme humidity. Wipe spills immediately. We recommend using coasters and mats to prevent water rings and heat marks."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-brand-walnut py-20 text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
        <div className="max-w-2xl mx-auto relative text-brand-walnut">
          <input 
            type="text" 
            placeholder="Search for answers (e.g. delivery, returns)..." 
            className="w-full px-6 py-4 rounded-full pl-14 focus:outline-none focus:ring-2 focus:ring-brand-terracotta"
          />
          <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mt-12">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link to="/shipping" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <h3 className="font-serif text-xl font-bold text-brand-walnut mb-2">Shipping & Delivery</h3>
            <p className="text-gray-500 text-sm">Track your order and understand our delivery timelines.</p>
          </Link>
          <Link to="/returns" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <h3 className="font-serif text-xl font-bold text-brand-walnut mb-2">Returns & Refunds</h3>
            <p className="text-gray-500 text-sm">Learn about our 7-day easy return policy.</p>
          </Link>
          <Link to="/contact" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <h3 className="font-serif text-xl font-bold text-brand-walnut mb-2">Contact Support</h3>
            <p className="text-gray-500 text-sm">Get in touch with our customer care team.</p>
          </Link>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <h2 className="font-serif text-3xl font-bold text-brand-walnut mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-brand-walnut">{faq.question}</span>
                  <ChevronDown size={20} className={`text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-5 text-gray-600 bg-white border-t border-gray-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still need help? */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-brand-walnut mb-6">Still need help?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919000000000" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-brand-walnut hover:border-brand-terracotta transition-colors">
              <Phone size={18} className="text-brand-terracotta" /> +91 90000 00000
            </a>
            <a href="mailto:support@majinfurnitures.example" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-brand-walnut hover:border-brand-terracotta transition-colors">
              <Mail size={18} className="text-brand-terracotta" /> Email Support
            </a>
            <Link to="/contact" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-brand-walnut hover:border-brand-terracotta transition-colors">
              <MessageCircle size={18} className="text-brand-terracotta" /> Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
