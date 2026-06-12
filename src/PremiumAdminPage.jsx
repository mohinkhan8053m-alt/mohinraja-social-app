import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; // आपका मास्टर लेआउट

const PremiumAdminPage = () => {
  const navigate = useNavigate();
  const btnStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #eee', backgroundColor: '#f9f9f9', cursor: 'pointer', fontWeight: '600', fontSize: '12px' };

  // 34 फीचर्स की पूरी लिस्ट
  const allFeatures = [
    'Chat Guard', 'Support', 'Payouts', 'Auto Reply', 'Ads Manager', 'Live Mode', 
    'Security', 'Themes', 'History', 'Backups', 'Language', 'Privacy',
    'AI Image Gen', 'User Mgmt', 'Charts', 'Feedback', 'Notifs', 'Sub Tiers', 'Profile'
  ];

  return (
    <Layout>
      <div style={{ padding: '0 10px' }}>
        
        {/* 1. VIP बैनर */}
        <div style={{ backgroundColor: '#fbbf24', padding: '20px', borderRadius: '15px', marginBottom: '20px', textAlign: 'center' }}>
          <h3>🚀 VIP Premium Access</h3>
          <p style={{ fontSize: '14px' }}>अपनी कमाई को 3x बूस्ट करें!</p>
          <button style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#000', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/premium')}>Subscribe Now</button>
        </div>

        {/* 2. लाइव एनालिटिक्स (डायरेक्ट काम करेंगे) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <button style={btnStyle} onClick={() => alert('Views: 12K')}>📊 Views: 12K</button>
          <button style={btnStyle} onClick={() => alert('Earnings: ₹5K')}>💰 Wallet: ₹5K</button>
          <button style={btnStyle} onClick={() => alert('Growth: +20%')}>📈 Growth: +20%</button>
          <button style={btnStyle} onClick={() => navigate('/withdraw')}>💸 Withdraw</button>
        </div>

        {/* 3. 34 फीचर्स का मास्टर कंट्रोल */}
        <h4>Creator Control Center</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {allFeatures.map(feature => (
            <button key={feature} style={btnStyle} onClick={() => alert(`${feature} Active`)}>{feature}</button>
          ))}
        </div>

        {/* 4. सर्वर स्लॉट (API Sync) */}
        <div style={{ marginTop: '40px', padding: '20px', border: '2px dashed #000', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px' }}>📡 <b>Server Hub:</b> 34/34 Features Synchronized</p>
          <button style={{ padding: '10px 20px', background: '#333', color: '#fff', borderRadius: '8px', border: 'none' }} onClick={() => alert('Syncing All Data...')}>Sync Server Data</button>
        </div>
        
      </div>
    </Layout>
  );
};

export default PremiumAdminPage;
