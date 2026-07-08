import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="half">
        <h1 className="heading">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="cart">
            <h2>Your Cart is Empty</h2>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="book-card"
                style={{ margin: "20px" }}
              >
                <img src={item.image} alt={item.title} />

                <h2>{item.title}</h2>

                <h3>₹{item.price}</h3>

                <h3>Quantity : {item.quantity}</h3>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <button
                    className="addtocart"
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    -
                  </button>

                  <button
                    className="addtocart"
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>

                  <button
                    className="addtocart"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <h2 className="heading">
              Total Items : {totalItems}
            </h2>

            <h2 className="heading">
              Total Price : ₹{totalPrice.toFixed(2)}
            </h2>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;