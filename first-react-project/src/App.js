import React from 'react';
import './App.css';
import productsData from './vSchoolProducts'
import Product from './Product'

function App() {
  const products = productsData.map(product => <Product key={product.id} product={product} />)
  return (
    <div>
      {products}
    </div>
  );
}

export default App;
