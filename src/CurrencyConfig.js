// src/CurrencyConfig.js
export const getCurrencyData = (countryCode) => {
  const rates = {
    'IN': { currency: 'INR', symbol: '₹', price: 199, coins: 2000 },
    'KW': { currency: 'KWD', symbol: 'د.ك', price: 2.5, coins: 2000 },
    'US': { currency: 'USD', symbol: '$', price: 4.99, coins: 2000 },
  };
  return rates[countryCode] || { currency: 'USD', symbol: '$', price: 4.99, coins: 2000 };
};
