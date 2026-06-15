import React from 'react';
import { useApi } from './ApiContext.jsx';

const ProMessenger = () => {
  const { handleProAction } = useApi();

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ height: '60vh', background: '#fff' }}>{/* Chat */}</div>
      <div style={{ display: 'flex', gap: '5px', padding: '10px' }}>
        <button onClick={() => handleProAction('voice')}>🎙️</button>
        <button onClick={() => handleProAction('translate')}>🌐 AI Translate</button>
        <input style={{ flex: 1 }} placeholder="Message..." />
        <button onClick={() => handleProAction('send')}>🚀</button>
      </div>
    </div>
  );
};
export default ProMessenger;
