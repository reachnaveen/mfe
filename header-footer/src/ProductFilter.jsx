import React, { useState } from 'react';

const ProductFilter = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleFilter = () => {
    const filters = {};
    if (name) filters.name = name;
    if (description) filters.description = description;
    if (price) filters.price = price;
    onFilter(filters);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input placeholder="Max Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick={handleFilter}>Search</button>
    </div>
  );
};

export default ProductFilter;
