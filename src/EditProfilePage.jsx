import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'RangManch Global',
    username: 'rangmanch_official',
    bio: 'Official Global Portal | RangManch Team',
    website: 'https://rangmanch.com',
    email: 'contact@rangmanch.com'
  });
  const [image, setImage] = useState('https://www.w3schools.com/howto/img_avatar.png');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = () => {
    alert("Profile Updated Successfully! ⚡");
    navigate('/profile');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', fontSize: '16px' }}>Cancel</button>
        <h2 style={{ margin: 0, fontSize: '18px' }}>Edit Profile</h2>
        <button onClick={handleSave} style={{ background: 'none', border: 'none', fontSize: '16px', color: '#0095f6', fontWeight: 'bold' }}>Done</button>
      </header>

      {/* फोटो अपलोडर */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src={image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', border: '1px solid #eee' }} />
        <br />
        <label style={{ color: '#0095f6', fontWeight: 'bold', cursor: 'pointer' }}>
          Change Profile Photo
          <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
        </label>
      </div>

      {/* इनपुट टूलकिट */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <InputField label="Name" value={profile.name} onChange={(val) => setProfile({...profile, name: val})} />
        <InputField label="Username" value={profile.username} onChange={(val) => setProfile({...profile, username: val})} />
        <InputField label="Website" value={profile.website} onChange={(val) => setProfile({...profile, website: val})} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '12px', color: '#888' }}>Bio</label>
          <textarea style={{...inputStyle, height: '80px'}} value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} />
        </div>
      </div>
    </div>
  );
};

// छोटी सी हेल्पर कंपोनेंट ताकि कोड साफ़ रहे
const InputField = ({ label, value, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
    <label style={{ width: '100px', fontSize: '14px' }}>{label}</label>
    <input style={{ border: 'none', outline: 'none', flex: 1 }} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginTop: '5px' };

export default EditProfilePage;
