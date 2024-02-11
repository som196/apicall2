import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: {}, isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="answer-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="currency-box">
              <div className="details-container">
                <div className="logo-name-container">
                  <p className="currency">Currency</p>
                  <p className="type">Type</p>
                </div>
                <div className="usd-euro-container">
                  <p className="usd">USD</p>
                  <p className="euro">EURO</p>
                </div>
              </div>
              {currencyList.map(each => (
                <CryptocurrencyItem each={each} key={each.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
