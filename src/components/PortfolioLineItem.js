import React, {useState, useEffect} from 'react'
import {prettifyPrice} from '../prettify'

function PortfolioLineItem({coin, removeCoin, handleQuantity, portfolio}) {
  const [quantity, setQuantity] = useState(coin.quantity)

  function handleChange(e) {
    e.preventDefault()
    setQuantity(prev => e.target.value)
  }
  
  useEffect(() => {
    handleQuantity(coin.id, quantity)
  }, [quantity])
  
  return (
    <div key={coin.id} className="coin-container portfolio-coin-container">
      <div className="img-container">
        <img className="coin-img" src={coin.image} alt={coin.id} />
      </div>
      <div className="coin-id-container">
        <h3 className="coin-id">{coin.id}</h3>
        <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
      </div>
      <p className="coin-price">${prettifyPrice(coin.current_price)}</p>
      <input
        className="portfolio-input coin-quantity"
        type="number"
        name="quantity"
        value={quantity}
        onChange={handleChange}
      />
      <div className="portfolio-price-container">
        <p className="coin-market-value">${(quantity * coin.current_price).toLocaleString("en-US")}</p>
        <p className={coin.price_change_percentage_24h >= 0 ? 'green coin-change' : 'red coin-change'}>{coin.price_change_percentage_24h > 0 ? '+' + coin.price_change_percentage_24h.toFixed(2) : coin.price_change_percentage_24h.toFixed(2)}%</p>
      </div>
      <button className="btn-remove" onClick={() => removeCoin(coin.id)}>X</button>
    </div>
  )
}

export default PortfolioLineItem
