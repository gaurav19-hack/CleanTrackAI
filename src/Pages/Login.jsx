import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function Login() {
  return (
    <>
      <Navbar />

      <section className="login-page">

        <div className="login-container">

          <div className="login-left">
            <div className="login-icon">🛡️</div>

            <h2>Citizen Portal </h2>
            <h2>Login</h2>

            <p>
              Secure access to report issues, track complaints
              and contribute towards a cleaner Bharat.
            </p>

            
          </div>

          <form className="login-form">

            

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />
            <button type="New User"> New User? Create account</button>
            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Login;