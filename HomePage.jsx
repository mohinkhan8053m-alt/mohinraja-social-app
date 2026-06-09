import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider'; 

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // [SERVER SLOT]: यहाँ से सर्वर से डेटा आएगा
    setTimeout(() => setLoading(false), 1500); 
  }, []);

  const handleBoostPost = (postId) => {
    // [SERVER SLOT]: बूस्टिंग पेमेंट गेटवे लिंक
    alert("प्रोफाइल बूस्टिंग फीचर एक्टिव!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      {/* 1. मास्टर विज्ञापन बैनर */}
      <AdBanner />

      {/* 2. टॉप बार */}
      <header className="sticky top-0 bg-white z-50 p-4 border-b flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          RangManch
        </h1>
        <div className="flex space-x-3 items-center">
          {/* रिवॉर्ड बटन */}
          <button className="text-[10px] bg-yellow-100 px-2 py-1 rounded-full text-yellow-700 font-bold border border-yellow-200">
            🎁 Rewards
          </button>
          {/* AI ट्रांसलेशन बटन (नया) */}
          <button className="text-sm px-2">👁️‍🗨️</button>
          <button className="text-xl" onClick={() => navigate('/messenger')}>✉️</button>
        </div>
      </header>

      <main className="flex-grow p-4 space-y-6">
        {/* स्टोरीज */}
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-purple-500 p-0.5">
              <div className="w-full h-full bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* पोस्ट फीड */}
        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-64 bg-gray-200 rounded-2xl"></div>
          </div>
        ) : (
          <div className="border border-gray-100 rounded-2xl p-2 shadow-sm">
            <div className="flex justify-between px-2 mb-1">
              <div className="text-[10px] text-gray-400 font-bold uppercase">Sponsored</div>
              <button onClick={() => handleBoostPost('1')} className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold">
                🚀 Boost
              </button>
            </div>
            
            <div className="h-80 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
              <p className="text-gray-400">[SERVER SLOT]: Post Content</p>
            </div>
            
            <div className="flex justify-between px-2 mb-2">
              <div className="flex space-x-4 text-2xl">
                <button>❤️</button>
                <button>💬</button>
                <button>✈️</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 3. बॉटम नेविगेशन */}
      <nav className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-around items-center z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        <button onClick={() => navigate('/home')} className="text-xl">🏠</button>
        <button onClick={() => navigate('/explore')} className="text-xl">🔍</button>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg -mt-8 border-4 border-white">+</button>
        <button onClick={() => navigate('/messenger')} className="text-xl">💬</button>
        <button onClick={() => navigate('/profile')} className="text-xl">👤</button>
      </nav>
    </div>
  );
};

export default HomePage;
