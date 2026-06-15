import React from 'react';
import { useApi } from './ApiContext.jsx';

const ProVideoCall = () => {
  const { callProVideo } = useApi(); // आपका प्रो सर्वर लॉजिक
  const features = ['🔇','📷','🖥️','🌐','🤖','🎁','✨','🚫','Tip','Wallet','Priv','Vol','Set','Arch','Zoom','Foc','Rec','Sync','Bst','Prem','Rate','Shr','Info','Rpt','Help','Ext','Mic','Cam','Trn','Lnk','Sav','Del','Upd','Log','Pfl','Ext'];

  return (
    <div style={{ background: '#000', height: '100vh', color: '#fff' }}>
      <div style={{ height: '300px', background: '#222' }}>{/* Video */}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', padding: '10px' }}>
        {features.map((f, i) => (
          <button key={i} onClick={() => callProVideo({ feature: f })} style={featureBtn}>{f}</button>
        ))}
      </div>
    </div>
  );
};
const featureBtn = { background: '#333', color: '#fff', border: 'none', padding: '10px', fontSize: '8px' };
export default ProVideoCall;
