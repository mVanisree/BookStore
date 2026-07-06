import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />

      <div className="half">
        <div className="book1">
          <h2 id="mainheading">About BookHive</h2>
          <p className="subheading">
            Our story, our mission, our love for books
          </p>
        </div>

        <div className="aboutsec">

          <div className="heading">
            <h2>Our Story</h2>
          </div>

          <p className="sum1">
            BookHive was born in 2024 from a simple idea — every reader deserves
            easy access to the best books at affordable prices. We carefully
            curate books from Indian and international authors.
          </p>

          <div className="bookshype">

            <div className="aboutbooks">
              <h2 className="booksnum">50K+</h2>
              <p className="sum">Books Available</p>
            </div>

            <div className="aboutbooks">
              <h2 className="booksnum">2L+</h2>
              <p className="sum">Happy Customers</p>
            </div>

            <div className="aboutbooks">
              <h2 className="booksnum">500+</h2>
              <p className="sum">Indian Authors</p>
            </div>

            <div className="aboutbooks">
              <h2 className="booksnum">95%</h2>
              <p className="sum">Customer Satisfaction</p>
            </div>

          </div>

          <div className="heading">
            <h3>Our Mission</h3>
          </div>

          <p className="sum1">
            To make great books accessible to every reader through fair pricing,
            curated collections and quality service.
          </p>

          <div className="heading">
            <h3>Why Choose BookHive?</h3>
          </div>

          <ul className="sum1">
            <li>Curated Collection</li>
            <li>Affordable Prices</li>
            <li>Free Delivery</li>
            <li>Easy Returns</li>
            <li>Trusted by Thousands</li>
          </ul>

          <div className="heading">
            <h3>Our Team</h3>
          </div>

          <p className="sum1">
            We are a team of passionate readers and developers building a better
            online book shopping experience.
          </p>

          <div className="heading">
            <h3>Get In Touch</h3>
          </div>

          <p className="sum1">
            <Link to="/contact">Contact Us</Link>
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;