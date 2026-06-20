import React, { useState, useEffect } from 'react';
import { VideoServer } from './VideoServer.js'; // आपका असली सर्वर
import { AdServer } from './AdServer.js';       // विज्ञापन सर्वर
import { PaymentServer } from './PaymentServer.js'; // पेमेंट सर्वर
import { ProfileService } from './ProfileService.js'; // प्रोफाइल कनेक्शन

const MessengerPage = () => {
  const [profileData, setProfileData] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [showTools, setShowTools] = useState(false);

  // प्रोफाइल डेटा लोड करना
  useEffect(() => {
    setProfileData(ProfileService.getUserData());
  }, []);

  const allFeatures = ['AI', 'Mod', 'AdS', 'Prem', 'Ana', 'Loc', 'Reg', 'Glob', 'Girl', 'Sync', 'Set', 'VidCall', 'Cam', 'Mic', 'Tel', 'Save', 'Cloud', 'Auth', 'Noti', 'Theme', 'Note', 'File', 'Link', 'Map', 'Cal', 'Calc', 'Timer', 'Stop', 'Flash', 'Temp', 'Auto', 'Fly', 'Food', 'Game', 'Music', 'Video', 'Read', 'Edit', 'Plug', 'Pack', 'Fire', 'Drone', 'Signal', 'Bulb', 'Lock', 'AC', 'Water', 'Power', 'Wifi', 'Gifts', 'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Filter', 'Trans', 'Block', 'Ads'];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '10px' }}>
      {/* 1. प्रोफाइल सेक्शन */}
      <div style={{ padding: '15px', background: '#f8f8f8', marginBottom: '10px', borderRadius: '10px' }}>
        <h3>{profileData ? profileData.name : 'Loading...'}</h3>
      </div>

      {/* 2. मुख्य डैशबोर्ड (जो आपने स्क्रीनशॉट में दिखाया था) */}
      {!activeChat ? (
        <div>
          <h4>Messenger Tools (59 Total)</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
            {allFeatures.map(f => (
              <button key={f} onClick={() => VideoServer.execute(f)} style={{ padding: '10px', fontSize: '10px', border: '1px solid #ddd' }}>
                {f}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // 3. एक्टिव चैट डैशबोर्ड
        <div>
          <button onClick={() => setActiveChat(null)}>Back</button>
          <div style={{ background: '#fff3cd', padding: '10px' }}>Ads Dashboard</div>
          <input type="text" placeholder="Message..." />
          <button onClick={() => VideoServer.execute('Gifts')}>Gift</button>
          <button onClick={() => VideoServer.execute('AI')}>AI</button>
        </div>
      )}
    </div>
  );
};

export default MessengerPage;
