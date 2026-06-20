import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataServer } from './DataServer.js'; 
// यह इम्पोर्ट लाइन अब सही है, जो सारे फंक्शन्स को PriceHelper नाम के अंदर ले आएगी
import * as PriceHelper from './PriceHelper.js';

const ExplorePage = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  // सभी 34 फीचर्स की लिस्ट (आपके कोड से ली गई है, कोई फीचर नहीं हटाया गया)
  const allFeatures = [
    { name: "🚀 Promote", path: "/promote" }, { name: "🔥 Boosting", path: "/boost" },
    { name: "💖 Premium", path: "/premium" }, { name: "💬 Messenger", path: "/messenger" },
    { name: "🌍 Geo", path: "/geo" }, { name: "🎁 Gifts", path: "/gifts" },
    { name: "💰 Affiliate", path: "/affi" }, { name: "💳 Wallet", path: "/wallet" },
    { name: "📊 Earnings", path: "/earn" }, { name: "📱 Ads", path: "/ads" },
    { name: "🎥 Live", path: "/live" }, { name: "🏆 Rewards", path: "/rewards" },
    { name: "🤝 Partner", path: "/part" }, { name: "🛒 Shop", path: "/shop" },
    { name: "📢 Marketing", path: "/mark" }, { name: "🎮 Game", path: "/game" },
    { name: "🎟️ Events", path: "/events" }, { name: "🛡️ Security", path: "/sec" },
    { name: "📈 Admin", path: "/admin" }, { name: "🌐 Global", path: "/global" },
    { name: "👤 Profile", path: "/prof" }, { name: "🛠️ Server", path: "/serv" },
    { name: "⚡ Filter", path: "/filt" }, { name: "📡 Stats", path: "/stats" },
    { name: "🏦 Bank", path: "/bank" }, { name: "📍 Map", path: "/map" },
    { name: "🛡️ AutoMod", path: "/mod" }, { name: "🔔 Notify", path: "/noti" },
    { name: "📈 ROI", path: "/roi" }, { name: "🔑 Auth", path: "/auth" },
    { name: "🌍 Hub", path: "/hub" }, { name: "⚙️ Settings", path: "/set" },
    { name: "📱 Mobile", path: "/mob" }, { name: "💾 Backup", path: "/back" }
  ];

  const handleFeatureClick = async (feature) => {
    const status = await DataServer.checkFeature(feature.path);
    
    // यहाँ PriceHelper से सही फंक्शन का उपयोग किया गया है जो आपके कोड में मौजूद है
    const priceData = PriceHelper.getGlobalPricing('IN', 'local', 'starter');
    const price = priceData.displayPrice;
    
    console.log(`Action: ${feature.name}, Status: ${status}, Price: ${price}`);
    navigate(feature.path);
  };

  return (
    <div style={{ padding: '20px', minHeight: '100vh', background: '#fff' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Explore</h2>
        <button onClick={() => setShowAll(!showAll)} style={{ fontSize: '24px', border: 'none', background: 'none' }}>⋮</button>
      </header>

      {/* मुख्य 4 बटन */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {allFeatures.slice(0, 4).map(f => (
          <button key={f.name} onClick={() => handleFeatureClick(f)} style={btnStyle}>
            {f.name}
          </button>
        ))}
      </div>

      {/* बाकी 30 फीचर्स */}
      {showAll && (
        <div style={{ marginTop: '20px', borderTop: '2px solid #eee' }}>
          {allFeatures.slice(4).map(f => (
            <div key={f.name} onClick={() => handleFeatureClick(f)} style={listStyle}>
              {f.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const btnStyle = { padding: '20px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff', fontWeight: 'bold' };
const listStyle = { padding: '18px', borderBottom: '1px solid #f9f9f9', cursor: 'pointer', fontSize: '16px' };

export default ExplorePage;
