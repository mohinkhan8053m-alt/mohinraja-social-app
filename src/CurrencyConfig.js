export const getCurrencyData = (countryCode) => {
  const settings = {
    'IN': { currency: 'INR', symbol: '₹', price: 2999 },
    'KW': { currency: 'KWD', symbol: 'د.ك', price: 25 },
    'US': { currency: 'USD', symbol: '$', price: 59 },
    'UAE': { currency: 'AED', symbol: 'د.إ', price: 219 },
    'GLOBAL': { currency: 'USD', symbol: '$', price: 179 } // पूरी दुनिया का फिक्स प्रीमियम
  };

  return settings[countryCode] || settings['GLOBAL'];
};
