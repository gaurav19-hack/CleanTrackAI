import Navbar from "../components/Navbar";

function Features() {
  return (
    <>
      <Navbar />

      <section className="features">
        <div className="section-title">
          <h2>Why Choose CleanTrack AI?</h2>
          <p>
            Advanced technology empowering citizens and authorities.
          </p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <h3>🤖 AI Verification</h3>
            <p>Detect fake complaints automatically.</p>
          </div>

          <div className="feature-card">
            <h3>📍 Real-Time Tracking</h3>
            <p>Track complaint status instantly.</p>
          </div>

          <div className="feature-card">
            <h3>🏆 Citizen Rewards</h3>
            <p>Earn badges and recognition.</p>
          </div>

          <div className="feature-card">
            <h3>🛡️ Transparent System</h3>
            <p>Build trust and accountability.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Features;