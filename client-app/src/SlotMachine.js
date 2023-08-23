import React, { useState, useEffect } from 'react';
import './App.css';

const SlotMachine = () => {
  const [reels, setReels] = useState([0, 0, 0]);
  const [betAmount, setBetAmount] = useState(1);
  const [balance, setBalance] = useState(100);
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    fetchSymbols();
  }, []);

  const fetchSymbols = async () => {
    try {
      const response = await fetch('./data/symbols.json');
      const data = await response.json();
      console.log(data);
      setSymbols(data);
    } catch (error) {
      console.error('Error fetching symbols:', error);
    }
  };

  const spinReels = () => {
    // 랜덤한 심볼 선택
    const newReels = reels.map(() => Math.floor(Math.random() * symbols.length));
    setReels(newReels);
    // 보상 계산
    const uniqueSymbols = new Set(newReels);
    if (uniqueSymbols.size === 1) {
      // 모든 심볼이 같을 경우 보상
      const reward = betAmount * 5;
      setBalance(balance + reward);
    } else {
      // 보상 없음
      setBalance(balance - betAmount);
    }
  };

  return (
    <div className='slot' id="slot">
      <h1>Slot Machine Game</h1>
      <div className="reels">
        {reels.map((symbolIndex, index) => (
          <div key={index} className="reel">
            {symbols[symbolIndex]}
          </div>
        ))}
      </div>
      <div className='bet'>
        <p>
            Bet Amount: 
            <input
            type="number"
            value={betAmount}
            min="1"
            max={balance}
            onChange={(e) => setBetAmount(parseInt(e.target.value))}
            />
        </p>
      <p>Balance: {balance}</p>
      </div>
      
      <button onClick={spinReels} className='spin'>Spin</button>
      
    </div>
  );
};

export default SlotMachine;