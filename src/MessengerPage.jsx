import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';
import { AdServer } from './AdServer.js';
import { UserContext } from './UserContext.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [activeChat, setActiveChat] = useState(null);
  const [showTools, setShowTools] = useState(false);

  // आपकी 62 फीचर्स वाली पूरी टूलकिट
  const allFeatures = [
    'AI', 'Mod', 'AdS', 'Prem', 'Ana', 'Loc', 'Reg', 'Glob', 'Girl', 'Sync',
    'Set', 'VidCall', 'Cam', 'Mic', 'Tel', 'Save', 'Cloud', 'Auth', 'Noti', 'Theme',
    'Note', 'File', 'Link', 'Map', 'Cal', 'Calc', 'Timer', 'Stop', 'Flash', 'Temp',
    'Auto', 'Fly', 'Food', 'Game', 'Music', 'Video', 'Read', 'Edit', 'Plug', 'Pack',
    'Fire', 'Drone', 'Signal', 'Bulb', 'Lock', 'AC', 'Water', 'Power', 'Wifi', 'Gifts',
    'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Filter', 'Trans', 'Block', 'Ads'
  ];

  const followers = [{ id: 1, name: "Mohan Raja" }, { id: 2, name: "Rahul Singh" }];

  return (
    <div style={{ background: '#fff', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {!activeChat ? (
        // 1. चैट लिस्ट व्यू
        <div style={{ padding: '15px' }}>
          <h3>Recent Chats</h3>
          {followers.map(f => (
            <div key={f.id} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
              <span style={{ flex: 1 }}>{f.name}</span>
              <button onClick={() => setActiveChat(f)} style={{ padding: '8px 15px', borderRadius: '20px', background: '#0084ff', color: '#fff' }}>
                Messenger
              </button>
            </div>
          ))}
        </div>
      ) : (
        // 2. मैसेंजर टूलकिट व्यू (जो आप चाहते थे)
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* हेडर: बाएँ थ्री-डॉट, बीच में नाम, दाएँ वीडियो कॉल */}
          <div style={{ padding: '10px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
            <button onClick={() => setShowTools(!showTools)}>⋮</button>
            <strong style={{ flex: 1, textAlign: 'center' }}>{activeChat.name}</strong>
            <button onClick={() => navigate('/video-call')} style={{ padding: '5px 10px' }}>Video Call 🎥</button>
          </div>

          {/* टूलकिट ग्रिड (थ्री-डॉट के अंदर) */}
          {showTools && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px', padding: '10px', background: '#f0f0f0' }}>
              {allFeatures.map(f => (
                <button key={f} onClick={() => VideoServer.execute(f)} style={{ fontSize: '10px', padding: '10px' }}>{f}</button>
              ))}
            </div>
          )}

          {/* चैट एरिया */}
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
            {/* एड बैनर */}
            <div style={{ background: '#fff3cd', padding: '5px', textAlign: 'center' }}>{AdServer.getAdStatus()}</div>
          </div>

          {/* फुटर: गिफ्टिंग, लोकेशन, मैसेज */}
          <div style={{ padding: '10px', borderTop: '1px solid #ddd', display: 'flex', gap: '5px' }}>
            <button onClick={() => VideoServer.execute('Gifts')}>🎁 Gift</button>
            <button onClick={() => VideoServer.execute('Loc')}>📍 Loc</button>
            <input type="text" style={{ flex: 1 }} placeholder="Message..." />
            <button onClick={() => setActiveChat(null)}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessengerPage;
