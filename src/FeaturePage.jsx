import React from 'react';
import { useParams } from 'react-router-dom';

const FeaturePage = () => {
  const { featureName } = useParams(); // URL से फीचर का नाम उठाएगा

  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
      <h1>{featureName.replace(/-/g, ' ').toUpperCase()}</h1>
      <p>यह पेज अभी अंडर डेवलपमेंट है, जल्द ही आ रहा है! 🛠️</p>
      <button onClick={() => window.history.back()} style={{ padding: '10px 20px', marginTop: '20px' }}>Go Back</button>
    </div>
  );
};

export default FeaturePage;
