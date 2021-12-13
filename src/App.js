import React, {useState, useEffect} from 'react'
import './style.css'
import axios from 'axios'
import Coin from './components/Coin'
import Portfolio from './components/Portfolio'

function App() {
  const [coinData, setCoinData] = useState([])
  const [search, setSearch] = useState('')
  const [displayCoins, setDisplayCoins] = useState(true)
  const [displayPortfolio, setDisplayPortfolio] = useState(false)
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem("portfolio");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })

  function handleQuantity(id, qty) {
    setPortfolio(prev => prev.map(coin => {
      if (coin.id === id) {
        coin = {...coin, quantity: qty}
        return coin      
      } else {
        return coin
      }
    }))
  }
  
  function handleChange(e) {
    setSearch(prev => e.target.value)
  }

  const filteredCoins = coinData.filter(coin => (
    (coin.id.toLowerCase().includes(search)
    || coin.symbol.toLowerCase().includes(search)) 
    && coin
  ))

  // Adds coin to portfolio if not already included
  function addCoin(coinObj, disable = true) {
    if (!portfolio.some(coin => coin.id === coinObj.id)) {
      setPortfolio(prev => [...prev, {...coinObj, quantity: 0}])
      localStorage.setItem("portfolio", JSON.stringify(portfolio))
    }
    console.log(localStorage.getItem("portolio"))
  }

  function removeCoin(id) {
    setPortfolio(prev => prev.filter(coin => coin.id !== id))
  }

  function handleDisplayCoins() {
    setDisplayPortfolio(false)
    setDisplayCoins(true)
  }

  function handleDisplayPortfolio() {
    setDisplayPortfolio(true)
    setDisplayCoins(false)
  }

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoinData(res.data)
    })
  }, [search])

  useEffect(() => {
    localStorage.setItem("portfolio", JSON.stringify(portfolio))
  }, [portfolio])

  return (
    <div className="App">
      <div className="nav">
        <button onClick={handleDisplayCoins}>Coins</button>
        <button onClick={handleDisplayPortfolio}>Portfolio</button>
      </div>
      <main>
        {displayCoins && (
          <div className="search-container">  
            <h1>Cryptocurrencies</h1>
            <input
              type="text"
              name="search"
              value={search}
              placeholder="search coins"
              onChange={handleChange}
            />
          </div>
        )}
        {displayPortfolio && (
          <>
            <h1 style={{textAlign:'center', marginBottom:'2em'}}>Portfolio</h1>
            <Portfolio portfolio={portfolio} handleDisplayCoins={handleDisplayCoins} removeCoin={removeCoin} handleQuantity={handleQuantity} />
          </>
        )}
        {displayCoins && (<Coin coinData={filteredCoins} addCoin={addCoin} portfolio={portfolio} />)}
      </main>
    </div>
  )
}


export default App