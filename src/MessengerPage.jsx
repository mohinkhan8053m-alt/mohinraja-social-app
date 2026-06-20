import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';
import { AdServer } from './AdServer.js';
import { UserContext } from './UserContext.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const user = context?.user || { name: "Moin Raja" };
  const [activeChat, setActiveChat] = useState(null);
  const [showTools, setShowTools] = useState(false);

  // पूरे 62 फीचर्स की लिस्ट
  const allFeatures = [
    'AI', 'Mod', 'AdS', 'Prem', 'Ana', 'Loc', 'Reg', 'Glob', 'Girl', 'Sync',
    'Set', 'VidCall', 'Cam', 'Mic', 'Tel', 'Save', 'Cloud', 'Auth', 'Noti', 'Theme',
    'Note', 'File', 'Link', 'Map', 'Cal', 'Calc', 'Timer', 'Stop', 'Flash', 'Temp',
    'Auto', 'Fly', 'Food', 'Game', 'Music', 'Video', 'Read', 'Edit', 'Plug', 'Pack',
    'Fire', 'Drone', 'Signal', 'Bulb', 'Lock', 'AC', 'Water', 'Power', 'Wifi', 'Gifts',
    'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Filter', 'Trans', 'Block', 'Ads', 'Call', 'Chat', 'Log', 'Info', 'Exit'
  ];

  const followers = [{ id: 1, name: "Mohan Raja" }, { id: 2, name: "Rahul Singh" }];

  return (
    <div style={{ background: '#fff', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!activeChat ? (
        <div style={{ padding: '20px' }}>
          <h3>Chats ({user.name})</h3>
          {followers.map(f => (
            <div key={f.id} style={{ display: 'flex', padding: '15px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
              <span style={{ flex: 1 }}>{f.name}</span>
              <button onClick={() => setActiveChat(f)} style={{ padding: '8px 15px', background: '#0084ff', color: '#fff', borderRadius: '20px', border: 'none' }}>Messenger</button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ padding: '10px', background: '#f8f8f8', display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
            <button onClick={() => setActiveChat(null)}>⬅</button>
            <strong style={{ flex: 1, textAlign: 'center' }}>{activeChat.name}</strong>
            <button onClick={() => setShowTools(!showTools)} style={{ padding: '5px 10px' }}>⋮</button>
            <button onClick={() => navigate('/video-call')} style={{ marginLeft: '10px' }}>🎥</button>
          </div>

          {/* 62 Features Grid */}
          {showTools && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px', padding: '10px', background: '#f0f0f0', maxHeight: '300px', overflowY: 'auto' }}>
              {allFeatures.map(f => (
                <button key={f} onClick={() => VideoServer.execute(f)} style={{ fontSize: '10px', padding: '8px', cursor: 'pointer' }}>{f}</button>
              ))}
            </div>
          )}

          {/* Chat Area */}
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
            <div style={{ textAlign: 'center', fontSize: '12px', color: '#888' }}>{AdServer.getAdStatus()}</div>
          </div>

          {/* Footer Toolkit */}
          <div style={{ padding: '10px', borderTop: '1px solid #ddd', display: 'flex', gap: '5px' }}>
            <button onClick={() => VideoServer.execute('Gifts')}>🎁</button>
            <button onClick={() => VideoServer.execute('Loc')}>📍</button>
            <input placeholder="Message..." style={{ flex: 1, padding: '8px', borderRadius: '20px', border: '1px solid #ccc' }} />
            <button onClick={() => VideoServer.execute('AI')}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessengerPage;
