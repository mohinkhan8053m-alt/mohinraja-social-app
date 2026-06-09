import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  // [SERVER SLOT]: यहाँ से सर्वर को सेटिंग्स का डेटा अपडेट किया जाएगा
  const handleToggle = (settingName, value) => {
    console.log(`[SERVER SLOT]: Updating ${settingName} to ${value}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="p-4 bg-white border-b flex items-center shadow-sm">
        <button onClick={() => navigate(-1)} className="text-xl mr-4">⬅️</button>
        <h2 className="font-bold text-lg">Settings & Preferences</h2>
      </header>

      <div className="p-4 space-y-6">
        {/* 1. प्राइवेसी */}
        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-bold text-purple-600 mb-4">Privacy</h3>
          <div className="flex justify-between items-center py-2">
            <span>Private Account</span>
            <input type="checkbox" onChange={(e) => handleToggle('PrivateAccount', e.target.checked)} />
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Hide Online Status</span>
            <input type="checkbox" onChange={(e) => handleToggle('HideStatus', e.target.checked)} />
          </div>
        </section>

        {/* 2. ट्रांसलेशन और AI */}
        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-bold text-purple-600 mb-4">AI & Language</h3>
          <div className="flex justify-between items-center py-2">
            <span>Auto-Translate Messages</span>
            <input type="checkbox" defaultChecked onChange={(e) => handleToggle('AutoTranslate', e.target.checked)} />
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Default AI Filter</span>
            <select onChange={(e) => handleToggle('DefaultFilter', e.target.value)} className="bg-gray-100 p-1 rounded">
              <option>Natural</option>
              <option>Cinematic</option>
              <option>Bright</option>
            </select>
          </div>
        </section>

        {/* 3. कमाई और रिवॉर्ड */}
        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-bold text-purple-600 mb-4">Monetization</h3>
          <div className="flex justify-between items-center py-2">
            <span>My Earnings Wallet</span>
            <button onClick={() => navigate('/wallet')} className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">View Balance</button>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Link Bank/UPI</span>
            <button onClick={() => handleToggle('LinkBank', true)} className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">Connect</button>
          </div>
        </section>

        {/* 4. नोटिफिकेशन */}
        <section className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-bold text-purple-600 mb-4">Notifications</h3>
          <div className="flex justify-between items-center py-2">
            <span>Push Notifications</span>
            <input type="checkbox" defaultChecked onChange={(e) => handleToggle('PushNotif', e.target.checked)} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
