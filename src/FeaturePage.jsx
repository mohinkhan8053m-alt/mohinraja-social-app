import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout.jsx'; 
import { useApi } from './ApiContext.jsx'; 

const FeaturePage = () => {
  const { featureName } = useParams();
  // 'serverUrl' की जगह 'proServer' इस्तेमाल करें, जो हमारे Context का सही नाम है
  const { proServer } = useApi(); 

  return (
    // अगर App.js में Layout पहले से है, तो नीचे वाली लाइनें (Layout) हटा देना
    <Layout>
      <div style={{ padding: '40px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh' }}>
        
        <h1 style={{ color: '#000', marginBottom: '10px' }}>
          {featureName ? featureName.replace(/-/g, ' ').toUpperCase() : 'Feature'}
        </h1>
        
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>
          यह मॉड्यूल सर्वर के साथ सिंक हो रहा है... 🛠️
        </p>

        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '15px', width: '90%', maxWidth: '350px', border: '1px solid #eee' }}>
          <p style={{ fontSize: '14px', margin: 0 }}>मोइन भाई, बैकएंड से डेटा फेच किया जा रहा है।</p>
        </div>

        {/* सर्वर स्टेटस बार - 'proServer' अब यहाँ सही दिखेगा */}
        <div style={{ marginTop: '40px', fontSize: '11px', color: '#888' }}>
          📡 <b>Engine:</b> {proServer || 'Connecting...'} | Status: Active
        </div>
      </div>
    </Layout>
  );
};

export default FeaturePage;
