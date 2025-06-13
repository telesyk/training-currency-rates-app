import { useEffect, useState } from 'react'
import {
  Footer,
  RatesList,
  Loader,
  Error,
  Header,
  CurrencySelect,
} from './components'
import api from './api'
import { getActiveCurrency } from './utils'
import { DEFAULT_AMOUNT } from './constants'

function App() {
  const [currency, setCurrency] = useState({ ...getActiveCurrency() })
  const [ratesMap, setRatesMap] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [apiUrl, setApiUrl] = useState(api.currency(getActiveCurrency().name))

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
        setRatesMap(json[currency.name.toLowerCase()])
      })
      .catch(err => {
        console.error(err)
        setError('Failed to fetch rates')
      })
      .finally(() => setLoading(false))
  }, [apiUrl])

  const handleSelect = target => {
    const currentCurrency = getActiveCurrency(target.value)

    setApiUrl(api.currency(currentCurrency.name))
    setCurrency(prev => ({ ...currentCurrency, value: prev.value }))
  }

  return (
    <>
      <Header />

      {loading && <Loader />}

      {error && <Error error={error} />}

      {!error && !loading && (
        <div className="container mx-auto flex flex-col gap-4 py-4">
          <div className="flex justify-between items-center gap-4">
            <CurrencySelect
              currentCurrency={currency}
              handleSelect={handleSelect}
            />
            <p>
              {DEFAULT_AMOUNT} {currency.sign} {/* Need to add INPUT */}
            </p>
          </div>
          <RatesList ratesMap={ratesMap} activeCurrency={currency} />
        </div>
      )}

      <Footer />
    </>
  )
}

export default App
