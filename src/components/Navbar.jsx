import government from "../assets/government.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="gov-logo">
        <img src={government} alt="Government" />
        <div>
          <h3>CleanTrack AI</h3>
          <p>Smart Reporting. Cleaner Cities.</p>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/how-it-works">How It Works</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/about">About</a></li>
      </ul>

      <a href="/login" className="login-btn">
        Login
      </a>
    </nav>
  );
}

export default Navbar;