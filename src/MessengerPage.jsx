import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';
import { AdServer } from './AdServer.js';
import { UserContext } from './UserContext.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();
  // अगर UserContext लोड होने में दिक्कत करे, तो डिफ़ॉल्ट वैल्यू ले ली जाएगी
  const userContextData = useContext(UserContext);
  const user = userContextData ? userContextData.user : { name: "Moin Raja" };
  
  const [activeChat, setActiveChat] = useState(null);
  const [showTools, setShowTools] = useState(false);
  const [message, setMessage] = useState("");

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
    <div style={{ background: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!activeChat ? (
        <div style={{ padding: '20px' }}>
          <h3>Recent Chats</h3>
          {followers.map(f => (
            <div key={f.id} style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #eee' }}>
              <span style={{ flex: 1 }}>{f.name}</span>
              <button onClick={() => setActiveChat(f)} style={{ padding: '8px 15px', borderRadius: '20px', background: '#0084ff', color: '#fff', border: 'none' }}>
                Messenger
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ padding: '15px', background: '#f8f8f8', display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
            <button onClick={() => setActiveChat(null)}>⬅</button>
            <strong style={{ flex: 1, textAlign: 'center' }}>{activeChat.name}</strong>
            <button onClick={() => setShowTools(!showTools)} style={{ margin: '0 10px' }}>⋮</button>
            <button onClick={() => navigate('/video-call')}>🎥</button>
          </div>

          {/* Tools Grid (62 Features) */}
          {showTools && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', padding: '10px', background: '#e7f3ff' }}>
              {allFeatures.map(f => (
                <button key={f} onClick={() => VideoServer.execute(f)} style={{ fontSize: '9px', padding: '5px' }}>{f}</button>
              ))}
            </div>
          )}

          {/* Ad/Promotion */}
          <div style={{ background: '#fff3cd', padding: '5px', textAlign: 'center', fontSize: '11px' }}>
            {AdServer ? AdServer.getAdStatus() : "Promotion Active"}
          </div>

          <div style={{ flex: 1, padding: '10px' }}> {/* Chat Space */} </div>

          {/* Footer Input */}
          <div style={{ padding: '10px', borderTop: '1px solid #ddd', display: 'flex', gap: '5px' }}>
            <button onClick={() => VideoServer.execute('Gifts')}>🎁</button>
            <input 
              value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="AI Translate..." style={{ flex: 1, padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }} 
            />
            <button onClick={() => VideoServer.execute('AI_Send')} style={{ background: '#0084ff', color: '#fff', padding: '0 15px', borderRadius: '20px', border: 'none' }}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessengerPage;
