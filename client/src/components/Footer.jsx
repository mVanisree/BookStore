import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="quick">
        <div className="links">
          <h3 className="lastheading">BookHive</h3>
          <p className="mainheading">
            India's favorite online bookstore.
          </p>
        </div>

        <div className="links">
          <h3 className="lastheading">Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Books</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="links">
          <h3 className="lastheading">Categories</h3>
          <Link to="/products">Fiction</Link>
          <Link to="/products">Business</Link>
          <Link to="/products">Self Help</Link>
        </div>
      </div>

      <hr />
      <p className="copyright">
        © 2026 BookHive.
      </p>
    </footer>
  );
}

export default Footer;