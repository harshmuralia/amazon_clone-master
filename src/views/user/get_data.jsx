// import React, { useState, useEffect } from 'react';


// function ProductCard({ product }) {
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src={product.imageUrl[0]} alt={product.productName} />
//       </div>
//       <div className="product-info">
//         <h2>{product.productName}</h2>
//         <p>{product.description}</p>
//         <div className="product-price">{product.price}</div>
//         <button>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   console.log("get_data");

//   useEffect(() => {
//     fetch('http://localhost:8081/products')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <ProductCard key={product.productId} product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;










import React, { useState, useEffect } from 'react';
import '../../app.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4 shadow-sm">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="price">${product.price}</span>
                  <button className="btn btn-sm btn-outline-secondary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
