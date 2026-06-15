// BoostConfig.js
export const getBoostRates = (country) => {
  const rates = {
    'IN': { price: 500, symbol: '₹' },
    'US': { price: 10, symbol: '$' },
    'KW': { price: 3, symbol: 'KD' },
    'AE': { price: 35, symbol: 'AED' }
  };
  return rates[country] || rates['IN'];
};
