import React from 'react';
import { getCurrencyData } from './CurrencyEngine.js';
import { PaymentServer } from './PaymentServer.js';

const SubPlansPage = ({ countryCode }) => {
  const info = getCurrencyData(countryCode);

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
      <h2>Upgrade to Premium</h2>
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '15px' }}>
        <p>Plan Price: {info.symbol} {info.basePrice}</p>
        <p>Tax: {info.symbol} {info.taxAmount}</p>
        <hr />
        <h3>Total: {info.symbol} {info.price}</h3>
        <button onClick={() => PaymentServer.processPayment('subscribe', info)}>
          Pay {info.currency} Now
        </button>
      </div>
    </div>
  );
};

export default SubPlansPage;
