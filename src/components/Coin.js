import React from 'react'
import {prettifyNumber, prettifyPrice} from '../prettify'

function Coin({coinData, addCoin, portfolio}) {

  const coinMap = coinData.map(coin => (
    <div className="coin-container" key={coin.id}>
      <div className="img-container">
        <img className="coin-img" src={coin.image} alt={coin.id} />
      </div>
      <div className="coin-id-container">
        <h4 className="coin-id">{coin.id}</h4>
        <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
      </div>
        <p className="coin-price">${prettifyPrice(coin.current_price)}</p>
        <p className={coin.price_change_percentage_24h >= 0 ? 'green coin-change' : 'red coin-change'}>{coin.price_change_percentage_24h > 0 ? '+' + coin.price_change_percentage_24h.toFixed(2) : coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p className="coin-volume">${prettifyNumber(coin.total_volume)}</p>
        <p className="coin-mcap">${prettifyNumber(coin.market_cap)}</p>
        <button disabled={portfolio.some(item => item.id === coin.id) ? true : false} className="btn-add" onClick={() => addCoin(coin)}>Add</button>
    </div>
  ))

  return (
    <div>
      <div className="coin-container coin-header">
        <div className="img-container" />
        <div className="coin-id-container">
          <p className="coin-id">Name</p>
        </div>
        <p className="coin-price">Price</p>
        <p className="coin-change">Change 24hr</p>
        <p className="coin-volume">Volume</p>
        <p className="coin-mcap">Market Cap</p>
        <button className="btn-add hide">Add</button>
      </div>
      {coinMap}
    </div>
  )
}

export default Coin