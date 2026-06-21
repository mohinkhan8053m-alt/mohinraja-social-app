// PaymentServer.js - मास्टर कंट्रोल हब (All-in-One Integration)

import * as PriceEngine from './PriceHelper.js'; // पुरानी प्राइसिंग
import { getCountryPricing } from './PremiumPurchase.js'; // 'एस' वाली नई फाइल
import { getGiftData } from './GiftSystem.js'; // गिफ्ट वाली फाइल का कोड
import { getCurrencyData } from './CurrencyConfig.js';
import { TransactionLogger } from './TransactionLogger.js';

export const PaymentServer = {
  proServer: "YOUR_SERVER_URL_HERE", 

  // 1. मास्टर डेटा गेटवे (सबका डेटा एक साथ)
  getMasterData: (type, data) => {
    // 'S' वाली फाइल से डेटा उठाना (Premium)
    if (type === 'premium') return getCountryPricing(data.country);
    
    // पुरानी PriceHelper वाली फाइल से डेटा उठाना
    if (type === 'coins') return PriceEngine.getPackageDetails(data.country);
    if (type === 'boost') return PriceEngine.getBoostingRates(data.tier);
    if (type === 'adfree') return PriceEngine.getAdFreeRates(data.country, data.days);
    if (type === 'currency') return getCurrencyData(data.country);
  },

  // 2. मास्टर वॉलेट डेटा (कॉल + गिफ्ट्स का संगम)
  getWalletData: async (userId) => {
    // सर्वर से कॉल और गिफ्ट्स का कंबाइंड डेटा फेच करना
    const response = await fetch(`${PaymentServer.proServer}/api/wallet/${userId}`);
    const data = await response.json(); 
    
    // गिफ्ट्स वाली फाइल से लॉजिक उठाना (अगर कुछ एक्स्ट्रा कैलकुलेशन है)
    const giftInfo = getGiftData(); 

    const totalCoins = data.callCoins + data.giftCoins;
    const hostShare = Math.round(totalCoins * 0.70); // 70% विड्रॉल वाला हिस्सा

    return {
      totalBalance: totalCoins,
      payableAmount: hostShare,
      currency: 'INR',
      history: data.history || []
    };
  },

  // 3. मास्टर पेमेंट हब
  processPayment: async (type, payload) => {
    const pricing = PaymentServer.getMasterData(type, payload);
    
    const response = await fetch(`${PaymentServer.proServer}/api/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, ...pricing })
    });
    
    const result = await response.json();

    if (result.success) {
      TransactionLogger.logTransaction(payload.userId, { 
        type, 
        amount: pricing.price || 0, 
        status: 'SUCCESS' 
      });
    }
    return result;
  }
};
