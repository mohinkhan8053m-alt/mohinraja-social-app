// TransactionLogger.js - मास्टर ट्रांजेक्शन लॉगर
export const TransactionLogger = {
  logTransaction: async (userId, transactionDetails) => {
    const log = {
      userId,
      ...transactionDetails,
      date: new Date().toISOString(), 
      status: transactionDetails.status || 'SUCCESS'
    };
    
    console.log("📜 ट्रांजेक्शन लॉग किया गया:", log);
    
    try {
      // यहाँ अपने सर्वर का लिंक डालें
      await fetch(`https://YOUR_SERVER_URL/api/save-log`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(log) 
      });
    } catch (error) {
      console.error("ट्रांजेक्शन लॉग सेव करने में एरर:", error);
    }
  }
};
