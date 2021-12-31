import React, {useState, useEffect} from 'react'
import PortfolioLineItem from './PortfolioLineItem'
import PortfolioHeader from './PortfolioHeader'
import PortfolioFooter from './PortfolioFooter'

function Portfolio({portfolio, removeCoin, handleDisplayCoins, quantity, handleQuantity}) {
  const [totalMarketValue, setTotalMarketValue] = useState(0)

  const portfolioMap = portfolio.map(coin => (<PortfolioLineItem key={coin.id} coin={coin} removeCoin={removeCoin} handleQuantity={handleQuantity} portfolio={portfolio}/>))
  
  // returns the total market value of portfolio
  function handleMarketValue() {
    const portfolioMarketCapMap = portfolio.map(coin => coin.quantity > 0 ? parseFloat(coin.quantity) * parseFloat(coin.current_price) : 0)
    
    if (portfolioMarketCapMap.length > 0) {
      return portfolioMarketCapMap.reduce((a, b) => a + b)
    } else {
      return 0
    }
  }

  // updates the total market value upon a change in portfolio
  useEffect(() => {
    setTotalMarketValue(prev => handleMarketValue())
  }, [portfolio])

  console.log(totalMarketValue)

  return (
    <div>
      {portfolio.length > 0 && <PortfolioHeader />}
      {portfolio.length > 0 ? portfolioMap : (
        <div className="nothing-container">
          <h3>There is nothing here. Add some coins</h3>
          <button onClick={handleDisplayCoins}>here</button>
        </div>
      )}
      {portfolio.length > 0 && <PortfolioFooter totalMarketValue={totalMarketValue} />}
    </div>
  )
}

export default Portfolio
