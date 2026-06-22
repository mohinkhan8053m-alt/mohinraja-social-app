// PaymentServer.js - मास्टर कंट्रोल हब (All-in-One Integration)

import * as PriceEngine from './PriceHelper.js'; 
import { getCountryPricing } from './PremiumPurchase.js'; 
import { getGiftData } from './GiftSystem.js'; 
import { getCurrencyData } from './CurrencyConfig.js';
import { TransactionLogger } from './TransactionLogger.js';

export const PaymentServer = {
  proServer: "YOUR_SERVER_URL_HERE", 

  // 1. मास्टर डेटा गेटवे
  getMasterData: (type, data) => {
    if (type === 'premium') return getCountryPricing(data.country);
    if (type === 'coins') return PriceEngine.getPackageDetails(data.country);
    if (type === 'boost') return PriceEngine.getBoostingRates(data.tier);
    if (type === 'adfree') return PriceEngine.getAdFreeRates(data.country, data.days);
    if (type === 'currency') return getCurrencyData(data.country);
  },

  // 2. मास्टर वॉलेट डेटा
  getWalletData: async (userId) => {
    const response = await fetch(`${PaymentServer.proServer}/api/wallet/${userId}`);
    const data = await response.json(); 
    const giftInfo = getGiftData(); 
    const totalCoins = data.callCoins + data.giftCoins;
    const hostShare = Math.round(totalCoins * 0.70); 

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
      TransactionLogger.logTransaction(payload.userId, { type, amount: pricing.price || 0, status: 'SUCCESS' });
    }
    return result;
  },

  // 4. विड्रॉल मास्टर फंक्शन (70/30 कमीशन के साथ)
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
