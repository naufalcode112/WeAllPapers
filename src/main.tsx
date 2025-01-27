import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './components/test.tsx'
import BottomTabs from './components/BottomTabs.tsx'
import WelcomeText from './components/welcomeText.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WelcomeText />
    <App />
    <BottomTabs />
  </StrictMode>,
)
