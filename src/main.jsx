import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import { Store } from './slice/store/store'
import './i18n'; 


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <App/>
    </StrictMode>
  </Provider>
  
)
