import React, { useState, useEffect } from 'react';
import { DataServer } from './DataServer.js'; // मास्टर डेटा सर्वर

const PrivacyPage = () => {
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    // पेज खुलते ही डेटा सर्वर से पुरानी सेटिंग्स लोड करें
    DataServer.getPrivacySettings().then(data => setSettings(data));
  }, []);

  const handleToggle = async (featureId, label) => {
    setSaving(true);
    // डेटा सर्वर के जरिए अपडेट करें
    const success = await DataServer.updatePrivacy(featureId, !settings[featureId]);
    if (success) {
      setSettings({ ...settings, [featureId]: !settings[featureId] });
      alert(`✅ ${label} अपडेट हो गया!`);
    } else {
      alert("सर्वर एरर: सेटिंग सेव नहीं हुई।");
    }
    setSaving(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '400px', margin: 'auto', background: '#fff', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '20px' }}>🔒 प्राइवेसी सेटिंग्स</h2>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {[
          { label: 'प्राइवेट अकाउंट', id: 'private' },
          { label: 'कमेंट ब्लॉक करें', id: 'blockComments' },
          { label: 'ऑनलाइन स्टेटस छुपाएं', id: 'hideStatus' },
          { label: 'ग्लोबल सर्च में दिखाएं', id: 'globalSearch' }
        ].map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
            <span style={{ fontSize: '14px' }}>{item.label}</span>
            <input 
              type="checkbox" 
              checked={!!settings[item.id]}
              disabled={saving}
              onChange={() => handleToggle(item.id, item.label)}
              style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '15px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', color: '#888' }}>📡 <b>DataServer Status:</b> Active</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
