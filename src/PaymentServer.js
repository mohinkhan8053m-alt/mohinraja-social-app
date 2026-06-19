// PaymentServer.js - मास्टर कंट्रोल हब (सभी 6 फाइलों का लिंक)

// 1. सारी जरूरी फाइलें यहाँ इंपोर्ट कर रहे हैं
import * as PriceEngine from './PriceHelper.js';
import { getCurrencyData } from './CurrencyEngine.js';
import { TransactionLogger } from './TransactionLogger.js';

export const PaymentServer = {
  // ---------------------------------------------------------
  // मोइन भाई, यहाँ अपना सर्वर लिंक डालो, पूरी ऐप अपने आप कनेक्ट हो जाएगी
  proServer: "YOUR_SERVER_URL_HERE", 
  // ---------------------------------------------------------

  // 2. मास्टर डेटा गेटवे (पूरी ऐप के लिए)
  getMasterData: (type, data) => {
    if (type === 'coins') return PriceEngine.getPackageDetails(data.country);
    if (type === 'boost') return PriceEngine.getBoostingRates(data.tier);
    if (type === 'adfree') return PriceEngine.getAdFreeRates(data.country, data.days);
    if (type === 'currency') return getCurrencyData(data.country);
  },

  // 3. मास्टर पेमेंट और लॉगिंग हब
  processPayment: async (type, payload) => {
    const pricing = PaymentServer.getMasterData(type, payload);
    
    // सर्वर को पेमेंट रिक्वेस्ट भेजना (आपकी proServer लिंक यहाँ यूज़ हो रही है)
    const response = await fetch(`${PaymentServer.proServer}/api/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, ...pricing })
    });
    
    const result = await response.json();

    // पेमेंट सफल होते ही TransactionLogger में लॉग करना
    if (result.success) {
      TransactionLogger.logTransaction(payload.userId, { 
        type, 
        amount: pricing.price, 
        status: 'SUCCESS' 
      });
    }
    
    return result;
  }
};
