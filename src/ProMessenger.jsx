import React, { useState } from 'react';
import { useApi } from './ApiContext.jsx';
import { calculateCommission } from './PriceHelper.js';

const ProMessenger = () => {
  const { handleProAction } = useApi();
  const [msg, setMsg] = useState('');

  // यह फंक्शन अब कॉइन और कमीशन का हिसाब भी रखेगा
  const sendAction = async (type) => {
    const commission = calculateCommission(10); // मान लेते हैं एक मैसेज का 10 कॉइन
    await handleProAction({ type, cost: 10, profit: commission.platformShare });
  };

  return (
    <div style={{ background: '#f5f5f5', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. प्रोफाइल हेडर */}
      <div style={headerStyle}>
        <span>👤 Sara (India)</span>
        <span style={{ fontSize: '12px' }}>Balance: 250 Coins</span>
      </div>

      {/* 2. चैट बॉक्स */}
      <div style={chatStyle}>
        {/* यहाँ आपके मैसेज दिखेंगे */}
      </div>

      {/* 3. कंट्रोल बार */}
      <div style={inputContainer}>
        <button onClick={() => sendAction('voice')} style={iconBtn}>🎙️</button>
        <button onClick={() => sendAction('translate')} style={actionBtn}>🌐 AI</button>
        <input 
          style={inputStyle} 
          value={msg} 
          onChange={(e) => setMsg(e.target.value)} 
          placeholder="Message..." 
        />
        <button onClick={() => sendAction('send')} style={sendBtn}>🚀</button>
      </div>
    </div>
  );
};

const headerStyle = { padding: '15px', background: '#000', color: '#fff', display: 'flex', justifyContent: 'space-between' };
const chatStyle = { flex: 1, padding: '10px', overflowY: 'scroll' };
const inputContainer = { display: 'flex', gap: '5px', padding: '10px', background: '#fff' };
const inputStyle = { flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' };
const iconBtn = { background: '#eee', border: 'none', borderRadius: '5px', padding: '10px' };
const actionBtn = { background: '#0095f6', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px', fontSize: '12px' };
const sendBtn = { background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px' };

export default ProMessenger;
