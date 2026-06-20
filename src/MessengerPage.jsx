import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';
import { AdServer } from './AdServer.js';
import { UserContext } from './UserContext.jsx'; 

const MessengerPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // प्रोफाइल डेटा यहाँ से आएगा
  const [activeChat, setActiveChat] = useState(null);
  const [showTools, setShowTools] = useState(false);

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
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Facebook Style Header */}
      <div style={{ padding: '15px', background: '#fff', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', position: 'sticky', top: 0 }}>
        <button onClick={() => navigate('/')}>⬅</button>
        <h2 style={{ margin: '0 15px' }}>Messenger</h2>
        <div style={{ marginLeft: 'auto', fontWeight: 'bold' }}>{user ? user.name : 'User'}</div>
      </div>

      {!activeChat ? (
        <div style={{ padding: '15px' }}>
          <h4>Recent Chats</h4>
          {followers.map(f => (
            <div key={f.id} style={{ display: 'flex', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}></div>
              <div style={{ marginLeft: '15px', flex: 1 }}>
                <strong>{f.name}</strong>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Tap to start chatting</p>
              </div>
              <button onClick={() => setActiveChat(f)} style={{ background: '#0084ff', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '20px' }}>Open</button>
            </div>
          ))}
        </div>
      ) : (
        /* Facebook Style Chat View */
        <div style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
          <div style={{ padding: '10px', background: '#f8f8f8', display: 'flex', alignItems: 'center' }}>
            <button onClick={() => setActiveChat(null)}>⬅</button>
            <strong style={{ marginLeft: '10px' }}>{activeChat.name}</strong>
            <button style={{ marginLeft: 'auto' }} onClick={() => setShowTools(!showTools)}>⋮</button>
          </div>

          {/* विज्ञापन का डैशबोर्ड (AdServer से कनेक्टेड) */}
          <div style={{ background: '#fff3cd', padding: '8px', fontSize: '11px', textAlign: 'center' }} onClick={() => AdServer.loadAds()}>
            📢 {AdServer.getAdStatus() || "Premium Sponsored Ad"}
          </div>

          {showTools && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', padding: '10px', background: '#eee' }}>
              {allFeatures.map(f => (
                <button key={f} onClick={() => VideoServer.execute(f)} style={{ padding: '5px', fontSize: '9px' }}>{f}</button>
              ))}
            </div>
          )}

          <div style={{ flex: 1, padding: '10px' }}>{/* Chat Bubbles */}</div>

          <div style={{ padding: '10px', borderTop: '1px solid #ddd', display: 'flex', gap: '5px' }}>
            <button onClick={() => VideoServer.execute('Gifts')}>🎁</button>
            <input type="text" placeholder="Aa" style={{ flex: 1, borderRadius: '20px', border: '1px solid #ccc', padding: '10px' }} />
            <button onClick={() => VideoServer.execute('AI')}>🤖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessengerPage;
