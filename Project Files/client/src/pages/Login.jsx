import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Navbar />

      <section id="logins">

        <div className="login">

          <h2 className="heading">Welcome Back!</h2>

          <p className="sum">
            Login to your BookHive account
          </p>

          <div className="log">
            <label>Email</label>
            <input
              className="inputs"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="log">
            <label>Password</label>

            <input
              className="inputs"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="rem">
            <input type="checkbox" />
            Remember me
          </div>

          <button className="loginb">
    Login →
</button>

          <p className="heading">
            Forgot Password?
          </p>

          <p className="sum">
            Don't have an account?

            <Link to="/signup">
              {" "}Sign Up
            </Link>
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Login;