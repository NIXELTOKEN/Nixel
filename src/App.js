import React, { useState } from 'react';

function App() {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        alert("فشل الاتصال بمحفظة MetaMask");
      }
    } else {
      alert("الرجاء تثبيت MetaMask");
    }
  };

  const handleBuy = () => {
    alert(`تم إرسال طلب شراء ${amount} من عملة NIXEL!`);
    setAmount('');
  };

  return (
    <div className="container">
      <h1 className="title">NIXEL PRESALE</h1>
      <button className="pixel-btn" onClick={connectWallet}>
        {account ? `🟢 ${account.slice(0, 6)}...${account.slice(-4)}` : "🔌 ربط المحفظة"}
      </button>

      <div className="presale-box">
        <label>💰 الكمية المراد شراؤها:</label>
        <input
          className="pixel-input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0"
        />
        <button className="pixel-btn" onClick={handleBuy}>شراء</button>
      </div>
    </div>
  );
}

export default App;
