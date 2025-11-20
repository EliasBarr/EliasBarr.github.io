import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import './index.css'
import App from './App.tsx'

// Handle redirect from 404.html for SPA routing on GitHub Pages
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, '', redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
