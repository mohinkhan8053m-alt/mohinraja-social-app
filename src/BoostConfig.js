// BoostConfig.js - अब ये ग्लोबल लेवल पर काम करेगा
export const getBoostRates = (country, category = 'Standard') => {
  const rates = {
    'IN': { price: 500, symbol: '₹', tax: 0.18 },
    'US': { price: 10, symbol: '$', tax: 0.08 },
    'KW': { price: 3, symbol: 'KD', tax: 0.05 },
    'AE': { price: 35, symbol: 'AED', tax: 0.05 }
  };

  // 1. अगर देश नहीं मिला, तो डिफॉल्ट 'IN'
  const baseRate = rates[country] || rates['IN'];

  // 2. नया फीचर: 'Premium' कैटेगरी के लिए 20% एक्स्ट्रा सर्विस चार्ज/डिस्काउंट
  let finalPrice = baseRate.price;
  if (category === 'Premium') {
    finalPrice = baseRate.price * 1.2; 
  }

  // 3. नया फीचर: टैक्स का हिसाब (ग्लोबल बिज़नेस के लिए जरूरी)
  const finalPriceWithTax = finalPrice * (1 + baseRate.tax);

  return {
    ...baseRate,
    price: parseFloat(finalPriceWithTax.toFixed(2)),
    category: category
  };
};
