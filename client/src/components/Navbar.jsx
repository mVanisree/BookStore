import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <div className="navbar">
      <header>
        <h1>BookHive</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">All Books</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;