import React from 'react'

function PortfolioHeader() {
  return (
    <div className="coin-container coin-header">
      <div className="img-container" />
      <div className="coin-id-container">
        <p className="coin-id">Name</p>
      </div>
      <p className="coin-price">Price</p>
      <p className="coin-quantity">Quantity</p>
      <div className="portfolio-market-value-container">
        <p className="coin-change">Market Value</p>
      </div>
      <button className="btn-remove hide">X</button>
    </div>
  )
}

export default PortfolioHeader
