// PriceHelper.js
export const getPricing = (country) => {
  const pricingData = {
    'India': { curr: 'INR', symbol: '₹', vip: 299, adFree: 199, localAd: 999, globalAd: 7999 },
    'Kuwait': { curr: 'KWD', symbol: 'KD', vip: 4, adFree: 2, localAd: 15, globalAd: 120 },
    'UAE': { curr: 'AED', symbol: 'AED', vip: 50, adFree: 25, localAd: 150, globalAd: 1200 },
    'USA': { curr: 'USD', symbol: '$', vip: 10, adFree: 5, localAd: 30, globalAd: 250 }
  };
  // अगर देश लिस्ट में नहीं है, तो डिफ़ॉल्ट इंडिया का रेट दिखाएं
  return pricingData[country] || pricingData['India'];
};
