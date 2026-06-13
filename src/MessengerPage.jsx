import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const ExplorePage = () => {
  const [isPremium, setIsPremium] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        {/* एक्सप्लोर पेज की हेडिंग जो इसे ढूंढने में मदद करेगी */}
        <h1 style={{ textAlign: 'center', color: '#fbbf24' }}>🔍 Explore RangManch</h1>
        
        {/* 16 बटन्स का ग्रिड लेआउट (सब सामने दिखेगा) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          <button onClick={() => window.open('https://adsense.google.com')}>AdSense Apply</button>
          <button onClick={() => setIsPremium(!isPremium)}>Premium Toggle</button>
          <button onClick={() => alert('Download Report')}>Get Analytics</button>
          <button onClick={() => alert('Local Promotion')}>Local Ad</button>
          <button onClick={() => alert('Multi-Country')}>Multi-Region</button>
          <button onClick={() => alert('Global')}>Global Ad</button>
          <button onClick={() => alert('Gift Shop')}>Send Gift</button>
          <button onClick={() => alert('Girl-Talk Filter')}>⚡ Girl Filter</button>
          <button onClick={() => alert('Syncing...')}>Sync Data</button>
          <button onClick={() => alert('Server Active')}>Server Hub</button>
          <button onClick={() => alert('Ad-Wall')}>Force Ad</button>
          <button onClick={() => alert('Live Stats')}>Live Stats</button>
          <button onClick={() => alert('Name Input')}>Add Name</button>
          <button onClick={() => alert('Link Input')}>Add Link</button>
          <button onClick={() => alert('Select Region')}>Region Select</button>
          <button onClick={() => alert('Payment Gate')}>Pay Now</button>
        </div>
      </div>
    </Layout>
  );
};

export default ExplorePage;
