import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  return (
    <div className="book-card">
      <img src={product.image} alt={product.title} />

<h3>
  {product.title.length > 25
    ? product.title.substring(0, 25) + "..."
    : product.title}
</h3>
<h2 style={{color:"#5b2701"}}>
  ₹{product.price}
</h2>
      <button
        className="addtocart"
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;