import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; // आपका नया लेआउट इम्पॉर्ट किया

const ExplorePage = () => {
  const navigate = useNavigate();

  // 20+ कमाई वाले फीचर्स (सब सीधे चलेंगे)
  const masterFeatures = [
    { name: "🚀 Promote", path: "/promote" },
    { name: "🔥 Boosting", path: "/boost" },
    { name: "🌍 Geo-Target", path: "/geo-targeting" },
    { name: "💖 Premium", path: "/premium" },
    { name: "🎁 Gifts", path: "/gifts" },
    { name: "💬 Messenger", path: "/messenger" },
    { name: "💰 Affiliate", path: "/affiliate" },
    { name: "💳 Wallet", path: "/wallet" },
    { name: "📊 Earnings", path: "/earnings" },
    { name: "📱 Ads Network", path: "/ads-network" },
    { name: "🎥 Live Stream", path: "/live" },
    { name: "🏆 Rewards", path: "/rewards" },
    { name: "🤝 Partnerships", path: "/partnerships" },
    { name: "🛒 E-commerce", path: "/shop" },
    { name: "📢 Marketing", path: "/marketing" },
    { name: "🎮 Gaming", path: "/gaming" },
    { name: "🎟️ Events", path: "/events" },
    { name: "🛡️ Security", path: "/security" },
    { name: "📈 Admin", path: "/admin" },
    { name: "🌐 Global Reach", path: "/global" }
  ];

  return (
    <Layout>
      <div style={{ padding: '0 10px' }}>
        
        {/* मास्टर फीचर्स ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {masterFeatures.map((item) => (
            <button 
              key={item.name} 
              onClick={() => navigate(item.path)} 
              style={{ 
                padding: '15px', background: '#f8f9fa', border: '1px solid #eee', 
                borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' 
              }}>
              {item.name}
            </button>
          ))}
        </div>

        {/* सर्वर स्लॉट (बाकी एडवांस फीचर्स के लिए) */}
        <div style={{ 
          marginTop: '40px', padding: '20px', border: '2px dashed #aaa', 
          borderRadius: '15px', textAlign: 'center', marginBottom: '20px' 
        }}>
          <p style={{ fontSize: '14px', marginBottom: '10px' }}>📡 <b>Server Hub:</b> 34 Features Synchronized</p>
          <button 
            onClick={() => alert('Syncing Database from Server...')}
            style={{ 
              padding: '10px 20px', background: '#000', color: '#fff', 
              border: 'none', borderRadius: '8px', cursor: 'pointer' 
            }}>
            Sync All Data
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default ExplorePage;
