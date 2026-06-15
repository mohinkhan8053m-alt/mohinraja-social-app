import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

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
      
      {/* 1. सर्वर हब */}
      <div style={{ padding: '10px', background: '#eef6ff', borderRadius: '10px', textAlign: 'center', marginBottom: '20px', border: '1px solid #d1e4ff' }}>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#0056b3' }}>📡 Server Hub: System Online</h4>
        <button onClick={() => alert('Syncing All 75+ Modules...')} style={{ background: '#0095f6', color: '#fff', border: 'none', padding: '4px 15px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px' }}>Sync Database</button>
      </div>

      {/* 2. हेडर */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>rangmanch_official</h2>
        <button onClick={() => setShowMenu(!showMenu)} style={{ border: 'none', background: 'none', fontSize: '22px', cursor: 'pointer' }}>☰</button>
      </div>

      {/* 3. प्रोफाइल फोटो और Stats */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <img src="https://www.w3schools.com/howto/img_avatar.png" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid #ddd' }} />
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>1.2K</div><div style={{ fontSize: '11px', color: '#666' }}>Posts</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>50K</div><div style={{ fontSize: '11px', color: '#666' }}>Followers</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>150</div><div style={{ fontSize: '11px', color: '#666' }}>Following</div></div>
        </div>
      </div>

      {/* 4. बायो */}
      <div style={{ marginBottom: '15px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>RangManch Global</div>
        <div style={{ fontSize: '13px', color: '#444' }}>Official Global Portal | Digital Creator</div>
      </div>

      {/* 5. किट: Edit, Story, Boost, Message, Follow */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button onClick={() => navigate('/profile-edit')} style={btnStyle}>Edit</button>
        <button onClick={() => navigate('/story-create')} style={{...btnStyle, background: '#ff4757', color: '#fff', border:'none'}}>+ Story</button>
        <button onClick={() => navigate('/boost-dashboard')} style={{...btnStyle, background: '#2ed573', color: '#fff', border:'none'}}>Boost</button>
        <button onClick={() => navigate('/messenger')} style={btnStyle}>Msg</button>
        <button onClick={() => alert('Followed! ✅')} style={{...btnStyle, background: '#0095f6', color: '#fff', border:'none'}}>Follow</button>
      </div>

      {/* 6. मेनू (3 लाइन वाला) */}
      {showMenu && (
        <div style={{ position: 'absolute', top: '80px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '200px', maxHeight: '350px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
          {allExtraButtons.map(item => (
            <div key={item} onClick={() => { setShowMenu(false); navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0', fontSize: '13px' }}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const btnStyle = { padding: '8px 10px', borderRadius: '5px', border: '1px solid #ddd', background: '#f8f8f8', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' };

export default ProfilePage;
