import Navbar from "../components/Navbar";

function SocialImpact() {
  return (
    <>
      <Navbar />

      <section
  className="social-page"
  style={{
    paddingTop: "140px",
    minHeight: "100vh"
  }}
>

        <h1>Social Impact Dashboard</h1>

        <p className="social-subtitle">
          Complaints amplified through social media to increase
          transparency and citizen engagement.
        </p>

        <div className="social-stats">

          <div className="social-stat-card">
            <h2>48</h2>
            <p>Complaints Shared</p>
          </div>

          <div className="social-stat-card">
            <h2>12.5K</h2>
            <p>Total Reach</p>
          </div>

          <div className="social-stat-card">
            <h2>34</h2>
            <p>Resolved After Sharing</p>
          </div>

        </div>

        <div className="complaint-feed">

          <div className="complaint-card">

            <div className="platforms">
              🐦 📸 💼
            </div>

            <h3>Garbage Dump Near Market</h3>

           <p>
            <strong>ID:</strong> CT-101 
          </p>

         <p>
          <strong>Status:</strong> Pending
         </p>

            <span className="reach">
              👁️ 520 People Reached
            </span>

          </div>

          <div className="complaint-card">

            <div className="platforms">
              🐦 📸 💼
            </div>

            <h3>Broken Streetlight</h3>

            <p>
              Complaint ID: CT-102
            </p>

            <p>
              Status: Resolved
            </p>

            <span className="reach">
              👁️ 1.4K People Reached
            </span>

          </div>

          <div className="complaint-card">

            <div className="platforms">
              🐦 📸 💼
            </div>

            <h3>Drainage Blockage</h3>

            <p>
              Complaint ID: CT-103
            </p>

            <p>
              Status: In Progress
            </p>

            <span className="reach">
              👁️ 890 People Reached
            </span>

          </div>

        </div>

      </section>
    </>
  );
}

export default SocialImpact;