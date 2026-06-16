import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from './ApiContext.jsx'; // प्रो-सर्वर यहाँ से आएगा

const ProfilePage = () => {
  const navigate = useNavigate();
  const { callProSecure } = useApi(); // 👈 प्रो-सिक्योर सर्वर का एक्सेस
  const [showMenu, setShowMenu] = useState(false);
  const [profile, setProfile] = useState({
    name: 'RangManch Global',
    bio: 'Official Global Portal | Digital Creator',
    website: 'https://rangmanch.com',
    country: '🇮🇳'
  });

  useEffect(() => {
    // सफेद पन्ने की समस्या को रोकने के लिए डिफ़ॉल्ट डेटा सेट किया
    try {
      setProfile({
        name: localStorage.getItem('profileName') || 'RangManch Global',
        bio: localStorage.getItem('profileBio') || 'Official Global Portal | Digital Creator',
        website: localStorage.getItem('profileWebsite') || 'https://rangmanch.com',
        country: localStorage.getItem('profileCountry') || '🇮🇳'
      });
    } catch (e) {
      console.error("Profile Load Error", e);
    }
  }, []);

  // प्रो-एक्शन हैंडलर: जब भी कोई फीचर बटन दबेगा, सर्वर को पता चलेगा
  const handleAction = async (actionName) => {
    await callProSecure({ feature: actionName, status: 'triggered_from_profile' });
    navigate(`/${actionName.toLowerCase().replace(/\s+/g, '-')}`);
  };

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
      {/* 1. सर्वर हब - ऑनलाइन स्टेटस */}
      <div style={{ padding: '12px', background: '#f8f8f8', borderRadius: '8px', textAlign: 'center', marginBottom: '20px', border: '1px solid #eee' }}>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#555' }}>📡 Server Hub: Online</h4>
        <button onClick={() => callProSecure({ feature: 'SYNC_DB' })} style={{ background: '#000', color: '#fff', border: 'none', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px' }}>Sync Database</button>
      </div>

      {/* 2. हेडर */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>rangmanch_official</h2>
        <button onClick={() => setShowMenu(!showMenu)} style={{ border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer' }}>☰</button>
      </div>

      {/* 3. फोटो और Stats */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
        <img src={localStorage.getItem('profileImage') || 'https://www.w3schools.com/howto/img_avatar.png'} style={{ width: '85px', height: '85px', borderRadius: '50%', border: '1px solid #ddd', objectFit: 'cover' }} alt="Profile" />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>1.2K</div><div style={{ fontSize: '11px', color: '#666' }}>Posts</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>50K</div><div style={{ fontSize: '11px', color: '#666' }}>Followers</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>150</div><div style={{ fontSize: '12px', color: '#666' }}>Following</div></div>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{profile.name}</div>
          <span>{profile.country}</span>
        </div>
        <div style={{ fontSize: '14px', color: '#333', marginTop: '5px' }}>{profile.bio}</div>
        <a href={profile.website} target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: '#0095f6', textDecoration: 'none', fontWeight: 'bold' }}>{profile.website.replace('https://', '')}</a>
      </div>

      {/* 4. बड़े बटन्स (सारे सिक्योर चैनल से कनेक्टेड) */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
        <button onClick={() => handleAction('Profile Edit')} style={bigBtn}>Edit</button>
        <button onClick={() => handleAction('Messenger')} style={bigBtn}>Message</button>
        <button onClick={() => handleAction('Follow Action')} style={{...bigBtn, background: '#000', color: '#fff'}}>Follow</button>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '25px' }}>
        <button onClick={() => handleAction('Story Create')} style={bigBtn}>+ Story</button>
        <button onClick={() => handleAction('Boost Dashboard')} style={bigBtn}>Boost</button>
      </div>

      {/* 6. मेनू (80+ फीचर्स सुरक्षित हैं) */}
      {showMenu && (
        <div style={{ position: 'absolute', top: '80px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '200px', maxHeight: '350px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
          {allExtraButtons.map(item => (
            <div key={item} onClick={() => { setShowMenu(false); handleAction(item); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0', fontSize: '13px' }}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const bigBtn = { padding: '10px 0', borderRadius: '8px', border: '1px solid #ddd', background: '#f8f8f8', cursor: 'pointer', flex: 1, fontSize: '13px', fontWeight: 'bold', color: '#000' };

export default ProfilePage;
