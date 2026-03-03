import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/mainlayout'
import Home from './pages/home'
import CategoryPage from './pages/productpage' 
import { CategoryProvider } from './provider/categoryprovider'
import { CoffretProvider } from './provider/coffreprovider'
import AboutPage from './pages/apropos'
import CoffretDisplayPage from './pages/coffretpage'
import ScrollToTopOnRoute from './component/ScrollToTop'
function App() {
  
  return (
    <CoffretProvider>
    <CategoryProvider>
    <MainLayout>
      <ScrollToTopOnRoute />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />  
        {/* Products/Category Page */}
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/coffrets" element={<CoffretDisplayPage />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
    </MainLayout>
    </CategoryProvider>
    </CoffretProvider>

  )
}

export default App