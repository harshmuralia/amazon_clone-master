// // footer
// import Footer from "@/components/template/footer/Footer";
// // header
// import Header_seller from "../../components/template/header/Header_seller";

// export default function Dashboard() {
//   return (
//     <>
//       <Header_seller />

//       <Footer />
//     </>
//   );
// }


// // footer
// import Footer from "@/components/template/footer/Footer";
// // header
// import Header_seller from "../../components/template/header/Header_seller";
// import { useEffect, useState } from "react";
// import "../../style/Dashboard/Dashboard.css";

// export default function Dashboard() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch all products uploaded by the logged-in seller from the API
//     fetch("/api/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <>
//       <Header_seller />

//       <main className="dashboard-container">
//         <h1>My Products</h1>
//         <div className="product-list">
//           {products.map((product) => (
//             <div className="product-card" key={product.id}>
//               <img src={product.imageUrl} alt={product.productName} />
//               <h2>{product.productName}</h2>
//               <p>{product.description}</p>
//               <p>Category: {product.category}</p>
//               <p>Price: ${product.price}</p>
//             </div>
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }













// footer
import Footer from "@/components/template/footer/Footer";
// header
import Header_seller from "../../components/template/header/Header_seller";
import { useEffect, useState } from "react";
import "../../style/Dashboard/Dashboard.css";

export default function Dashboard() {
  const [products, setProducts] = useState([]);



  

  useEffect(() => {
    // Fetch all products uploaded by the logged-in seller from the API
    fetch('http://localhost:8081/products', {

  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ seller: 'seller_1' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
    // fetch("localhost:8081/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
  }, []);

  const handleEdit = (productId) => {
    // Handle edit button click
    console.log(`Edit product ${productId}`);
  };

  const handleDelete = (productId) => {
    // Handle delete button click
    fetch(`/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Deleted product ${productId}`);
        setProducts(products.filter((product) => product.id !== productId));
      });
  };

  return (
    <>
      <Header_seller />

      <main className="dashboard-container">
        <h1>My Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.imageUrl} alt={product.productName} />
              <h2>{product.productName}</h2>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <div className="product-buttons">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
