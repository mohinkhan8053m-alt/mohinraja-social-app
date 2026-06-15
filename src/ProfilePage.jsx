import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // यह रही आपकी पूरी 75+ फीचर्स की लिस्ट
  const allExtraButtons = [
    "Wallet", "Bank", "Stats", "Posts", "Live", "Ads", "Help", "Privacy", "Security", 
    "AI Translate", "Gift", "Location", "Block", "Report", "Language", "Activity",
    "Invite", "Girl Filter", "Zoom", "Focus", "Record", "Coins", "Rewards", "Partnerships",
    "Account Details", "Premium", "Enterprise", "Promote", "Dark Mode", "Notifications", 
    "Data Backup", "Cache Clear", "Version Info", "Report Bug", "Terms & Policy", "Logout", 
    "Delete Account", "Auto-Mod", "Clear Chat", "Video Call", "Voice AI", "Share Media", 
    "Attach File", "Pin Chat", "Mute Notifications", "Delete Chat", "Posts View", 
    "Followers View", "Following View", "Daily Rewards", "Pop-up Ads", "Company Ads", 
    "Live Streaming", "Drafts", "AdSense Apply", "Premium Toggle", "Get Analytics", 
    "Local Ad Control", "Global Ad Manager", "Force Ad Trigger", "Current Location", 
    "Live Tracking", "Set Address", "Find Nearby", "Reels Integration", "Story Highlights", 
    "Archive", "Text Edit", "Add Media", "Campaign View", "Budget Set", "Targeting",
    "Pro Tools", "Affiliate", "Subscription", "Support Ticket", "Verified Badge"
  ];

  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh', position: 'relative' }}>
      {/* हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h2 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', margin: 0, fontSize: '24px', letterSpacing: '1px' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate('/partnerships')} style={{ fontSize: '18px', border: 'none', background: 'none', cursor: 'pointer' }}>🤝</button>
          <button onClick={() => navigate('/settings')} style={{ fontSize: '18px', border: 'none', background: 'none', cursor: 'pointer' }}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '18px', border: 'none', background: 'none', cursor: 'pointer' }}>⋮</button>
        </div>
      </header>

      {/* प्रोफेशनल प्रोफाइल सेक्शन */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '12px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd' }}>
            <span style={{ fontSize: '30px' }}>⚡</span>
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: '18px' }}>RangManch Global</h3>
          <p style={{ margin: '5px 0 0 0', color: '#0095f6', fontSize: '13px', fontWeight: '600' }}>Verified Official Account</p>
        </div>
      </div>

      {/* 3 डॉट मेनू */}
      {showMenu && (
        <div style={{ position: 'absolute', right: '20px', top: '70px', background: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', zIndex: 999, maxHeight: '350px', overflowY: 'auto', width: '180px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          {allExtraButtons.map(item => (
            <div 
              key={item} 
              onClick={() => { setShowMenu(false); navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`); }} 
              style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9', fontSize: '14px' }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* मुख्य 5 बटन्स */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
        <button onClick={() => navigate('/profile-edit')} style={bigBtnStyle}>Edit Profile</button>
        <button onClick={() => navigate('/messenger')} style={bigBtnStyle}>Message</button>
        <button onClick={() => alert('Followed! ✅')} style={{ ...bigBtnStyle, background: '#0095f6', color: '#fff' }}>Follow</button>
        <button onClick={() => navigate('/boost-dashboard')} style={bigBtnStyle}>Boost</button>
        <button onClick={() => navigate('/home')} style={bigBtnStyle}>Home</button>
      </div>
      
      {/* सर्वर हब (यहाँ आपकी API/Database कनेक्टिविटी रहेगी) */}
      <div style={{ padding: '20px', border: '2px dashed #0095f6', textAlign: 'center', borderRadius: '12px', background: '#f9fbff', marginTop: 'auto' }}>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#000' }}>📡 Server Hub: System Operational</h4>
        <p style={{ fontSize: '11px', color: '#555' }}>Global API Gateway Active | 75+ Modules Sync Ready</p>
        <button onClick={() => alert('Syncing Data...')} style={{ marginTop: '10px', padding: '8px 20px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Sync Database</button>
      </div>
    </div>
  );
};

const bigBtnStyle = { padding: '12px 2px', fontSize: '12px', fontWeight: '600', borderRadius: '6px', border: '1px solid #eee', background: '#fff', cursor: 'pointer', flex: 1 };

export default ProfilePage;
