import React, { createContext, useState, useEffect } from 'react';
import { AuthServer } from './AuthServer.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // आपका ओरिजिनल यूजर डेटा स्ट्रक्चर
  const [user, setUser] = useState({
    userId: 'moin_raja_10',
    name: 'Moin Raja',
    isPremium: false,
    walletBalance: 0,
    totalEarnings: 0,
    language: 'hi',
    countryCode: 'IN',
    isChatGuardOn: true,
    socialLinks: {
      youtube: 'https://youtube.com/@mohinraja-r2m',
      facebook: 'https://www.facebook.com/share/1ArteE1FzG/',
      instagram: 'https://www.instagram.com/moin_raja_10'
    },
    isVerified: false,
    token: null
  });

  const [loading, setLoading] = useState(true);

  // मास्टर सिंक फंक्शन: यह पूरी ऐप को डेटा देता है
  const syncUserData = async () => {
    try {
      setLoading(true);
      // चेक करें कि AuthServer और उसका मेथड मौजूद है या नहीं
      if (AuthServer && typeof AuthServer.executeAction === 'function') {
        const serverData = await AuthServer.executeAction('SYNC_USER_DATA');
        if (serverData) {
          setUser(prev => ({ ...prev, ...serverData }));
        }
      }
    } catch (error) {
      // अगर सर्वर से कनेक्शन नहीं हो पाया तो भी ऐप क्रैश नहीं होगी
      console.error("[UserContext Error]: Sync failed, using default values.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    syncUserData();
  }, []);

  // बाकी फाइलों के लिए अपडेट फंक्शन
  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, loading, syncUserData }}>
      {children}
    </UserContext.Provider>
  );
};
