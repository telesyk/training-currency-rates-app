import { getCurrenciesMap } from '../utils'

function CurrencyOption({ option }) {
  return (
    <option value={option.name}>
      {option.name} {option.sign}
    </option>
  )
}

export default function CurrencySelect({ currentCurrency, handleSelect }) {
  if (!currentCurrency || !handleSelect) return

  const currenciesMap = getCurrenciesMap()

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={event => handleSelect(event.target)}
      defaultValue={currentCurrency.name}
    >
      <option disabled defaultValue={'Select currency'}>
        Select currency
      </option>
      {[...currenciesMap].map(([key, item]) => (
        <CurrencyOption key={key} option={item} />
      ))}
    </select>
  )
}
