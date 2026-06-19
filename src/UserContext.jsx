import React, { createContext, useState, useEffect } from 'react';
import { AuthServer } from './AuthServer.js'; // 👈 मास्टर हब से जुड़ा

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

  // अब यह Sync सीधे AuthServer के जरिए होगा
  const syncUserData = async () => {
    try {
      setLoading(true);
      console.log("[USER CONTEXT]: Syncing with AuthServer...");
      
      // यहाँ AuthServer से डेटा आएगा
      const serverData = await AuthServer.executeAction('SYNC_USER_DATA');
      
      if(serverData) {
        setUser(prev => ({ ...prev, ...serverData }));
      }
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
