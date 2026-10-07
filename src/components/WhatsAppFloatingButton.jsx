import { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppFloatingButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '919491554114';
  const defaultMessage = encodeURIComponent(
    "Hi MAJIN FURNITURES, I'm interested in your furniture collections and would like to talk to you."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`bg-white text-brand-walnut px-3.5 py-2 rounded-xl shadow-lg border border-gray-100 text-xs font-semibold hidden md:flex items-center gap-2 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-90'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
        Chat on WhatsApp
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-600/30 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
};

export default WhatsAppFloatingButton;
