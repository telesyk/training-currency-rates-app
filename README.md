# Currency Rates App

This project is a React-based currency converter that fetches live exchange rates. Easily select your currency, enter an amount, and see up-to-date conversions for supported currencies.

## File Structure

The file structure of the project is as follows:

```
src/
├── api/                # API utilities for fetching currency rates
│   └── index.js
├── components/         # Reusable React components
│   ├── CurrencyInput.jsx
│   ├── CurrencySelect.jsx
│   ├── Error.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Loader.jsx
│   └── RatesList.jsx
├── utils/              # Utility functions (currency helpers, formatting, etc.)
│   └── index.js
├── App.jsx             # Main application component
├── main.jsx            # Entry point for React
└── index.css           # Global styles
```

### Tech-stack:

`react-js`, `daisy-ui`, `tailwindcss`, `vite`
The API was using [exchange-api](https://github.com/fawazahmed0/exchange-api#readme)
