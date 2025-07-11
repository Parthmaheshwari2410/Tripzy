import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { CityProvider } from './context/CityContext.jsx'

import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <CityProvider>
  <BrowserRouter>
  <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </CityProvider>
  </ClerkProvider>,
)
