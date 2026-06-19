// CurrencyEngine.js - मास्टर करेंसी और टैक्स इंजन
export const getCurrencyData = (countryCode) => {
  const settings = {
    'IN': { currency: 'INR', symbol: '₹', basePrice: 2999, tax: 0.18 },
    'KW': { currency: 'KWD', symbol: 'د.ك', basePrice: 25, tax: 0.05 },
    'US': { currency: 'USD', symbol: '$', basePrice: 59, tax: 0.08 },
    'UAE': { currency: 'AED', symbol: 'د.إ', basePrice: 219, tax: 0.05 },
    'GLOBAL': { currency: 'USD', symbol: '$', basePrice: 179, tax: 0.10 }
  };

  const data = settings[countryCode] || settings['GLOBAL'];
  const taxAmount = data.basePrice * data.tax;
  const finalPrice = data.basePrice + taxAmount;

  return {
    ...data,
    price: parseFloat(finalPrice.toFixed(2)),
    taxAmount: parseFloat(taxAmount.toFixed(2)),
    taxIncluded: true
  };
};
