import React from 'react';

const GlobalSettings = ({ onClose }) => {
  const settingsList = [
    'App Theme', 'Language', 'Notifications', 'Chat Privacy', 
    'Auto-Pay Mode', 'Data Usage', 'Ad Preferences', 'Security Lock',
    'Account Activity', 'Help & Support', 'Report a Bug', 
    'Terms & Privacy', 'Cache Clear', 'Logout'
  ];

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100%', background: '#fff', boxShadow: '-5px 0 15px rgba(0,0,0,0.2)', padding: '20px', zIndex: 1000 }}>
      <h3>⚙️ Master Settings</h3>
      {settingsList.map(item => (
        <button key={item} style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: 'none', background: '#f0f0f0', cursor: 'pointer' }} 
                onClick={() => alert(`Setting ${item} updated!`)}>
          {item}
        </button>
      ))}
      <button style={{ marginTop: '20px', color: 'red' }} onClick={onClose}>Close Settings</button>
    </div>
  );
};

export default GlobalSettings;
