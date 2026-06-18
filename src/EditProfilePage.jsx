// EditProfileLogic.js (सिर्फ लॉजिक)
export const profileValidation = {
  isNameValid: (name) => name.length >= 3,
  isUsernameValid: (username) => !/\s/.test(username), // कोई स्पेस न हो
  isImageSizeValid: (size) => size <= 1048576 // 1MB लिमिट
};

// EditProfileComponent (बिना लेआउट का क्लीन कंपोनेंट)
export const EditProfileComponent = ({ profile, image, onSave, onImageChange, onChange }) => {
  return (
    <div className="edit-profile-container">
      {/* फोटो वाला हिस्सा */}
      <div className="photo-section">
        <img src={image} alt="Profile" className="profile-img" />
        <input type="file" accept="image/*" onChange={onImageChange} id="photoInput" />
      </div>

      {/* इनपुट फ़ील्ड्स */}
      <input value={profile.name} onChange={(e) => onChange('name', e.target.value)} placeholder="Name" />
      <input value={profile.username} onChange={(e) => onChange('username', e.target.value)} placeholder="Username" />
      <textarea value={profile.bio} onChange={(e) => onChange('bio', e.target.value)} placeholder="Bio" />
      
      {/* बटन */}
      <button onClick={onSave} className="save-btn">Done</button>
    </div>
  );
};
