import React from 'react';

const BankPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🏦 Bank & Payouts</h2>
      <div style={{ marginTop: '20px' }}>
        <p>Current Balance: <b>$245.00</b></p>
        <input style={{ width: '100%', padding: '10px', marginBottom: '10px' }} placeholder="Enter Bank Account Number" />
        <button style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Withdraw Funds
        </button>
      </div>
    </div>
  );
};

export default BankPage;
