import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Navbar />

      <section id="signin">

        <div className="createacc">

          <h2 className="heading">
            Create Your Account
          </h2>

          <p className="sum">
            Join thousands of readers
          </p>

          <div className="info">

            <div className="sign">
              <label>Full Name</label>
              <input className="inputs" type="text" />
            </div>

            <div className="sign">
              <label>Email</label>
              <input className="inputs" type="email" />
            </div>

            <div className="sign">
              <label>Phone</label>
              <input className="inputs" type="text" />
            </div>

            <div className="sign">
              <label>Password</label>
              <input className="inputs" type="password" />
            </div>

            <div className="sign">
              <label>Confirm Password</label>
              <input className="inputs" type="password" />
            </div>

            <button className="createaccb">
    Create Account →
</button>

            <p className="sum">
              Already have an account?

              <Link to="/login">
                {" "}Login
              </Link>
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Signup;