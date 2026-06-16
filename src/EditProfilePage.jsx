import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    name: localStorage.getItem('profileName') || 'RangManch Global',
    username: localStorage.getItem('profileUsername') || 'rangmanch_official',
    bio: localStorage.getItem('profileBio') || 'Official Global Portal | Digital Creator',
    website: localStorage.getItem('profileWebsite') || 'https://rangmanch.com'
  });
  
  const [image, setImage] = useState(localStorage.getItem('profileImage') || 'https://www.w3schools.com/howto/img_avatar.png');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1000000) { // 1MB से बड़ी फाइल को अलर्ट देगा
        alert("इमेज बहुत बड़ी है! 1MB से छोटी फोटो अपलोड करें।");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('profileName', profile.name);
    localStorage.setItem('profileUsername', profile.username);
    localStorage.setItem('profileBio', profile.bio);
    localStorage.setItem('profileWebsite', profile.website);
    localStorage.setItem('profileImage', image);

    alert("Profile Updated Successfully! ⚡");
    navigate('/profile');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Cancel</button>
        <h2 style={{ margin: 0, fontSize: '18px' }}>Edit Profile</h2>
        <button onClick={handleSave} style={{ background: 'none', border: 'none', fontSize: '16px', color: '#0095f6', fontWeight: 'bold', cursor: 'pointer' }}>Done</button>
      </header>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src={image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', border: '1px solid #eee', objectFit: 'cover' }} />
        <br />
        <label style={{ color: '#0095f6', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
          Change Profile Photo
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <InputField label="Name" value={profile.name} onChange={(val) => setProfile({...profile, name: val})} />
        <InputField label="Username" value={profile.username} onChange={(val) => setProfile({...profile, username: val})} />
        <InputField label="Website" value={profile.website} onChange={(val) => setProfile({...profile, website: val})} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '12px', color: '#888', marginBottom: '5px' }}>Bio</label>
          <textarea style={{...inputStyle, height: '80px'}} value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} />
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, value, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
    <label style={{ width: '80px', fontSize: '14px', color: '#333' }}>{label}</label>
    <input style={{ border: 'none', outline: 'none', flex: 1, padding: '5px' }} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' };

export default EditProfilePage;
