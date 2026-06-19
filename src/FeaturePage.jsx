import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataServer } from './DataServer.js'; // मास्टर डेटा सर्वर

const FeaturePage = () => {
  const { featureName } = useParams();
  const [serverStatus, setServerStatus] = useState('Connecting...');

  useEffect(() => {
    // DataServer के जरिए सर्वर स्टेटस चेक कर रहे हैं
    const initFeature = async () => {
      const status = await DataServer.checkFeature(featureName);
      setServerStatus(status ? 'Connected' : 'Offline');
    };
    initFeature();
  }, [featureName]);

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', background: '#fff' }}>
      
      <h1 style={{ color: '#000', marginBottom: '10px' }}>
        {featureName ? featureName.replace(/-/g, ' ').toUpperCase() : 'Feature'}
      </h1>
      
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>
        यह मॉड्यूल डेटा सर्वर के साथ सिंक हो रहा है... 🛠️
      </p>

      <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '15px', width: '90%', maxWidth: '350px', border: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', margin: 0 }}>मोइन भाई, मास्टर डेटा सर्वर से डेटा फेच किया गया।</p>
      </div>

      {/* सर्वर स्टेटस बार - अब सीधे DataServer से डेटा ले रहा है */}
      <div style={{ marginTop: '40px', fontSize: '11px', color: '#888' }}>
        📡 <b>Engine:</b> DataServer | <b>Status:</b> {serverStatus}
      </div>
    </div>
  );
};

export default FeaturePage;
