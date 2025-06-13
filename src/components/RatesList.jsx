import { getCurrenciesMap, isAvailableCurrency, getRounded } from '../utils'

export default function RatesList({ ratesMap, activeCurrency }) {
  if (!ratesMap) return null

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
              <tr key={cur} className="hover">
                <td>{activeCurrency.name}</td>
                <td className="text-end">{getRounded(rate)}</td>
                <td>{currentCurrency.name}</td>
                <td className="text-end">
                  {getRounded(rate * activeCurrency.value)}{' '}
                  {currentCurrency.sign}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
