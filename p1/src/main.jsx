import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'primereact/resources/themes/lara-light-teal/theme.css'
import "primeicons/primeicons.css";
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
