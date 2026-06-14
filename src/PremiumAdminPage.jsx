import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const PremiumAdminPage = () => {
  const navigate = useNavigate();
  const [isSyncing, setIsSyncing] = useState(false);

  // आपकी 34 फीचर्स की लिस्ट
  const allFeatures = [
    'Chat Guard', 'Support', 'Payouts', 'Auto Reply', 'Ads Manager', 'Live Mode', 
    'Security', 'Themes', 'History', 'Backups', 'Language', 'Privacy',
    'AI Image Gen', 'User Mgmt', 'Charts', 'Feedback', 'Notifs', 'Sub Tiers', 'Profile',
    'Coin Logic', 'Gift Engine', 'Voice AI', 'Video Filter', 'Moderation', 'Tax Docs'
  ];

  // नया फीचर: विज्ञापन अप्रूवल लिस्ट
  const [pendingAds, setPendingAds] = useState([
    { id: 1, company: 'Global Brand X', budget: '$500' },
    { id: 2, company: 'Local Partner Y', budget: '₹10,000' }
  ]);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      alert('📡 सर्वर के साथ सभी 34 फीचर्स सिंक हो गए!');
    }, 2000);
  };

  // जादुई बटन का लॉजिक
  const approveAd = (id) => {
    alert(`✅ Campaign ${id} Live हो गया है! विज्ञापन अब पूरी दुनिया में दिखेगा।`);
    setPendingAds(pendingAds.filter(ad => ad.id !== id));
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        {/* 1. एडमिन हेडर */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>🛡️ RangManch Admin</h2>
          <button onClick={() => alert('Logout Successful')} style={{ background: '#ff4757', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Logout</button>
        </div>

        {/* 2. जादुई बटन सेक्शन - विज्ञापन अप्रूवल */}
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '15px', marginBottom: '20px', border: '1px solid #ddd' }}>
          <h4>🚀 Pending Advertisements</h4>
          {pendingAds.map(ad => (
            <div key={ad.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#fff', marginBottom: '5px', borderRadius: '8px' }}>
              <span>{ad.company} ({ad.budget})</span>
              <button onClick={() => approveAd(ad.id)} style={{ background: '#27ae60', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Approve Live</button>
            </div>
          ))}
        </div>

        {/* 3. लाइव अर्निंग्स */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div style={{ background: '#000', color: '#fff', padding: '15px', borderRadius: '15px' }}>
            <p style={{ margin: 0, fontSize: '12px' }}>Total Global Earnings</p>
            <h3>₹ 50,000 / $600</h3>
          </div>
          <div style={{ background: '#FFD700', color: '#000', padding: '15px', borderRadius: '15px' }}>
            <p style={{ margin: 0, fontSize: '12px' }}>Active Users</p>
            <h3>1,200</h3>
          </div>
        </div>

        {/* 4. मास्टर कंट्रोल सेंटर */}
        <h4>Control Center</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {allFeatures.map(feature => (
            <button key={feature} style={{ padding: '10px', fontSize: '10px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff' }}>
              {feature}
            </button>
          ))}
        </div>

        {/* 5. सर्वर सिंक */}
        <div style={{ marginTop: '30px', padding: '20px', border: '2px dashed #000', borderRadius: '15px', textAlign: 'center' }}>
          <p>📡 <b>Server Hub Status:</b> Live & Connected</p>
          <button 
            disabled={isSyncing}
            onClick={handleSync} 
            style={{ padding: '12px 25px', background: isSyncing ? '#ccc' : '#000', color: '#fff', borderRadius: '10px', border: 'none' }}
          >
            {isSyncing ? 'Syncing...' : 'Sync Server Data'}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PremiumAdminPage;
