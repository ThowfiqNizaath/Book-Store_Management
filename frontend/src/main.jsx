import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import ContextProvider from './Context/context.jsx'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById("root")).render(
  <SnackbarProvider>
    <ContextProvider
      maxSnack = {3}
    >
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </SnackbarProvider>
);
