import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="product-details">

        <img
          src={product.image}
          alt={product.title}
        />

        <div className="product-info">

          <h1>{product.title}</h1>

          <h2>Author: {product.author}</h2>

          <h3>Category: {product.category}</h3>

          <h2>₹{product.price}</h2>

          <p>{product.description}</p>

          <button
            className="addtocart"
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;