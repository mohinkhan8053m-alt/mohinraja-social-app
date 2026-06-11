import React from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumAdminPage = () => {
  const navigate = useNavigate();

  // प्रीमियम स्टाइलिंग
  const btnStyle = { padding: '12px 18px', margin: '6px', borderRadius: '12px', border: '1px solid #e0e0e0', backgroundColor: '#fff', cursor: 'pointer', fontWeight: '600', transition: '0.3s' };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. ब्रांडेड हेडर (बाएं: RangManch, दाएं: Settings) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'cursive', fontSize: '28px', margin: 0 }}>RangManch</h2>
        <button style={btnStyle} onClick={() => navigate('/settings')}>⚙️ Settings</button>
      </header>

      {/* 2. प्रीमियम बैनर (VIP Access) */}
      <section style={{ backgroundColor: '#fbbf24', padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
        <h3>🚀 VIP Premium Access</h3>
        <p>अपनी कमाई को 3x बूस्ट करें!</p>
        <button style={{...btnStyle, backgroundColor: '#000', color: '#fff'}} onClick={() => alert('Redirecting to Payment...')}>Subscribe Now</button>
      </section>

      {/* 3. लाइव एनालिटिक्स और वॉलेट (नए फीचर्स) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <button style={btnStyle} onClick={() => alert('Views: 12K')}>📊 Views: 12K</button>
        <button style={btnStyle} onClick={() => alert('Earnings: ₹5K')}>💰 Wallet: ₹5K</button>
        <button style={btnStyle} onClick={() => alert('Growth: +20%')}>📈 Growth: +20%</button>
        <button style={btnStyle} onClick={() => alert('Withdrawal Initiated')}>💸 Withdraw</button>
      </div>

      {/* 4. मास्टर कंट्रोल (18 फीचर्स) */}
      <div>
        <h4>Creator Control Center</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {['Chat Guard', 'Support', 'Payouts', 'Auto Reply', 'Ads Manager', 'Live Mode', 'Security', 'Themes', 'History', 'Backups', 'Language', 'Privacy'].map(btn => (
            <button key={btn} style={btnStyle} onClick={() => alert(`${btn} Active`)}>{btn}</button>
          ))}
        </div>
      </div>

      {/* [SERVER SLOT]: 34 फीचर्स का बैकएंड डेटा यहीं लोड होगा */}
      <div style={{ marginTop: '40px', padding: '20px', border: '2px dashed #000', borderRadius: '10px', textAlign: 'center' }}>
        <p>📡 <b>Server Hub:</b> API Synchronization active...</p>
        <button onClick={() => alert('Syncing Data...')}>Sync Server Data</button>
      </div>

      {/* 5. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button style={{backgroundColor: '#fbbf24', borderRadius: '50%', width: '50px', border: 'none'}} onClick={() => navigate('/create')}>+</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
      </nav>
    </div>
  );
};

export default PremiumAdminPage;
