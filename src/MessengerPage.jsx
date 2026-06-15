import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; 

const MessengerPage = () => {
  const navigate = useNavigate();
  const { serverUrl } = useApi();

  const handleServerAction = (action) => {
    // यहाँ से आपका सारा फीचर सर्वर से कनेक्ट हो जाएगा
    console.log(`Executing ${action} via ${serverUrl}`);
    alert(`Feature ${action} activated via Server Hub!`);
  };

  // 22 फीचर्स की लिस्ट
  const features = [
    { name: "🤖 AI Translate", action: "Translate", type: "default" },
    { name: "🛡️ Auto-Mod", action: "AutoMod", type: "default" },
    { name: "📢 AdSense Apply", action: "AdSense", type: "golden" },
    { name: "💎 Premium Toggle", action: "Premium", type: "default" },
    { name: "📊 Get Analytics", action: "Analytics", type: "default" },
    { name: "✅ Local Ad Control", action: "LocalAd", type: "golden" },
    { name: "🌐 Multi-Region", action: "MultiRegion", type: "default" },
    { name: "🌍 Global Ad Manager", action: "GlobalAd", type: "golden" },
    { name: "🎁 Send Gift (30%)", action: "Gift", type: "golden" },
    { name: "⚡ Girl Filter", action: "GirlFilter", type: "default" },
    { name: "🔄 Sync Data Hub", action: "Sync", type: "default" },
    { name: "⚙️ Server Settings", action: "Settings", type: "default" },
    { name: "🔥 Force Ad Trigger", action: "ForceAd", type: "golden" },
    { name: "📈 Live Stats Board", action: "LiveStats", type: "default" },
    { name: "📝 Edit Profile", action: "EditProfile", type: "default" },
    { name: "🔗 Update Link", action: "UpdateLink", type: "default" },
    { name: "📍 Region Selector", action: "Region", type: "default" },
    { name: "💳 Pay Gateway", action: "Payment", type: "default" },
    { name: "🚫 Block User", action: "Block", type: "secure" },
    { name: "⚠️ Report Abuse", action: "Report", type: "secure" },
    { name: "🗺️ Share Map", action: "Map", type: "primary" },
    { name: "💬 Chat Support", action: "Support", type: "primary" }
  ];

  return (
    <Layout>
      <div style={{ width: '100%', padding: '10px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* हेडर सेक्शन */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 5px 0' }}>Moin Raja's Control Hub</h3>
          <p style={{ fontSize: '11px', color: '#888' }}>📡 Server: {serverUrl} | 22 Features Active</p>
        </div>

        {/* 22 फीचर्स का ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {features.map((f, index) => (
            <button 
              key={index} 
              onClick={() => handleServerAction(f.action)} 
              style={getButtonStyle(f.type)}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// बटन्स का स्टाइल फंक्शन
const getButtonStyle = (type) => {
  const base = { padding: '12px', fontSize: '11px', borderRadius: '10px', border: 'none', cursor: 'pointer', textAlign: 'center', fontWeight: 'bold' };
  if (type === 'golden') return { ...base, background: '#FFD700', color: '#000' };
  if (type === 'secure') return { ...base, background: '#ff4757', color: '#fff' };
  if (type === 'primary') return { ...base, background: '#0095f6', color: '#fff' };
  return { ...base, background: '#eee', color: '#000' };
};

export default MessengerPage;
