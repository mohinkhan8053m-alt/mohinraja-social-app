import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: 'mohin_raja_10',
    name: 'Moin Raja',
    isPremium: false,
    premiumExpiry: null, 
    walletBalance: 0,
    totalEarnings: 0,    
    language: 'hi', // आपकी भाषा का प्रेफरेंस
    countryCode: 'IN', // यह ग्लोबल प्राइसिंग के लिए जरूरी है
    isChatGuardOn: true,
    socialLinks: {
      youtube: 'https://youtube.com/@mohinraja-r2m',
      facebook: 'https://www.facebook.com/share/1ArteE1FzG/',
      instagram: 'https://www.instagram.com/moin_raja_10'
    },
    isVerified: false
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // [SERVER SLOT]: यहाँ से सर्वर सिंक का काम होगा
    // जब आप सर्वर का API लगाओगे, तो बस यहाँ URL डाल देना
    const syncUserData = async () => {
      try {
        console.log("[SERVER SLOT]: Syncing Global User Data...");
        // यहाँ आप अपना API कॉल डालेंगे
        setLoading(false);
      } catch (error) {
        console.error("Server Sync Error:", error);
        setLoading(false);
      }
    };

    syncUserData();
  }, []);

  // यह फंक्शन पूरी वेबसाइट पर कहीं भी यूजर का डेटा अपडेट कर देगा
  const updateUser = (newData) => {
    setUser({ ...user, ...newData });
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
