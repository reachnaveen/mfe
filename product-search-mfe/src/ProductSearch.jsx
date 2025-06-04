import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from './components/ProductTable ';
import './ProductSearch.css';

const ProductSearch = ({ filters }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(filters).toString();
    fetch(`http://localhost:4000/api/products?${params}`)
      .then(res => res.json())
      .then(setProducts);
  }, [filters]);

  return (
    <div className="p-4">
      <ProductTable products={products} />
    </div>
  );
};

export default ProductSearch;
