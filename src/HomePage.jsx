import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; // सर्वर कनेक्शन
import { getCurrencyData } from './CurrencyConfig.js'; // प्राइसिंग हब

const creators = [
  { id: 1, name: "Sana", countryCode: "IN", status: "online", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", isPremium: true },
  { id: 2, name: "Maria", countryCode: "UAE", status: "online", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", isPremium: false },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { serverUrl } = useApi();

  const handlePremiumCall = (c) => {
    const confirm = window.confirm("⚠️ Security Warning: Nudity/Abuse will result in permanent ban. Proceed to secure VIP call?");
    if (confirm) navigate(`/video-call/${c.id}`);
  };

  return (
    <Layout>
      <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: '80px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* हेडर: कोई डुप्लीकेट नाम नहीं, सिर्फ बैलेंस */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', margin: 0 }}>VIP Feed</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => navigate('/wallet')} style={{ background: '#000', color: '#fbbf24', border: 'none', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold' }}>💰 250 Coins</button>
          </div>
        </header>

        {/* क्रिएटर ग्रिड - अब हर फीचर जिंदा है */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '10px' }}>
          {creators.map(c => {
            const config = getCurrencyData(c.countryCode);
            return (
              <div key={c.id} style={{ border: '1px solid #f0f0f0', borderRadius: '20px', padding: '10px', background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span>{config.symbol}</span>
                  <span style={{ color: 'green' }}>● {c.status}</span>
                </div>
                <img src={c.image} style={{ width: '100%', height: '120px', borderRadius: '15px', objectFit: 'cover', margin: '5px 0' }} />
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{c.name} {c.isPremium && '💎'}</p>
                
                <button onClick={() => handlePremiumCall(c)} style={btnPrimary}>📞 Call</button>
                <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                  <button onClick={() => navigate(`/chat/${c.id}`)} style={btnSecondary}>💬 Msg</button>
                  <button style={btnSecondary}>⭐</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* एडवांस्ड टूल्स - सारे बटन लाइव किए */}
        <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '15px', margin: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
            {['Tip', 'Wallet', 'Private', 'Vol', 'Settings'].map(f => (
              <button key={f} onClick={() => navigate(`/${f.toLowerCase()}`)} style={toolBtn}>{f}</button>
            ))}
          </div>
        </div>

        <div style={{ padding: '10px', textAlign: 'center', fontSize: '10px', color: '#999' }}>
          📡 <b>Server:</b> {serverUrl}
        </div>
      </div>
    </Layout>
  );
};

const btnPrimary = { width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold' };
const btnSecondary = { flex: 1, padding: '8px', background: '#eee', border: 'none', borderRadius: '8px', fontSize: '12px' };
const toolBtn = { fontSize: '9px', padding: '5px', border: '1px solid #ddd', borderRadius: '5px', background: '#fff' };

export default HomePage;
