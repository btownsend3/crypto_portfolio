import React from 'react'

function PortfolioHeader() {
  return (
    <div class="coin-container coin-header">
      <div className="img-container" />
      <div className="coin-id-container">
        <p className="coin-id">Name</p>
      </div>
      <p className="coin-price">Price</p>
      <p className="coin-quantity">Quantity</p>
      <p className="coin-change">Market Value</p>
      <button className="btn-remove hide">X</button>
    </div>
  )
}

export default PortfolioHeader
