import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const creators = [
  { id: 1, name: "Sana", status: "online", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", rewards: 1500, isPremium: true },
  { id: 2, name: "Priya", status: "online", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", rewards: 800, isPremium: false },
  { id: 3, name: "Neha", status: "offline", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", rewards: 2200, isPremium: true },
].sort((a, b) => b.rewards - a.rewards);

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '80px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* प्रीमियम हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 15px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '800', letterSpacing: '-1px', color: '#000' }}>RangManch</h2>
          <button 
            onClick={() => alert('Menu: Wallet, Bank, Profile, Stats, Settings')} 
            style={{ border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer', color: '#000' }}
          >
            ⋮
          </button>
        </header>

        {/* क्रिएटर ग्रिड - प्रीमियम लुक */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '10px' }}>
          {creators.map(c => (
            <div key={c.id} style={{ border: '1px solid #f0f0f0', borderRadius: '20px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <img src={c.image} style={{ width: '100%', height: '170px', objectFit: 'cover' }} />
              <div style={{ padding: '12px' }}>
                <p style={{ margin: '0', fontWeight: '700', fontSize: '15px' }}>{c.name}</p>
                <p style={{ margin: '4px 0', fontSize: '11px', color: '#888' }}>⭐ {c.rewards} Rewards</p>
                <button 
                  onClick={() => navigate(c.isPremium ? '/payment' : '/messenger')}
                  style={{ width: '100%', marginTop: '10px', padding: '8px', background: c.isPremium ? '#000' : '#f4f4f4', border: 'none', borderRadius: '12px', color: c.isPremium ? '#fff' : '#000', fontWeight: '600', fontSize: '12px' }}
                >
                  {c.isPremium ? 'Unlock Chat' : 'Chat Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
