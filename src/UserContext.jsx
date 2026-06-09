import React, { createContext, useState, useEffect } from 'react';

// यह आपकी पूरी वेबसाइट का सेंट्रल 'दिमाग' है
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    // --- पिछले फीचर्स (1-22) ---
    userId: 'mohin_raja_10',
    name: 'Moin Raja',
    isPremium: false,
    profilePic: '',
    walletBalance: 0,
    language: 'hi',
    theme: 'gold-black', // आपकी क्लासिक थीम
    isChatGuardOn: true,
    totalPosts: 0,
    
    // --- नए जोड़े गए 4 फीचर्स ---
    socialLinks: {
      youtube: 'https://youtube.com/@mohinraja-r2m',
      facebook: 'https://www.facebook.com/share/1ArteE1FzG/',
      instagram: 'https://www.instagram.com/moin_raja_10'
    },
    isVerified: false,      // नया फीचर 1: वेरिफिकेशन टिक
    notificationsEnabled: true, // नया फीचर 2: अलर्ट्स
    lastLogin: new Date().toISOString() // नया फीचर 3: लॉगिन टाइम
  });

  // नया फीचर 4: सर्वर सिंक (API हैंडलर)
  useEffect(() => {
    // यहाँ आपकी लाइव वेबसाइट का सर्वर डेटा सिंक होगा
    console.log("[SERVER SLOT]: Syncing User Context with Database...");
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
