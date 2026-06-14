import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

// मान लीजिए यह डेटा आपके डेटाबेस (Backend) से आ रहा है
const creators = [
  { id: 1, name: "Sana", country: "India", status: "online", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", isPremium: true },
  { id: 2, name: "Maria", country: "Dubai", status: "online", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", isPremium: false },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: '80px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* टॉप हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800' }}>RangManch</h2>
          <button onClick={() => alert("Watch 3 Ads to get 10 Coins!")} style={{ background: '#FFD700', border: 'none', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
            Get 10 Coins
          </button>
        </header>

        {/* विज्ञापन स्लॉट - यहाँ आपका AdProvider काम करेगा */}
        <div style={{ margin: '10px', height: '80px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
          [Premium Global Ad Spot]
        </div>

        {/* क्रिएटर ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '10px' }}>
          {creators.map(c => (
            <div key={c.id} style={{ border: '1px solid #f0f0f0', borderRadius: '20px', padding: '10px', background: '#fff', position: 'relative' }}>
              <img src={c.image} style={{ width: '100%', height: '140px', borderRadius: '15px', objectFit: 'cover' }} />
              <p style={{ margin: '8px 0 0 0', fontWeight: 'bold' }}>{c.name} <span style={{fontSize: '10px', color: c.status === 'online' ? 'green' : 'grey'}}>●</span></p>
              
              {/* एक्शन बटन्स */}
              <button 
                onClick={() => navigate(`/video-call/${c.id}`)} 
                style={{ width: '100%', padding: '8px', background: '#000', color: '#fff', border: 'none', borderRadius: '10px', marginBottom: '5px' }}
              >
                📹 Video Call
              </button>

              <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => navigate(`/chat/${c.id}`)} style={{ flex: 1, padding: '8px', background: '#eee', border: 'none', borderRadius: '10px' }}>💬 Msg</button>
                <button style={{ flex: 1, padding: '8px', background: '#ff4757', color: '#fff', border: 'none', borderRadius: '10px' }}>⭐</button>
              </div>
            </div>
          ))}
        </div>

        {/* सुरक्षा टिप: यह नीचे फुटर में हमेशा रहेगा */}
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '10px', color: '#999' }}>
          ⚠️ Security: Report abuse by clicking the flag icon during calls. <br />
          All actions are monitored for safety.
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
