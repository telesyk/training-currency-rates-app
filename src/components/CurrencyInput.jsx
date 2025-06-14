export default function CurrencyInput({ value, handleChange }) {
  if (!value || !handleChange) return

  return (
    <input
      type="number"
      placeholder="100"
      value={value}
      className="input w-full max-w-xs text-end"
      maxLength="10"
      max="1000000000"
      onChange={handleChange}
    />
  )
}
