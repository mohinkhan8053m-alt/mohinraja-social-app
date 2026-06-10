import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: 'mohin_raja_10',
    name: 'Moin Raja',
    isPremium: false,
    premiumExpiry: null, // नई फील्ड: प्रीमियम कब खत्म होगा
    walletBalance: 0,
    totalEarnings: 0,    // नई फील्ड: कमाई दिखाने के लिए
    language: 'hi',
    isChatGuardOn: true,
    socialLinks: {
      youtube: 'https://youtube.com/@mohinraja-r2m',
      facebook: 'https://www.facebook.com/share/1ArteE1FzG/',
      instagram: 'https://www.instagram.com/moin_raja_10'
    },
    isVerified: false
  });

  const [loading, setLoading] = useState(true); // नई फील्ड: लोडिंग चेक करने के लिए

  useEffect(() => {
    // यहाँ हम सर्वर से डेटा मंगाने का लॉजिक लगाएंगे
    try {
      console.log("[SERVER SLOT]: Syncing User Data...");
      setLoading(false); // डेटा आते ही लोडिंग बंद
    } catch (error) {
      console.error("Server Sync Error:", error);
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
