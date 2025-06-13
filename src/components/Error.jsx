export default function Loader({ error }) {
  if (!error) return

  return (
    <div className="container mx-auto min-h-96 flex justify-center items-center">
      <div className="rounded-lg p-8 space-y-4 font-mono bg-red-100/15 text-red-500">
        <p>Error ⛔️</p>
        <p>{error}</p>
      </div>
    </div>
  )
}
