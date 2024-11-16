import React from 'react';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';

import './ProductList.css'; 

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products

  const handleAddToCart = product => {
    alert('adding to cart: ' + product.name + " " + product.id)
    setDisabledProducts([...disabledProducts, product.id]); 
    dispatch(addItemToCart(product)); 
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
      {products.map(product => (
        <li key={product.id} className="product-list-item">
        <span>{product.name} - ${product.price}</span>
        <button    
          className={`${disabledProducts.includes(product.id) ? 'disabled' : 'add-to-cart-btn'}`}
          onClick={() => handleAddToCart(product)} 
          disabled={disabledProducts.includes(product.id)}
          >
         Add to Cart
        </button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default ProductList;
