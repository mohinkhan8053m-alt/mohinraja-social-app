import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: 'moin_raja_10',
    name: 'Moin Raja',
    isPremium: false,
    walletBalance: 0,
    totalEarnings: 0,
    language: 'hi',
    countryCode: 'IN', // यह प्राइसिंग के लिए बहुत महत्वपूर्ण है
    isChatGuardOn: true,
    socialLinks: {
      youtube: 'https://youtube.com/@mohinraja-r2m',
      facebook: 'https://www.facebook.com/share/1ArteE1FzG/',
      instagram: 'https://www.instagram.com/moin_raja_10'
    },
    isVerified: false,
    token: null // लॉगिन ऑथेंटिकेशन के लिए
  });

  const [loading, setLoading] = useState(true);

  // सर्वर से डेटा सिंक करने का स्मार्ट फंक्शन
  const syncUserData = async () => {
    try {
      setLoading(true);
      console.log("[SERVER HUB]: Syncing user data for:", user.userId);
      // यहाँ आप भविष्य में: const res = await fetch(`${serverUrl}/user/sync`); लगाएंगे
      setLoading(false);
    } catch (error) {
      console.error("Sync Failed:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    syncUserData();
  }, []);

  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, loading, syncUserData }}>
      {children}
    </UserContext.Provider>
  );
};
