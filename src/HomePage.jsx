import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

// डेटा में झंडे और रेट्स भी जोड़ दिए हैं
const creators = [
  { id: 1, name: "Sana", country: "India", flag: "🇮🇳", status: "online", rate: 50, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", isPremium: true },
  { id: 2, name: "Maria", country: "Dubai", flag: "🇦🇪", status: "online", rate: 80, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", isPremium: false },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handlePremiumCall = (c) => {
    const confirm = window.confirm("⚠️ Security Warning: Nudity/Abuse will result in permanent ban and wallet forfeiture. Proceed to secure VIP call?");
    if (confirm) navigate(`/video-call/${c.id}`);
  };

  return (
    <Layout>
      <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: '80px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* हेडर: यहाँ आपका बैलेंस चेकर है */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800' }}>RangManch VIP</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => navigate('/wallet')} style={{ background: '#000', color: '#fbbf24', border: 'none', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
              💰 250 Coins
            </button>
            <button onClick={() => alert("Watch Ads to get 10 Coins!")} style={{ background: '#FFD700', border: 'none', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold' }}>+ Ad</button>
          </div>
        </header>

        {/* विज्ञापन स्लॉट */}
        <div style={{ margin: '10px', height: '80px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
          [Premium Global Ad Spot]
        </div>

        {/* क्रिएटर ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '10px' }}>
          {creators.map(c => (
            <div key={c.id} style={{ border: '1px solid #f0f0f0', borderRadius: '20px', padding: '10px', background: '#fff', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{c.flag}</span>
                <span style={{ fontSize: '10px', color: 'green' }}>● {c.status}</span>
              </div>
              <img src={c.image} style={{ width: '100%', height: '140px', borderRadius: '15px', objectFit: 'cover' }} />
              <p style={{ margin: '8px 0 0 0', fontWeight: 'bold' }}>{c.name} {c.isPremium && '💎'}</p>
              <p style={{ fontSize: '12px', color: '#666' }}>{c.rate} Coins/min</p>
              
              <button onClick={() => handlePremiumCall(c)} style={{ width: '100%', padding: '12px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '50px', fontWeight: 'bold', marginBottom: '5px' }}>
                📞 Start VIP Call
              </button>

              <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => navigate(`/chat/${c.id}`)} style={{ flex: 1, padding: '8px', background: '#eee', border: 'none', borderRadius: '10px' }}>💬 Msg</button>
                <button style={{ flex: 1, padding: '8px', background: '#ff4757', color: '#fff', border: 'none', borderRadius: '10px' }}>⭐ Follow</button>
              </div>
            </div>
          ))}
        </div>

        {/* नीचे के एडवांस टूल्स (जो पहले थे) */}
        <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '15px', margin: '10px' }}>
          <p style={{ fontSize: '10px', textAlign: 'center', color: '#777' }}>Advanced Engine Tools</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
            {['Tip', 'Wallet', 'Private', 'Vol', 'Settings'].map(f => (
              <button key={f} style={{ fontSize: '9px', padding: '5px', border: '1px solid #ddd', borderRadius: '5px' }}>{f}</button>
            ))}
          </div>
        </div>

        <div style={{ padding: '20px', textAlign: 'center', fontSize: '10px', color: '#999' }}>
          ⚠️ Security: All actions monitored. Report abuse via flag icon.
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
