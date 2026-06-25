import { useEffect, useState } from "react";
import axios from "axios";

function Stats() {
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

  const stats = [
    {
      icon: "📢",
      value: complaints.length,
      label: "Issues Reported"
    },
    {
      icon: "✅",
      value: complaints.filter(
        (c) => c.status === "Resolved"
      ).length,
      label: "Resolved Cases"
    },
    {
      icon: "👥",
      value: new Set(
        complaints.map((c) => c.name)
      ).size,
      label: "Active Citizens"
    },
    {
      icon: "⚡",
      value: "24h",
      label: "Average Response"
    }
  ];

  return (
    <>
      <div className="stats-header">
        <h2>Platform Statistics</h2>
        <p>
          Live community impact and engagement metrics
        </p>
      </div>

      <section className="stats">
        {stats.map((item, index) => (
          <div
            className="stat-card"
            key={index}
          >
            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.value}</h2>

            <p>{item.label}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Stats;