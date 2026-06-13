import government from "../assets/government.png";
import { Link } from "react-router-dom";

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/report">Report Issue</Link></li>
        <li><Link to="/track">Track Issue</Link></li>
        <li><Link to="/officer">Officer Panel</Link></li>
        <li><Link to="/about">About</Link></li>
        <li> <Link to="/heatmap">Heatmap</Link> </li>
        <li> <Link to="/socialimpact">SocialImpact</Link></li>
      </ul>

      <Link to="/login" className="login-btn">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;