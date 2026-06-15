import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // आपके सभी 75+ फीचर्स
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
    "Pro Tools", "Affiliate", "Subscription", "Support Ticket", "Verified Badge",
    "Cloud Sync", "Guest Mode", "Analytics Pro", "Theme Store", "Font Settings"
  ];

  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* 1. सर्वर हब - सबसे ऊपर और प्रोफेशनल */}
      <div style={{ padding: '15px', background: '#eef6ff', borderRadius: '12px', textAlign: 'center', marginBottom: '20px', border: '1px solid #d1e4ff' }}>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#0056b3' }}>📡 Server Hub: System Online</h4>
        <button onClick={() => alert('Syncing All 75+ Modules...')} style={{ background: '#0095f6', color: '#fff', border: 'none', padding: '6px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Sync Database</button>
      </div>

      {/* 2. हेडर */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0 }}>rangmanch_official</h2>
        <button onClick={() => setShowMenu(!showMenu)} style={{ border: 'none', background: 'none', fontSize: '26px', cursor: 'pointer' }}>☰</button>
      </div>

      {/* 3. प्रोफाइल फोटो और Stats */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
        <img src="https://www.w3schools.com/howto/img_avatar.png" style={{ width: '85px', height: '85px', borderRadius: '50%', border: '1px solid #ddd' }} />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>1.2K</div><div style={{ fontSize: '12px', color: '#666' }}>Posts</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>50K</div><div style={{ fontSize: '12px', color: '#666' }}>Followers</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>150</div><div style={{ fontSize: '12px', color: '#666' }}>Following</div></div>
        </div>
      </div>

      {/* 4. बायो */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontWeight: 'bold' }}>RangManch Global</div>
        <div style={{ fontSize: '14px', color: '#444' }}>Official Global Portal | Digital Creator</div>
      </div>

      {/* 5. मुख्य एक्शन बटन्स */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <button onClick={() => navigate('/profile-edit')} style={btnStyle}>Edit Profile</button>
        <button onClick={() => navigate('/messenger')} style={btnStyle}>Message</button>
        <button onClick={() => alert('Followed! ✅')} style={{...btnStyle, background: '#0095f6', color: '#fff'}}>Follow</button>
      </div>

      {/* 6. मेनू (3 लाइन वाला) */}
      {showMenu && (
        <div style={{ position: 'absolute', top: '100px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '10px', width: '220px', maxHeight: '400px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
          {allExtraButtons.map(item => (
            <div key={item} onClick={() => { setShowMenu(false); navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`); }} style={{ padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0', fontSize: '14px' }}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const btnStyle = { padding: '10px 0', borderRadius: '6px', border: '1px solid #ddd', background: '#f8f8f8', cursor: 'pointer', flex: 1, fontSize: '13px', fontWeight: 'bold' };

export default ProfilePage;
