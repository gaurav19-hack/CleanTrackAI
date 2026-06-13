import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/complaints"
      );

      setComplaints(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const totalReports = complaints.length;

  const pendingReports = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const resolvedReports = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const aiVerifiedReports = complaints.filter(
    (c) => c.aiVerification?.verified
  ).length;

  return (
    <>
      <Navbar />

      <section className="dashboard">
        <h2>Dashboard</h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>{totalReports}</h3>
            <p>Total Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>{pendingReports}</h3>
            <p>Pending Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>{resolvedReports}</h3>
            <p>Resolved Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>{aiVerifiedReports}</h3>
            <p>AI Verified Reports</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Dashboard;