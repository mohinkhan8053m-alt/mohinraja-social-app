import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';

const MessengerPage = () => {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState(null);
  const [showTools, setShowTools] = useState(false);

  // ये रहे आपके पूरे 62 फीचर्स जो थ्री-डॉट में रहेंगे
  const allFeatures = [
    'AI', 'Mod', 'AdS', 'Prem', 'Ana', 'Loc', 'Reg', 'Glob', 'Girl', 'Sync',
    'Set', 'VidCall', 'Cam', 'Mic', 'Tel', 'Save', 'Cloud', 'Auth', 'Noti', 'Theme',
    'Note', 'File', 'Link', 'Map', 'Cal', 'Calc', 'Timer', 'Stop', 'Flash', 'Temp',
    'Auto', 'Fly', 'Food', 'Game', 'Music', 'Video', 'Read', 'Edit', 'Plug', 'Pack',
    'Fire', 'Drone', 'Signal', 'Bulb', 'Lock', 'AC', 'Water', 'Power', 'Wifi', 'Gifts',
    'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Filter', 'Trans', 'Block', 'Ads'
  ];

  if (activeChat) {
    return (
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column', background: '#fff'}}>
        {/* चैट हेडर */}
        <div style={{padding: '15px', display: 'flex', gap: '10px', borderBottom: '1px solid #eee'}}>
          <button onClick={() => setActiveChat(null)}>⬅</button>
          <span style={{flex: 1, fontWeight: 'bold'}}>{activeChat.name}</span>
          <button onClick={() => setShowTools(!showTools)}>⋮</button> {/* थ्री-डॉट यहाँ है */}
          <button onClick={() => navigate('/video-call')}>🎥</button>
        </div>

        {/* चैट बॉडी जहाँ विज्ञापन और मैसेज आएंगे */}
        <div style={{flex: 1, padding: '10px'}}>
           <div style={{background: '#fff3cd', padding: '10px', marginBottom: '10px'}}>Ad: Promotion/Boosting</div>
           <p>Start messaging...</p>
        </div>

        {/* थ्री-डॉट खोलने पर पूरे 62 फीचर्स का ग्रिड */}
        {showTools && (
          <div style={{position: 'absolute', top: '60px', width: '100%', background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', padding: '10px', borderBottom: '1px solid #ddd', maxHeight: '300px', overflowY: 'scroll'}}>
            {allFeatures.map(f => (
              <button key={f} onClick={() => VideoServer.execute(f)} style={{fontSize: '9px', padding: '5px'}}>{f}</button>
            ))}
          </div>
        )}

        {/* चैट फुटर - मुख्य बटन */}
        <div style={{padding: '10px', display: 'flex', gap: '5px', borderTop: '1px solid #eee'}}>
          <button onClick={() => VideoServer.execute('AI')}>🤖 AI</button>
          <button onClick={() => VideoServer.execute('Gifts')}>🎁 Gift</button>
          <button onClick={() => VideoServer.execute('Loc')}>📍 Loc</button>
          <input type="text" style={{flex: 1, border: '1px solid #ccc', borderRadius: '20px'}} />
          <button>Send</button>
        </div>
      </div>
    );
  }

  // मेन लिस्ट स्क्रीन
  return (
    <div style={{padding: '20px'}}>
      {/* यहाँ लिस्ट दिखेगी */}
    </div>
  );
};

export default MessengerPage;
