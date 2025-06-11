import { CURRENCIES } from '../constants'

export function isAvailableCurrency(currencyName) {
  const currenciesNames = CURRENCIES.map(item => {
    const name = Object.keys(item)
    return name[0]
  })

  return currenciesNames.includes(currencyName)
}
