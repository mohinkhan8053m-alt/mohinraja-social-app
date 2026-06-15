import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // सारे 60+ बटन्स की फुल लिस्ट (एक भी नाम नहीं छूटा)
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

  const bigBtnStyle = { 
    padding: '16px 2px', fontSize: '13px', fontWeight: 'bold', 
    borderRadius: '10px', border: '1px solid #ddd', background: '#f8f8f8',
    cursor: 'pointer', flex: 1 
  };

  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh' }}>
      
      {/* हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0, fontSize: '26px' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate('/settings')} style={{ fontSize: '22px', border: 'none', background: 'none' }}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '22px', border: 'none', background: 'none' }}>⋮</button>
        </div>
      </header>

      {/* 3 डॉट मेनू - अब इसमें 70+ फीचर्स की लिस्ट है */}
      {showMenu && (
        <div style={{ 
          position: 'absolute', right: '20px', top: '70px', background: '#fff', 
          border: '1px solid #ccc', padding: '10px', borderRadius: '10px', 
          zIndex: 100, maxHeight: '350px', overflowY: 'auto', width: '180px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' 
        }}>
          {allExtraButtons.map(item => (
            <div key={item} onClick={() => navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`)} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0' }}>
              {item}
            </div>
          ))}
        </div>
      )}

      <div style={{ color: '#D4AF37', fontWeight: 'bold', marginBottom: '15px' }}>⭐ Premium Member</div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ width: '95px', height: '95px', borderRadius: '50%', background: '#eee', margin: 'auto' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
          <span><b>45</b> Posts</span> <span><b>1.2K</b> Followers</span> <span><b>850</b> Following</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
        <button onClick={() => navigate('/edit')} style={bigBtnStyle}>Edit</button>
        <button onClick={() => navigate('/messenger')} style={bigBtnStyle}>Message</button>
        <button onClick={() => alert('Followed!')} style={{ ...bigBtnStyle, background: '#0095f6', color: '#fff' }}>Follow</button>
        <button onClick={() => navigate('/boost')} style={bigBtnStyle}>Boost</button>
        <button onClick={() => navigate('/story')} style={bigBtnStyle}>Story</button>
      </div>

      <div style={{ padding: '25px', border: '2px dashed #333', textAlign: 'center', borderRadius: '12px', background: '#fafafa' }}>
        📡 <b>Server Hub:</b> [Ready to Link Database]
      </div>
    </div>
  );
};

export default MasterProfilePage;
