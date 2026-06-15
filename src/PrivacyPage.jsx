import React from 'react';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; 

const PrivacyPage = () => {
  const { serverUrl } = useApi();

  const handleToggle = (feature) => {
    // सर्वर हब पर अपडेट भेजना
    console.log(`Updating ${feature} status via: ${serverUrl}`);
    alert(`${feature} सेटिंग अपडेट कर दी गई है!`);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '400px', margin: 'auto' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '20px' }}>🔒 प्राइवेसी सेटिंग्स</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          {[
            { label: 'प्राइवेट अकाउंट', id: 'private' },
            { label: 'कमेंट ब्लॉक करें', id: 'blockComments' },
            { label: 'ऑनलाइन स्टेटस छुपाएं', id: 'hideStatus' },
            { label: 'ग्लोबल सर्च में दिखाएं', id: 'globalSearch' }
          ].map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <span style={{ fontSize: '14px' }}>{item.label}</span>
              <input 
                type="checkbox" 
                onChange={() => handleToggle(item.label)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', padding: '15px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <p style={{ fontSize: '10px', color: '#888' }}>📡 <b>सर्वर स्टेटस:</b> {serverUrl}</p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
