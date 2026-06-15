import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // आपके सभी 70+ फीचर्स की लिस्ट
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
    "Archive", "Text Edit", "Add Media", "Campaign View", "Budget Set", "Targeting"
  ];

  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh', position: 'relative' }}>
      {/* हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0, fontSize: '26px' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate('/partnerships')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>🤝</button>
          <button onClick={() => navigate('/settings')} style={{ fontSize: '22px', border: 'none', background: 'none' }}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '22px', border: 'none', background: 'none' }}>⋮</button>
        </div>
      </header>

      {/* 3 डॉट मेनू - अब इसमें सारे 70+ फीचर्स हैं */}
      {showMenu && (
        <div style={{ position: 'absolute', right: '20px', top: '70px', background: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '10px', zIndex: 999, maxHeight: '350px', overflowY: 'auto', width: '180px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          {allExtraButtons.map(item => (
            <div 
              key={item} 
              onClick={() => { setShowMenu(false); navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`); }} 
              style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0', fontSize: '14px' }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* मुख्य 5 बटन्स */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
        <button onClick={() => navigate('/profile-edit')} style={bigBtnStyle}>Edit</button>
        <button onClick={() => navigate('/messenger')} style={bigBtnStyle}>Message</button>
        <button onClick={() => alert('Followed! ✅')} style={{ ...bigBtnStyle, background: '#0095f6', color: '#fff' }}>Follow</button>
        <button onClick={() => navigate('/boost-dashboard')} style={bigBtnStyle}>Boost</button>
        <button onClick={() => navigate('/home')} style={bigBtnStyle}>Home</button>
      </div>
      
      {/* सर्वर हब - इसे मैंने प्रोफाइल के नीचे सबसे 'प्रोफेशनल' और साफ़ जगह पर रखा है */}
      <div style={{ padding: '25px', border: '2px dashed #0095f6', textAlign: 'center', borderRadius: '12px', background: '#f0f7ff', marginTop: 'auto' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>📡 Server Hub</h4>
        <p style={{ fontSize: '12px', color: '#555' }}>All 70+ Features Connected to API Provider</p>
        <button style={{ padding: '8px 16px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sync Data</button>
      </div>
    </div>
  );
};

const bigBtnStyle = { padding: '16px 2px', fontSize: '13px', fontWeight: 'bold', borderRadius: '10px', border: '1px solid #ddd', background: '#f8f8f8', cursor: 'pointer', flex: 1 };

export default ProfilePage;
