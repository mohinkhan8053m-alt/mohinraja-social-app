import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiProvider, useApi } from './ApiContext'; // सर्वर कनेक्शन लाइन 1

const MasterProfilePage = () => {
  const navigate = useNavigate();
  const [activePanel, setActivePanel] = useState(null);

  // 1. पूरी सेटिंग्स किट (17 फीचर्स)
  const settingsKit = ["Privacy", "Account Details", "Wallet", "Bank/UPI", "Premium", "Enterprise", "Promote", "Dark Mode", "Notifications", "Data Backup", "Cache Clear", "Version Info", "Help & Support", "Report Bug", "Terms & Policy", "Logout", "Delete Account"];

  // 2. पूरा मैसेंजर (लोकेशन सहित)
  const messengerKit = ["AI Translate", "Send Gift", "Send Location", "Block User", "Report", "Auto-Mod", "Clear Chat", "Video Call", "Voice AI", "Share Media", "Attach File", "Pin Chat", "Mute Notifications", "Delete Chat"];

  // 3. पूरा लोकल टूलकिट
  const localTools = ["Dark Mode", "Language", "Activity", "Help", "Invite", "Girl Filter", "Zoom", "Focus", "Record", "Posts View", "Followers View", "Following View"];

  // 4. बूस्टिंग टूलकिट
  const boostKit = ["AdSense Apply", "Premium Toggle", "Get Analytics", "Local Ad Control", "Global Ad Manager", "Force Ad Trigger"];

  // 5. सर्वर फीचर्स (जहाँ बाद में डेटाबेस जुड़ेगा)
  const serverKit = ["Wallet", "Bank/UPI", "Premium", "Admin Panel", "Global Ads", "AI Chat Translate", "Voice AI", "Block User"];

  return (
    <ApiProvider> {/* सर्वर कनेक्शन लाइन 2 */}
      <div style={{ width: '100%', minHeight: '100vh', background: '#fff', paddingBottom: '80px' }}>
        
        {/* ग्लोबल प्रोमो बैनर */}
        <div style={{ background: '#000', color: '#FFD700', padding: '10px', textAlign: 'center' }}>
          📢 Global Partner: RangManch Live Active
        </div>

        {/* टॉप हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
          <button onClick={() => setActivePanel('settings')}>⚙️ Settings</button>
          <h2>Mohin Raja</h2>
          <button onClick={() => setActivePanel('menu')}>⋮ Menu</button>
        </header>

        {/* प्रोफाइल और एक्शन बार */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ccc', margin: 'auto' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '15px' }}>
            <button onClick={() => alert('Followed!')}>Follow</button>
            <button onClick={() => setActivePanel('messenger')}>Message</button>
            <button onClick={() => navigate('/video-call')}>📹 Video Call</button>
            <button onClick={() => setActivePanel('boost')}>🚀 Boost</button>
            <button onClick={() => alert('Story Opened')}>+ Add Story</button>
            <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
          </div>
        </div>

        {/* डायनामिक पैनल (सब कुछ यहाँ खुलेगा) */}
        {activePanel === 'settings' && <Panel title="Settings Toolkit" items={settingsKit} />}
        {activePanel === 'menu' && <Panel title="Menu & Local Tools" items={[...localTools, ...serverKit]} />}
        {activePanel === 'messenger' && <Panel title="Messenger Toolkit" items={messengerKit} />}
        {activePanel === 'boost' && <Panel title="Boosting Toolkit" items={boostKit} />}

        {/* बॉटम नेविगेशन */}
        <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#fff', display: 'flex', justifyContent: 'space-around', padding: '15px', borderTop: '1px solid #ddd' }}>
          <button onClick={() => navigate('/home')}>🏠</button>
          <button onClick={() => navigate('/explore')}>🔍</button>
          <button onClick={() => setActivePanel('messenger')}>💬</button>
          <button onClick={() => navigate('/video-call')}>📹</button>
          <button onClick={() => navigate('/profile')}>👤</button>
        </nav>
      </div>
    </ApiProvider>
  );
};

// हर बटन के लिए मास्टर पैनल (पूरा सिस्टम)
const Panel = ({ title, items }) => (
  <div style={{ padding: '15px', background: '#f9f9f9', borderTop: '2px solid #333' }}>
    <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' }}>
      {items.map(item => (
        <button key={item} onClick={() => alert(`[SERVER SLOT]: Executing ${item} ...`)} style={{ padding: '8px', fontSize: '11px' }}>
          {item}
        </button>
      ))}
    </div>
  </div>
);

export default MasterProfilePage;
