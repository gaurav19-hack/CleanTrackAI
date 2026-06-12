import Navbar from "../components/Navbar";

function HowItWorks() {
  return (
    <>
      <Navbar />

      <section className="how-it-works">
        <h2>How CleanTrack AI Works</h2>

        <div className="steps-grid">

          <div className="step-card">
            <h3>🚨 Report Issue</h3>
            <p>Citizen uploads issue image.</p>
          </div>

          <div className="step-card">
            <h3>🤖 AI Verification</h3>
            <p>System verifies complaint.</p>
          </div>

          <div className="step-card">
            <h3>🏛 Authority Action</h3>
            <p>Complaint reaches department.</p>
          </div>

          <div className="step-card">
            <h3>✅ Resolution</h3>
            <p>Issue gets resolved.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default HowItWorks;