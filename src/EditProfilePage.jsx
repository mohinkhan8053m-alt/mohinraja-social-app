import React, { useContext, useState } from 'react';
// यहाँ .js को .jsx कर दिया गया है ताकि Vercel इसे सही से पढ़ सके
import { UserContext } from './UserContext.jsx'; 
import { AuthServer } from './AuthServer.js';

export const EditProfileComponent = () => {
  const { user, updateUser } = useContext(UserContext);
  const [profile, setProfile] = useState(user);

  const handleSave = async () => {
    // 1. सर्वर को कॉल किया
    const result = await AuthServer.updateProfile(profile);
    
    // 2. अगर सर्वर ने 'success' दिया, तो ऐप का डेटा अपडेट किया
    if (result.success) {
      updateUser(profile); 
      alert("प्रोफाइल सफलतापूर्वक अपडेट हो गई!");
    } else {
      alert("सर्वर में कोई समस्या है, कृपया बाद में प्रयास करें।");
    }
  };

  return (
    <div className="edit-profile-container">
      <input 
        value={profile.name} 
        onChange={(e) => setProfile({...profile, name: e.target.value})} 
        placeholder="Name" 
      />
      <input 
        value={profile.username} 
        onChange={(e) => setProfile({...profile, username: e.target.value})} 
        placeholder="Username" 
      />
      <textarea 
        value={profile.bio} 
        onChange={(e) => setProfile({...profile, bio: e.target.value})} 
        placeholder="Bio" 
      />
      
      {/* बटन अब सीधे handleSave को कॉल कर रहा है */}
      <button onClick={handleSave} className="save-btn">Done</button>
    </div>
  );
};
