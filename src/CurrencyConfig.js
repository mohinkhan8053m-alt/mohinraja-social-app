// CurrencyEngine.js - अब यह और भी स्मार्ट है
export const getCurrencyData = (countryCode) => {
  const settings = {
    'IN': { currency: 'INR', symbol: '₹', basePrice: 2999, tax: 0.18 },
    'KW': { currency: 'KWD', symbol: 'د.ك', basePrice: 25, tax: 0.05 },
    'US': { currency: 'USD', symbol: '$', basePrice: 59, tax: 0.08 },
    'UAE': { currency: 'AED', symbol: 'د.إ', basePrice: 219, tax: 0.05 },
    'GLOBAL': { currency: 'USD', symbol: '$', basePrice: 179, tax: 0.10 }
  };

  const data = settings[countryCode] || settings['GLOBAL'];

  // नया फीचर: टैक्स कैलकुलेशन के साथ फाइनल प्राइस
  const finalPrice = data.basePrice * (1 + data.tax);

  return {
    ...data,
    price: parseFloat(finalPrice.toFixed(2)), // टैक्स जोड़कर फाइनल अमाउंट
    taxIncluded: true
  };
};
