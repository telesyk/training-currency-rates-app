import { CURRENCIES, DEFAULT_AMOUNT, DEFAULT_CURRENCY } from '../constants'

export function isAvailableCurrency(currencyName) {
  const currenciesNames = CURRENCIES.map(item => {
    const name = Object.keys(item)
    return name[0]
  })

  return currenciesNames.includes(currencyName)
}

export function getCurrenciesMap() {
  const newMap = new Map()

  CURRENCIES.forEach(item => {
    const [[key, value]] = Object.entries(item)
    newMap.set(key, {
      name: key,
      sign: value,
      value: DEFAULT_AMOUNT,
    })
  })

  return newMap
}

export function getActiveCurrency(name) {
  const currenciesMap = getCurrenciesMap()

  return currenciesMap.get(name?.toUpperCase() || DEFAULT_CURRENCY)
}

export function getRounded(value) {
  if (!value) return
  return Math.round(100000 * value) / 100000
}
