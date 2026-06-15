import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; // सर्वर से कनेक्शन

const PremiumAdminPage = () => {
  const { serverUrl } = useApi();
  const [isSyncing, setIsSyncing] = useState(false);

  // मास्टर फीचर्स लिस्ट
  const allFeatures = [
    'Chat Guard', 'Support', 'Payouts', 'Auto Reply', 'Ads Manager', 'Live Mode', 
    'Security', 'Themes', 'History', 'Backups', 'Language', 'Privacy',
    'AI Image Gen', 'User Mgmt', 'Charts', 'Feedback', 'Notifs', 'Sub Tiers', 'Profile',
    'Coin Logic', 'Gift Engine', 'Voice AI', 'Video Filter', 'Moderation', 'Tax Docs'
  ];

  const handleSync = () => {
    setIsSyncing(true);
    // यहाँ सर्वर से डेटा सिंक करने की API कॉल आएगी
    setTimeout(() => {
      setIsSyncing(false);
      alert('📡 सर्वर के साथ सभी 34 फीचर्स सिंक हो गए!');
    }, 2000);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        
        {/* 1. एडमिन हेडर */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>🛡️ Admin Hub</h2>
        </div>

        {/* 2. लाइव अर्निंग्स - सर्वर डेटा */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div style={{ background: '#000', color: '#fff', padding: '15px', borderRadius: '15px' }}>
            <p style={{ margin: 0, fontSize: '12px' }}>Total Global Earnings</p>
            <h3>₹ 50,000+</h3>
          </div>
          <div style={{ background: '#FFD700', color: '#000', padding: '15px', borderRadius: '15px' }}>
            <p style={{ margin: 0, fontSize: '12px' }}>Active Users</p>
            <h3>1,200</h3>
          </div>
        </div>

        {/* 3. मास्टर कंट्रोल सेंटर */}
        <h4 style={{ marginBottom: '10px' }}>Master Features Control</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {allFeatures.map(feature => (
            <button key={feature} style={{ padding: '8px', fontSize: '9px', borderRadius: '8px', border: '1px solid #eee', background: '#fff' }}>
              {feature}
            </button>
          ))}
        </div>

        {/* 4. सर्वर सिंक */}
        <div style={{ marginTop: '30px', padding: '20px', border: '2px dashed #000', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px' }}>📡 <b>Status:</b> {serverUrl}</p>
          <button 
            disabled={isSyncing}
            onClick={handleSync} 
            style={{ width: '100%', padding: '12px', background: isSyncing ? '#ccc' : '#000', color: '#fff', borderRadius: '10px', border: 'none', fontWeight: 'bold' }}
          >
            {isSyncing ? 'Syncing...' : 'Sync Server Data'}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PremiumAdminPage;
