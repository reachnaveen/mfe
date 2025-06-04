import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductFilter from './ProductFilter';

const App = () => <ProductFilter onFilter={(filters) => console.log(filters)} />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
