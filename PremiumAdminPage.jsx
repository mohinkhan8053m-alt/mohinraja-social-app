import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider'; // विज्ञापन के लिए
import { getPricing } from './PriceHelper'; // करेंसी के लिए

const PremiumAdminPage = () => {
  const navigate = useNavigate();
  const [isChatGuardOn, setIsChatGuardOn] = useState(true);
  
  // [SERVER SLOT]: यहाँ से यूजर की कंट्री चेक करें
  const userCountry = 'India'; 
  const pricing = getPricing(userCountry);

  const handleServerAction = (action) => {
    if (action === 'subscribe') {
      // [SERVER SLOT]: यहाँ अपना स्ट्राइप पेमेंट लिंक अपडेट करें
      window.location.href = "https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE";
    } else {
      console.log(`Server Request for: ${action}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 pb-20">
      {/* विज्ञापन बैनर: यह पूरी वेबसाइट में विज्ञापन घुमाएगा */}
      <AdBanner />

      <header className="p-6 bg-white border-b shadow-sm flex justify-between items-center">
        <h2 className="text-2xl font-bold text-purple-700">Creator Dashboard</h2>
        <div onClick={() => handleServerAction('uploadPhoto')} className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer border-2 border-purple-500"></div>
      </header>

      <div className="p-6 space-y-6">
        {/* VIP प्रीमियम कार्ड */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl">
          <h3 className="font-bold text-2xl">VIP Premium</h3>
          <p className="opacity-90">Unlock exclusive AI filters.</p>
          <button 
            onClick={() => handleServerAction('subscribe')} 
            className="mt-6 bg-white text-purple-700 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Subscribe Now
          </button>
        </div>

        {/* विज्ञापन डील (नया फीचर जोड़े बिना पुराने छेड़े) */}
        <div className="p-4 bg-white rounded-2xl border shadow-sm">
          <h4 className="font-bold text-gray-700 mb-2">Promote Business</h4>
          <button onClick={() => alert("Corporate Ad Portal opened!")} className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-bold">
            Corporate Ad Deal
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-4 bg-white rounded-2xl border text-center shadow-sm">
            <h4 className="font-bold text-gray-700 text-sm">Views</h4>
            <p className="text-xs text-blue-600 font-bold">12K</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border text-center shadow-sm">
            <h4 className="font-bold text-gray-700 text-sm">Likes</h4>
            <p className="text-xs text-green-600 font-bold">850</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border text-center shadow-sm">
            <h4 className="font-bold text-gray-700 text-sm">Earnings</h4>
            <p className="text-xs text-purple-600 font-bold">₹5K</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-2xl border shadow-sm flex flex-col items-center">
            <h4 className="font-bold text-gray-700 mb-2">Chat Guard</h4>
            <button onClick={() => setIsChatGuardOn(!isChatGuardOn)} className={`px-4 py-1 rounded-full text-xs font-bold ${isChatGuardOn ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {isChatGuardOn ? 'ON' : 'OFF'}
            </button>
          </div>
          <div className="p-6 bg-white rounded-2xl border shadow-sm flex flex-col items-center">
            <h4 className="font-bold text-gray-700 mb-2">Support</h4>
            <button onClick={() => handleServerAction('contactSupport')} className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold">Help</button>
          </div>
        </div>
      </div>

      {/* बॉटम नेविगेशन (कोई फीचर डिलीट नहीं किया) */}
      <nav className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-around shadow-lg z-50">
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full -mt-8 shadow-xl">+</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default PremiumAdminPage;
