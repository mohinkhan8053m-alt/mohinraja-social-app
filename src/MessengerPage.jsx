import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';

const MessengerPage = () => {
  const navigate = useNavigate();
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

  const followers = [
    { id: 1, name: "Mohan Raja" },
    { id: 2, name: "Rahul Singh" }
  ];

  // यह आपका Chat View है
  if (activeChat) {
    return (
      <div style={{ background: '#fff', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '15px', background: '#f8f8f8', display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
          <button onClick={() => setActiveChat(null)}>⬅</button>
          <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{activeChat.name}</span>
          <div style={{ marginLeft: 'auto' }}>
            <button onClick={() => setShowTools(!showTools)}>⋮</button>
            <button onClick={() => navigate('/video-call')}>🎥</button>
          </div>
        </div>

        {showTools && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', padding: '10px', background: '#eee' }}>
            {allFeatures.map(f => <button key={f} onClick={() => VideoServer.execute(f)} style={{ fontSize: '10px' }}>{f}</button>)}
          </div>
        )}

        <div style={{ flex: 1, padding: '10px' }}>
          <div style={{ background: '#fff3cd', padding: '5px', fontSize: '12px' }}>Ad: Promotion/Boosting</div>
        </div>

        <div style={{ padding: '10px', display: 'flex', gap: '5px', borderTop: '1px solid #ddd' }}>
          <button onClick={() => VideoServer.execute('AI')}>🤖</button>
          <button onClick={() => VideoServer.execute('Gifts')}>🎁</button>
          <button onClick={() => VideoServer.execute('Loc')}>📍</button>
          <input style={{ flex: 1 }} type="text" />
          <button>Send</button>
        </div>
      </div>
    );
  }

  // यह आपका Main List View है
  return (
    <div style={{ padding: '15px' }}>
      <h3>Recent Chats</h3>
      {followers.map(user => (
        <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #eee' }}>
          <span>{user.name}</span>
          <button onClick={() => setActiveChat(user)}>Message</button>
        </div>
      ))}
    </div>
  );
};

export default MessengerPage;
