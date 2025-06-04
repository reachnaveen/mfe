
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <div className="text-gray-700 mb-1">{product.price}</div>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}
