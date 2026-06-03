import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App_cr from './App_cr'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*<App_prop/>*/}
    <App_cr/>
  </StrictMode>,
)
