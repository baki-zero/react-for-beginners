import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollor, setDollor] = useState(1);
  const [btc, setBtc] = useState(0.000057);
  
  const onChange = (event) => {
    setDollor(event.target.value);
    setBtc(0.000057);
  };

  const changeAmount = (event) => {
    setDollor(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr></hr>
      <h1>Enter the amount (dollor)</h1>
      <div>
        <input
          type="number"
          value={dollor}
          onChange={changeAmount}
          placeholder="dollor"
        />
        </div>
        <hr></hr>
        <h1>You can get {dollor*0.000057}BTC</h1>
    </div>
  );
}

export default App;
