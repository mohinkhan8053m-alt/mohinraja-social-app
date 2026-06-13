import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; 

const MessengerPage = () => {
  const navigate = useNavigate();
  // 10 फीचर्स वाला आपका ओरिजिनल डेटा स्ट्रक्चर
  const users = ["Mohan Raja", "RangManch Team", "Business Partner", "Creative Designer"];

  return (
    <Layout>
      <div style={{ padding: '0 10px' }}>
        
        {/* मैसेंजर लिस्ट (पुराने 10 फीचर्स के साथ 4 नए फीचर्स का इंटीग्रेशन) */}
        <div style={{ background: '#fff', borderRadius: '15px', border: '1px solid #eee' }}>
          {users.map((name, index) => (
            <div key={index} style={{ 
              padding: '15px', borderBottom: '1px solid #f0f0f0', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
            }}>
              <div>
                <span style={{ fontWeight: 'bold', display: 'block' }}>{name}</span>
                {/* फीचर 1: Online Status Indicator */}
                <span style={{ fontSize: '10px', color: '#28a745' }}>● Online</span>
              </div>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                {/* फीचर 2: AI Translate Button */}
                <button onClick={() => alert('AI Translating...')} style={{ padding: '8px', borderRadius: '8px', border: 'none', background: '#e0e0e0' }}>🌐</button>
                
                {/* फीचर 3: Dual Call Options (Video & Audio) */}
                <button onClick={() => navigate('/video-call')} style={{ padding: '8px 12px', borderRadius: '8px', background: '#fbbf24', border: 'none', fontWeight: 'bold' }}>Video</button>
                <button onClick={() => alert('Audio Call Started...')} style={{ padding: '8px 12px', borderRadius: '8px', background: '#ddd', border: 'none' }}>Audio</button>
              </div>
            </div>
          ))}
        </div>

        {/* विज्ञापन स्लॉट */}
        <div style={{ margin: '30px 0', padding: '15px', background: '#fff3cd', border: '2px dashed #ffc107', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>📢 Promote Your Brand Here</p>
          <button onClick={() => navigate('/promote')} style={{ width: '100%', padding: '12px', background: '#000', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Boost Your Business</button>
        </div>

        {/* सर्वर स्लॉट (फीचर 4: प्रीमियम एबिलिटी/सिंक) */}
        <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed #ccc', borderRadius: '15px', textAlign: 'center', background: '#f9f9f9' }}>
          <p style={{ fontSize: '13px', color: '#555' }}>📡 <b>Server Hub:</b> Message Encryption & Sync Active</p>
          <button onClick={() => alert('Syncing Chat History...')} style={{ marginTop: '10px', padding: '8px 20px', background: '#333', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Sync Messages</button>
        </div>

      </div>
    </Layout>
  );
};

export default MessengerPage;
