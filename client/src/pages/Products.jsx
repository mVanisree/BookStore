import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  if (!products.length) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="book1">
        <h1 id="mainheading">All Books</h1>
        <p className="subheading">Browse our complete collection</p>
      </div>

      <div className="search">
        <input
          type="text"
          id="searchbar"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br />

        <select
          className="dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Self Help">Self Help</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Fiction">Fiction</option>
        </select>
      </div>

      <div className="feature">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    <h2>No books found.</h2>
  )}
</div>

      <Footer />
    </>
  );
}

export default Products;