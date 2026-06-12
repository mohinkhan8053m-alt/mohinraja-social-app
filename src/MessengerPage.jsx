import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; // अपना नया लेआउट इम्पॉर्ट करें

const MessengerPage = () => {
  const navigate = useNavigate();
  
  // मैसेंजर के मुख्य फीचर्स (ये सीधे काम करेंगे)
  const users = ["Mohan Raja", "RangManch Team", "Business Partner", "Creative Designer"];

  return (
    <Layout>
      <div style={{ padding: '0 10px' }}>
        
        {/* 1. मैसेंजर लिस्ट */}
        <div style={{ background: '#fff', borderRadius: '15px', border: '1px solid #eee' }}>
          {users.map((name, index) => (
            <div key={index} style={{ 
              padding: '15px', borderBottom: '1px solid #f0f0f0', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
            }}>
              <span style={{ fontWeight: 'bold' }}>{name}</span>
              <button 
                onClick={() => navigate('/video-call')} 
                style={{ 
                  padding: '8px 15px', borderRadius: '8px', background: '#fbbf24', 
                  border: 'none', cursor: 'pointer', fontWeight: 'bold' 
                }}>
                Call
              </button>
            </div>
          ))}
        </div>

        {/* 2. ऐड स्लॉट (प्रमोशन फीचर) */}
        <div style={{ 
          margin: '30px 0', padding: '15px', background: '#fff3cd', 
          border: '2px dashed #ffc107', borderRadius: '15px', textAlign: 'center' 
        }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>📢 Promote Your Brand Here</p>
          <button 
            onClick={() => navigate('/promote')} 
            style={{ 
              width: '100%', padding: '12px', background: '#000', 
              color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' 
            }}>
            Boost Your Business
          </button>
        </div>

        {/* 3. सर्वर स्लॉट (बाकी एडवांस चैटिंग फीचर्स के लिए जगह) */}
        <div style={{ 
          marginTop: '20px', padding: '15px', border: '2px dashed #ccc', 
          borderRadius: '15px', textAlign: 'center', background: '#f9f9f9' 
        }}>
          <p style={{ fontSize: '13px', color: '#555' }}>📡 <b>Server Hub:</b> Message Encryption & Sync Active</p>
          <button 
            onClick={() => alert('Syncing Chat History...')}
            style={{ 
              marginTop: '10px', padding: '8px 20px', background: '#333', 
              color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' 
            }}>
            Sync Messages
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default MessengerPage;
