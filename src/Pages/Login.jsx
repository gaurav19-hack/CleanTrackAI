import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {
      alert("No account found. Create account first.");
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful ✅");

      navigate("/");
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  const createAccount = () => {
    const name = prompt("Enter Name");
    const email = prompt("Enter Email");
    const password = prompt("Enter Password");

    if (!name || !email || !password) return;

    const existingUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      existingUser &&
      existingUser.email === email
    ) {
      alert(
        "Account already exists with this email"
      );
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password
      })
    );

    alert(
      "Account Created Successfully ✅"
    );
  };

  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="login-container">

          <div className="login-left">
            <div className="login-icon">🛡️</div>

            <h2>Citizen Portal Login</h2>

            <p>
              Secure access to report issues,
              track complaints and contribute
              towards a cleaner Bharat.
            </p>
          </div>

          <form
            className="login-form"
            onSubmit={handleLogin}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button
              type="button"
              onClick={createAccount}
            >
              New User? Create Account
            </button>

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