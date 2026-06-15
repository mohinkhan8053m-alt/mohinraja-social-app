import React from 'react';

const PrivacyPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🔒 Privacy Settings</h2>
      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <span>Private Account</span>
          <input type="checkbox" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Block Comments</span>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
