import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="dashboard">
        <h2>Dashboard</h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>0</h3>
            <p>Total Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>0</h3>
            <p>Pending Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>0</h3>
            <p>Resolved Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>0</h3>
            <p>Rewards</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Dashboard;