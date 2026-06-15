import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [profile, setProfile] = useState({
    name: 'RangManch Global',
    bio: 'Official Global Portal | Digital Creator',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  });
  const navigate = useNavigate();

  // पेज लोड होते ही सारा डेटा यहाँ से अपडेट हो जाएगा
  useEffect(() => {
    setProfile({
      name: localStorage.getItem('profileName') || 'RangManch Global',
      bio: localStorage.getItem('profileBio') || 'Official Global Portal | Digital Creator',
      image: localStorage.getItem('profileImage') || 'https://www.w3schools.com/howto/img_avatar.png'
    });
  }, []);

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
      <div style={{ padding: '12px', background: '#f8f8f8', borderRadius: '8px', textAlign: 'center', marginBottom: '25px', border: '1px solid #eee' }}>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#555' }}>📡 Server Hub: Online</h4>
        <button onClick={() => alert('Syncing All 75+ Features...')} style={{ background: '#000', color: '#fff', border: 'none', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>Sync Database</button>
      </div>

      {/* 2. हेडर */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>rangmanch_official</h2>
        <button onClick={() => setShowMenu(!showMenu)} style={{ border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer' }}>☰</button>
      </div>

      {/* 3. फोटो (जो अब अपडेट होगी) और Stats */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
        <img src={profile.image} style={{ width: '85px', height: '85px', borderRadius: '50%', border: '1px solid #ddd', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>1.2K</div><div style={{ fontSize: '12px', color: '#666' }}>Posts</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>50K</div><div style={{ fontSize: '12px', color: '#666' }}>Followers</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>150</div><div style={{ fontSize: '12px', color: '#666' }}>Following</div></div>
        </div>
      </div>

      {/* 4. नाम और बायो (अब सही से अपडेट होंगे) */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{profile.name}</div>
        <div style={{ fontSize: '14px', color: '#333' }}>{profile.bio}</div>
      </div>

      {/* 5. बड़े बटन्स */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => navigate('/profile-edit')} style={bigBtn}>Edit</button>
        <button onClick={() => navigate('/messenger')} style={bigBtn}>Message</button>
        <button onClick={() => alert('Followed!')} style={{...bigBtn, background: '#000', color: '#fff'}}>Follow</button>
      </div>

      {/* 6. स्टोरी और बूस्ट बटन */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
        <button onClick={() => navigate('/story-create')} style={bigBtn}>+ Story</button>
        <button onClick={() => navigate('/boost-dashboard')} style={bigBtn}>Boost</button>
      </div>

      {/* मेनू */}
      {showMenu && (
        <div style={{ position: 'absolute', top: '80px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '200px', maxHeight: '300px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
          {allExtraButtons.map(item => (
            <div key={item} onClick={() => { setShowMenu(false); navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0', fontSize: '13px' }}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const bigBtn = { padding: '12px 0', borderRadius: '8px', border: '1px solid #ddd', background: '#f0f0f0', cursor: 'pointer', flex: 1, fontSize: '13px', fontWeight: 'bold', color: '#000' };

export default ProfilePage;
