import './index.css'

const CryptocurrencyItem = props => {
  const {each} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = each
  return (
    <li className="details-container">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd-value">{usdValue}</p>
        <p className="eruo-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
