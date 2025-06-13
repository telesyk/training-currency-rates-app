import { useEffect, useState } from 'react'
import { Footer, RatesList } from './components'
import api from './api'
import { getActiveCurrency } from './utils'

const activeCurrency = getActiveCurrency()
const apiUrl = api.currency(activeCurrency.name.toLowerCase())

function App() {
  const [currency, setCurrency] = useState({ ...activeCurrency, value: 1 })
  const [ratesMap, setRatesMap] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
        setRatesMap(json.eur)
      })
      .catch(err => {
        console.error(err)
        setError('Failed to fetch rates')
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className="container mx-auto p-4 space-y-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
          officia, deserunt perferendis sapiente nisi qui suscipit natus
          explicabo, minima assumenda, tempore est consequatur ullam eaque.
          Perferendis fugit sint numquam illo?
        </p>
      </div>
      {loading && (
        <div className="container mx-auto">
          <progress className="progress w-56"></progress>
        </div>
      )}

      {error && <p className="text-red-500 container mx-auto">{error}</p>}

      <RatesList ratesMap={ratesMap} activeCurrency={currency} />
      <Footer />
    </>
  )
}

export default App
