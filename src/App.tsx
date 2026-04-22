import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/mainlayout'
import Home from './pages/home'
import CategoryPage from './pages/productpage' 
import { CategoryProvider } from './provider/categoryprovider'
import { CoffretProvider } from './provider/coffreprovider'
import { ProductProvider } from './context/ProductContext'
import AboutPage from './pages/apropos'
import CoffretDisplayPage from './pages/coffretpage'
import ScrollToTop from './component/ScrollToTop'
import ImpressionCameroun from './pages/impression-cameroun'
import ImpressionYaounde from './pages/impression-yaounde'
import ImpressionDouala from './pages/impression-douala'
import PhotocopieYaounde from './pages/photocopie-yaounde'
import PhotocopieDouala from './pages/photocopie-douala'
import ReliureCameroun from './pages/reliure-cameroun'
import FournituresBureauCameroun from './pages/fournitures-bureau-cameroun'
import DesignGraphiqueCameroun from './pages/design-graphique-cameroun'

function App() {
  
  return (
    <ProductProvider>
    <CoffretProvider>
    <CategoryProvider>
    <MainLayout>
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />  
        {/* Products/Category Page */}
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/coffrets" element={<CoffretDisplayPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* SEO Pages */}
        <Route path="/impression-cameroun" element={<ImpressionCameroun />} />
        <Route path="/impression-yaounde" element={<ImpressionYaounde />} />
        <Route path="/impression-douala" element={<ImpressionDouala />} />
        <Route path="/photocopie-yaounde" element={<PhotocopieYaounde />} />
        <Route path="/photocopie-douala" element={<PhotocopieDouala />} />
        <Route path="/reliure-cameroun" element={<ReliureCameroun />} />
        <Route path="/fournitures-bureau-cameroun" element={<FournituresBureauCameroun />} />
        <Route path="/design-graphique-cameroun" element={<DesignGraphiqueCameroun />} />
        
      </Routes>
    </MainLayout>
    </CategoryProvider>
    </CoffretProvider>
    </ProductProvider>

  )
}

export default App