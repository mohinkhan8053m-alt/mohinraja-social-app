import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: 'mohin_raja_10', // आपकी Instagram ID के अनुसार
    name: 'Moin Raja',
    isPremium: false,
    profilePic: '',
    walletBalance: 0,      // कमाई के लिए
    language: 'hi',        // ट्रांसलेशन के लिए
    theme: 'dark',         // आपकी गोल्डन-ब्लैक थीम के लिए
    isChatGuardOn: true    // सुरक्षा के लिए
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
