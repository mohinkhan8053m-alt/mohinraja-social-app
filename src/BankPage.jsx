// BankComponent.js
export const BankComponent = ({ balance, onWithdraw, loading, error }) => {
  return (
    <div className="bank-container">
      {/* 1. एरर हैंडलिंग फीचर */}
      {error && <div className="error-msg">{error}</div>}

      {/* 2. बैलेंस डिस्प्ले फीचर */}
      <div className="balance-info">
        Current Balance: <b>{loading ? "लोड हो रहा है..." : `₹${balance.toFixed(2)}`}</b>
      </div>
      
      {/* 3. अकाउंट इनपुट फीचर */}
      <input type="text" id="accountInput" placeholder="बैंक अकाउंट नंबर (XXXX-XXXX)" />
      
      {/* 4. अमाउंट इनपुट फीचर */}
      <input type="number" id="amountInput" placeholder="निकालने वाली राशि..." />
      
      {/* 5. विड्रॉल बटन फीचर */}
      <button 
        onClick={() => onWithdraw(
          document.getElementById('accountInput').value, 
          document.getElementById('amountInput').value
        )} 
        disabled={loading}
        className="primary-btn"
      >
        {loading ? "Processing..." : "Withdraw Funds"}
      </button>

      {/* भविष्य के लिए थ्री-डॉट मेनू का स्ट्रक्चर यहाँ आएगा */}
    </div>
  );
};
