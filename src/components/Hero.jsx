import indiaGate from "../assets/india-gate.jpg";
import government from "../assets/government.png";
function Hero() {
  return (
    <section
      className="hero"
      style={{
  backgroundImage: `
    linear-gradient(
      rgba(0,40,20,.7),
      rgba(0,0,0,.7)
    ),
    url(${indiaGate})
  `
}}
>
      <div className="hero-content">

        <span className="badge">
          AI Powered Civic Reporting Platform
        </span>

        <h1>
          Building a Cleaner,
          Smarter Bharat
        </h1>

        <p>
          Empowering citizens to report sanitation
          issues, track real-time actions,
          and help build cleaner communities.
        </p>

        <div className="hero-buttons">
          <a href="#report">
            <button className="primary-btn">
            Report an Issue
          </button>
         </a>
          <button className="track-btn">
            Track Issue
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;