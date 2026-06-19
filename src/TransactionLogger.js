// TransactionLogger.js - हर पेमेंट का हिसाब-किताब
export const TransactionLogger = {
  logTransaction: (userId, transactionDetails) => {
    const log = {
      userId,
      ...transactionDetails,
      date: new Date().toLocaleString(),
      status: 'SUCCESS'
    };
    
    // इसे सर्वर पर सेव करें
    console.log("📜 ट्रांजेक्शन लॉग किया गया:", log);
    
    // यहाँ तुम अपना सर्वर कॉल कर सकते हो
    // fetch(`${PaymentServer.proServer}/api/save-log`, { method: 'POST', body: JSON.stringify(log) });
  }
};
