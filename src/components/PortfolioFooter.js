import React from 'react'

function PortfolioFooter({totalMarketValue}) {
  return (
    <div class="coin-container coin-footer">
        <div className="img-container" />
        <div className="coin-id-container">
          <p className="coin-id"></p>
        </div>
        <p className="coin-price"></p>
        <p className="coin-quantity"></p>
        <div className="portfolio-market-value-container">
          <p className="coin-market-value">${totalMarketValue.toLocaleString(2)}</p>
        </div>
        <button className="btn-remove hide">X</button>
      </div>
  )
}

export default PortfolioFooter
