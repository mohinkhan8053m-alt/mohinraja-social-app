import React, { createContext, useState, useEffect } from 'react';
import { AuthServer } from './AuthServer.js';

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

  const syncUserData = async () => {
    try {
      setLoading(true);
      // यहाँ AuthServer का चेक लगाया है ताकि एरर न आए
      if (typeof AuthServer !== 'undefined' && AuthServer.executeAction) {
        const serverData = await AuthServer.executeAction('SYNC_USER_DATA');
        if (serverData) {
          setUser(prev => ({ ...prev, ...serverData }));
        }
      }
    } catch (error) {
      console.warn("[UserContext]: Server sync skipped, using local profile.");
    } finally {
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
