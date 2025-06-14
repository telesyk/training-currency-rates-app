export default function Header() {
  return (
    <div className="max-w-xl mx-auto navbar justify-evenly bg-base-100">
      <div className="flex-auto">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-auto">
        <h1 className="text-xl font-bold">Simple Currency Rates App 💱</h1>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
