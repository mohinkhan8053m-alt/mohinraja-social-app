import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  // बिज़नेस कांटेक्ट लिंक (35वां फीचर)
  const openWhatsApp = () => window.open("https://wa.me/918053756591?text=Hello%20Moin%20Raja,%20I%20am%20from%20a%20company%20interested%20in%20promotion.", "_blank");

  // 34 फीचर्स की लिस्ट
  const allFeatures = [
    { name: "🚀 Promote", path: "/promote" }, { name: "🔥 Boosting", path: "/boost" },
    { name: "💖 Premium", path: "/premium" }, { name: "💬 Messenger", action: openWhatsApp },
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

  return (
    <div style={{ padding: '20px', minHeight: '100vh', background: '#fff' }}>
      {/* हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Explore</h2>
        <button onClick={() => setShowAll(!showAll)} style={{ fontSize: '24px', border: 'none', background: 'none' }}>⋮</button>
      </header>

      {/* मुख्य 4 फीचर */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {allFeatures.slice(0, 4).map(f => (
          <button key={f.name} onClick={f.action ? f.action : () => navigate(f.path)} 
                  style={{ padding: '20px', borderRadius: '10px', border: '1px solid #ddd' }}>
            {f.name}
          </button>
        ))}
      </div>

      {/* 3-डॉट मेनू के अंदर बाकी फीचर */}
      {showAll && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
          {allFeatures.slice(4).map(f => (
            <div key={f.name} onClick={() => navigate(f.path)} 
                 style={{ padding: '15px', borderBottom: '1px solid #f9f9f9', cursor: 'pointer' }}>
              {f.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
