import React, { useState, useEffect } from 'react';
import { PaymentServer } from './PaymentServer.js';

const PremiumAdminPage = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [financeData, setFinanceData] = useState({ earnings: 0, activeUsers: 0 });

  useEffect(() => {
    // हमने PaymentServer में 'getMasterData' बनाया है, उसका इस्तेमाल करें
    // अगर फाइनेंस डेटा सर्वर से लेना है, तो PaymentServer में एक नया फंक्शन जोड़ें या fetch करें
    fetch(`${PaymentServer.proServer}/api/admin/finance`)
      .then(res => res.json())
      .then(data => setFinanceData(data))
      .catch(err => console.log("Finance Data Fetch Error:", err));
  }, []);

  const allFeatures = [
    'Chat Guard', 'Support', 'Payouts', 'Auto Reply', 'Ads Manager', 'Live Mode', 
    'Security', 'Themes', 'History', 'Backups', 'Language', 'Privacy',
    'AI Image Gen', 'User Mgmt', 'Charts', 'Feedback', 'Notifs', 'Sub Tiers', 'Profile',
    'Coin Logic', 'Gift Engine', 'Voice AI', 'Video Filter', 'Moderation', 'Tax Docs',
    'Geo-Block', 'Server Logs', 'API Keys', 'Banned IPs', 'Gateways', 
    'Campaigns', 'SEO Config', 'Admin Roles', 'Fraud Check'
  ];

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      const response = await fetch(`${PaymentServer.proServer}/api/admin/sync`, { method: 'POST' });
      const result = await response.json();
      if (result.success) {
        alert('✅ मोइन भाई, फाइनेंस और फीचर्स का मास्टर सिंक पूरा हुआ!');
      } else {
        alert('⚠️ सिंक फेल! सर्वर रिस्पॉन्स चेक करें।');
      }
    } catch (error) {
      alert('⚠️ कनेक्शन एरर! सर्वर से संपर्क नहीं हो पा रहा।');
    }
    setIsSyncing(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', background: '#fff', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#000' }}>🛡️ Admin Hub (Finance Linked)</h2>
        <span style={{ fontSize: '10px', background: '#FFD700', padding: '5px 10px', borderRadius: '15px', fontWeight: 'bold' }}>Payment Master</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
        <div style={{ background: '#000', color: '#fff', padding: '15px', borderRadius: '15px' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#ccc' }}>Total Global Earnings</p>
          <h3 style={{ margin: '5px 0 0 0', color: '#FFD700' }}>₹ {financeData.earnings}</h3>
        </div>
        <div style={{ background: '#FFD700', color: '#000', padding: '15px', borderRadius: '15px' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#333' }}>Total Payouts Done</p>
          <h3 style={{ margin: '5px 0 0 0' }}>{financeData.activeUsers}</h3>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
        {allFeatures.map(feature => (
          <button key={feature} style={featureBtnStyle}>{feature}</button>
        ))}
      </div>

      <div style={{ marginTop: '30px', padding: '20px', border: '2px dashed #000', borderRadius: '15px', textAlign: 'center' }}>
        <button disabled={isSyncing} onClick={handleSync} style={syncBtnStyle(isSyncing)}>
          {isSyncing ? '🔄 SYNCING FINANCE...' : 'SYNC ALL LOGS TO PAYMENT SERVER 🚀'}
        </button>
      </div>
    </div>
  );
};

const featureBtnStyle = { padding: '8px 2px', fontSize: '9px', borderRadius: '6px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontWeight: 'bold' };
const syncBtnStyle = (isSyncing) => ({ width: '100%', padding: '15px', background: isSyncing ? '#555' : '#000', color: '#FFD700', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer' });

export default PremiumAdminPage;
