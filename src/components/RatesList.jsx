import { getCurrenciesMap, isAvailableCurrency } from '../utils'

export default function RatesList({ ratesMap, activeCurrency }) {
  if (!ratesMap || !activeCurrency) return null

  const currenciesMap = getCurrenciesMap()

  const currencies = Object.entries(ratesMap).filter(([cur]) =>
    isAvailableCurrency(cur.toUpperCase())
  )

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <tbody>
          {currencies.map(([cur, rate]) => {
            if (activeCurrency.name === cur.toUpperCase()) return

            const currentCurrency = currenciesMap.get(cur.toUpperCase())

            return (
              <tr key={cur}>
                <th>1</th>
                <td>{activeCurrency.name}</td>
                <td>{rate}</td>
                <td>{currentCurrency.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
