import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="book1">
        <h1 id="mainheading">Welcome to BookHive</h1>

        <p className="subheading">
          Good Afternoon! Discover your next favorite book.
        </p>

<Link to="/products">
  <button className="browse">
    Browse Books
  </button>
</Link>
      </div>

      <h2 className="heading">Featured Books</h2>

      <p className="sum">
        Hand-picked bestsellers loved by readers across India
      </p>

      <div className="feature">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;