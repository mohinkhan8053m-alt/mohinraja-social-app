import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: 'mohin_raja_10',
    name: 'Moin Raja',
    isPremium: false,
    profilePic: '',
    walletBalance: 0,
    language: 'hi',
    theme: 'gold-black',
    isChatGuardOn: true,
    totalPosts: 0,
    socialLinks: {
      youtube: 'https://youtube.com/@mohinraja-r2m',
      facebook: 'https://www.facebook.com/share/1ArteE1FzG/',
      instagram: 'https://www.instagram.com/moin_raja_10'
    },
    isVerified: false,
    notificationsEnabled: true,
    lastLogin: new Date().toLocaleString() // बदल दिया: अब ये पढ़ने लायक डेट दिखाएगा
  });

  useEffect(() => {
    // यहाँ हमने एक 'try-catch' सुरक्षा जोड़ दी है
    try {
      console.log("[SERVER SLOT]: Syncing User Context with Database...");
    } catch (error) {
      console.error("Server Sync Error:", error);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
