import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const ProductFilter = lazy(() => import('productFilter/ProductFilter'));
const ProductSearch = lazy(() => import('productSearch/ProductSearch'));
const DetailsPage = lazy(() => import('details/DetailsPage'));

function PageRoutes() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [filters, setFilters] = useState({});
  return (

    <main className="flex-1 p-4">
      {isHomePage && <ProductFilter onFilter={setFilters} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductSearch filters={filters} />} />
          <Route path="/product/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
