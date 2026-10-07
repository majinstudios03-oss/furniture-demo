import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would send data to backend here
  };

  return (
    <div className="bg-brand-ivory min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-walnut mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about a product, delivery, or anything else? We're here to help. Reach out to our dedicated support team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 bg-brand-walnut text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-brand-terracotta" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Phone</p>
                    <p className="text-white/80">+91 90000 00000</p>
                    <p className="text-sm text-white/60 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-brand-terracotta" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Email</p>
                    <p className="text-white/80">support@majinfurnitures.example</p>
                    <p className="text-sm text-white/60 mt-1">We aim to reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-brand-terracotta" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Office</p>
                    <p className="text-white/80">123 Design Avenue,<br/>Indiranagar, Bangalore<br/>Karnataka 560038</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-sm text-white/60 text-center">
                MAJIN FURNITURES is a fictional brand created for demonstration purposes.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 p-10">
            <h2 className="font-serif text-3xl font-bold text-brand-walnut mb-8">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700">
                  Thank you for reaching out, {formData.name}. Our team will get back to you at {formData.email} shortly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-8 px-6 py-2 border border-green-600 text-green-700 rounded hover:bg-green-600 hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                    <select 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta"
                    >
                      <option value="">Select a subject</option>
                      <option value="Order Inquiry">Order Inquiry</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Returns/Exchanges">Returns & Exchanges</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-brand-terracotta text-white px-10 py-4 rounded-md font-bold hover:bg-brand-terracotta/90 transition-colors shadow-lg shadow-brand-terracotta/20 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
