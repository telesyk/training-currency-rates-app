import { isAvailableCurrency } from '../utils'

export default function RatesList({ ratesMap }) {
  if (!ratesMap) return null

  const currencies = Object.entries(ratesMap).filter(([cur]) =>
    isAvailableCurrency(cur.toUpperCase())
  )

  return (
    <div className="container mx-auto p-2 space-y-4">
      {currencies.map(([cur, rate]) => (
        <p key={cur}>
          {cur}: {rate}
        </p>
      ))}
    </div>
  )
}
