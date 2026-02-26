import './App.css'
import './fonts.css'
import { useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AppProvider } from './core/contexts/AppContext'
import TopBar from './core/common/ui/components/TopBar'
import HomePage from './features/home/ui/pages/HomePage'
import AboutUsPage from './features/about_us/ui/pages/AboutUsPage'
import ServicesPage from './features/services/ui/pages/ServicesPage'
import PortfolioPage from './features/portfolio/ui/pages/PortfolioPage'
import PortfolioCategoryPage from './features/portfolio/ui/pages/PortfolioCategoryPage'
import Footer from './core/common/ui/components/Footer'
import WeddingPage from './features/services/ui/pages/WeddingPage'
import PeopleStudioPortraitsPage from './features/services/ui/pages/PeopleStudioPortraitsPage'
import ProductPhotographyPage from './features/services/ui/pages/ProductPhotographyPage'
import EventsPage from './features/services/ui/pages/EventsPage'
import { APP_CONSTANTS } from './core/constants/appConstants'
import { usePreloadImages } from './core/hooks/usePreloadImages'
import { preloadPortfolioImages } from './core/utils/preloadPortfolioImages'
import { ALL_PORTFOLIO_IMAGE_PATHS } from './features/portfolio/constants/portfolioAssets'
import { ALL_HOME_IMAGE_PATHS } from './features/home/constants/homeAssets'

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const preloadPortfolio = useCallback(() => {
    preloadPortfolioImages([...ALL_PORTFOLIO_IMAGE_PATHS, ...ALL_HOME_IMAGE_PATHS]);
  }, []);

  usePreloadImages(preloadPortfolio);

  return (
    <div className="App">
      <TopBar title={APP_CONSTANTS.title} showBrand={!isHomePage} onPortfolioLinkHover={preloadPortfolio} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/wedding-portfolio" element={<PortfolioCategoryPage />} />
            <Route path="/family-portfolio" element={<PortfolioCategoryPage />} />
            <Route path="/product-portfolio" element={<PortfolioCategoryPage />} />
            <Route path="/event-portfolio" element={<PortfolioCategoryPage />} />
            <Route path="/services/weddings" element={<WeddingPage />} />
            <Route path="/people-studio-portraits" element={<PeopleStudioPortraitsPage />} />
            <Route path="/product-photography" element={<ProductPhotographyPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
          
      <Footer 
        title={APP_CONSTANTS.title}
        showSocialIcons={true}
      />
    </div>
  );
}
  
function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  )
}

export default App
