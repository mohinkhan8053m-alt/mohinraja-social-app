// PaymentServer.js - मास्टर कंट्रोल हब (PricingLogic Integrated)

import * as PriceEngine from './PriceHelper.js';
import { getGiftData } from './GiftService.js';
import { getCurrencyData } from './CurrencyConfig.js';
import { TransactionLogger } from './TransactionLogger.js';
// यहाँ आपकी PricingLogic.js फाइल जुड़ गई है:
import { getCountryPricing } from './PricingLogic.js'; 

export const PaymentServer = {
  proServer: "YOUR_SERVER_URL_HERE", // अपना सर्वर लिंक यहाँ डालें

  // 1. मास्टर डेटा गेटवे
  getMasterData: (type, data) => {
    switch(type) {
      case 'premium': 
        // अब यह सीधे PricingLogic.js से सही देश का रेट उठाएगा
        return getCountryPricing(data.country); 
      case 'coins': 
        return PriceEngine.getPackageDetails(data.country);
      case 'boost': 
        return PriceEngine.getBoostingRates(data.tier);
      case 'adfree': 
        return PriceEngine.getAdFreeRates(data.country, data.days);
      case 'currency': 
        return getCurrencyData(data.country);
      case 'gift':
        return getGiftData();
      default:
        return null;
    }
  },

  // 2. मास्टर वॉलेट डेटा
  getWalletData: async (userId) => {
    try {
      const response = await fetch(`${PaymentServer.proServer}/api/wallet/${userId}`);
      const data = await response.json(); 
      const totalCoins = (data.callCoins || 0) + (data.giftCoins || 0);
      const hostShare = Math.round(totalCoins * 0.70); 

      return {
        totalBalance: totalCoins,
        payableAmount: hostShare,
        currency: 'INR',
        history: data.history || []
      };
    } catch (error) {
      console.error("Wallet Fetch Error:", error);
      return { totalBalance: 0, payableAmount: 0, currency: 'INR', history: [] };
    }
  },

  // 3. मास्टर पेमेंट हब
  processPayment: async (type, payload) => {
    const pricing = PaymentServer.getMasterData(type, payload);
    
    // Stripe/Payment Gateway के लिए यहाँ अपना लॉजिक रखें
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
  },

  // 4. विड्रॉल मास्टर फंक्शन
  processWithdrawal: async (withdrawData) => {
    const hostShare = Math.round(withdrawData.amount * 0.70); 
    const platformShare = Math.round(withdrawData.amount * 0.30);
    
    const response = await fetch(`${PaymentServer.proServer}/api/withdraw`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...withdrawData, 
        payoutAmount: hostShare,
        platformCommission: platformShare 
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      TransactionLogger.logTransaction(withdrawData.userId, { 
        type: 'WITHDRAWAL', 
        amount: withdrawData.amount, 
        status: 'SUCCESS' 
      });
    }
    return result;
  }
};
