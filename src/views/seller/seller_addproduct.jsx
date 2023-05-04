// // footer
// import Footer from "@/components/template/footer/Footer";
// // sub-menu

// import Header_seller from "../../components/template/header/Header_seller";

// export default function Add_product() {
//   return (
//     <>
//       <Header_seller />
      
//       <Footer />
//     </>
//   );
// }



// footer
import Footer from "@/components/template/footer/Footer";
// sub-menu
import Header_seller from "../../components/template/header/Header_seller";
import { useState } from "react";
import "../../style/AddProductForm/AddProductForm.css";

export default function Add_product() {
  const [sellerId, setSellerId] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      sellerId,
      productName,
      description,
      category,
      price,
      imageUrl: imageUrl.split(","),
    };
    console.log(product);
    // You can send the product data to your backend API here
  };

  return (
    <>
      <Header_seller />
      <main className="add-product-container">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>

          {/* <div className="form-group">
            <label htmlFor="sellerId">Seller ID:</label>
            <input
              type="text"
              id="sellerId"
              value={sellerId}
              onChange={(event) => setSellerId(event.target.value)}
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </div>

          <button type="submit" className="add-product-btn">
            Add Product
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
