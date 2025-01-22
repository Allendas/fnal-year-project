
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import AppCOntextProvider from './context/AppContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppCOntextProvider>
      <App/>
    </AppCOntextProvider>
   
  </BrowserRouter>

)
