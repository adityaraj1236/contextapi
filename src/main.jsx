import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Appcontext } from './context/AppContext.jsx'
import AppcontextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  // yahn use aaya wo AppCobetxt Providr which is in Appcontext.jsx 
  <AppcontextProvider>
     <App />
  </AppcontextProvider>
   

)
