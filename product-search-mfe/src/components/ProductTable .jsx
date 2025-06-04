import React from 'react';
import { Link } from 'react-router-dom';

const ProductTable = ({ products }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">
                <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">
                  {product.name}
                </Link>
              </td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">{product.category}</td>
              <td className="px-4 py-2">{product.stock}</td>
              <td className="px-4 py-2">{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
