import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'Mohan Raja',
    username: 'mohinRaja-r2m',
    bio: 'Digital Creator | RangManch Team',
    email: 'mohin@example.com'
  });

  const handleSave = () => {
    // यहाँ बाद में आप अपना API कॉल (जोड़ने के लिए) डालेंगे
    alert("Profile Saved Successfully! ✅");
    navigate('/profile'); // सेव होते ही वापस प्रोफाइल पर ले जाएगा
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Edit Profile</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        <input 
          style={inputStyle} 
          value={profile.name} 
          onChange={(e) => setProfile({...profile, name: e.target.value})}
          placeholder="Full Name" 
        />
        <input 
          style={inputStyle} 
          value={profile.username} 
          onChange={(e) => setProfile({...profile, username: e.target.value})}
          placeholder="Username" 
        />
        <textarea 
          style={{...inputStyle, height: '100px'}} 
          value={profile.bio} 
          onChange={(e) => setProfile({...profile, bio: e.target.value})}
          placeholder="Bio" 
        />
        
        <button onClick={handleSave} style={saveBtnStyle}>Save Changes</button>
        <button onClick={() => navigate('/profile')} style={cancelBtnStyle}>Cancel</button>
      </div>
    </div>
  );
};

const inputStyle = { padding: '15px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' };
const saveBtnStyle = { padding: '15px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' };
const cancelBtnStyle = { padding: '15px', background: '#eee', color: '#333', border: 'none', borderRadius: '10px', cursor: 'pointer' };

export default EditProfilePage;
