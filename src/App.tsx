import './App.css'
import './fonts.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './core/common/components/ui/TopBar'
import HomePage from './features/home/ui/pages/HomePage'
import AboutUsPage from './features/about_us/ui/pages/AboutUsPage'
import ServicesPage from './features/services/ui/pages/ServicesPage'
import Footer from './core/common/components/ui/Footer'
  
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar title="PHARUS PHOTOGRAPHY" />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        
        <Footer 
          title="PHARUS PHOTOGRAPHY"
          contactText="Contact"
          showSocialIcons={true}
        />
      </div>
    </Router>
  )
}

export default App
