import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <section className="login-page">

       
       <div className="login-header">
  <div className="login-icon">🛡️</div>
  <h2>Citizen Portal</h2>
  <p>
    Secure access to report issues, track complaints and
    contribute towards a cleaner Bharat.
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

          <button>
            Login
          </button>

        </form>
      </section>
    </>
  );
}

export default Login;