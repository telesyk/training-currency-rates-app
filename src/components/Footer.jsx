import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg' // Public directory
import daisyuiLogo from '/daisyui.svg'

export default function Footer() {
  return (
    <footer className="max-w-xl mx-auto p-4 flex gap-6 justify-center items-center border-t border-sky-900">
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="w-6 h-6" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="w-6 h-6" alt="React logo" />
      </a>
      <a href="https://daisyui.com" target="_blank">
        <img src={daisyuiLogo} className="w-auto h-6" alt="daisyUI logo" />
      </a>
      <h1 className="text-xl font-bold text-center">
        Build with 🫶 & Vite + React
      </h1>
    </footer>
  )
}
