import { CURRENCIES } from '../constants'

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
    })
  })

  return newMap
}

export function getActiveCurrency(name = 'EUR') {
  const currenciesMap = getCurrenciesMap()

  return currenciesMap.get(name)
}
