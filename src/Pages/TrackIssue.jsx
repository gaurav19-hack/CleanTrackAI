import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import smartIndia from "../assets/smart-india.jpg";

function TrackIssue() {
  const [id, setId] = useState("");
  const [complaint, setComplaint] = useState(null);

  const searchComplaint = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/complaints/${id}`
      );

      setComplaint(res.data);
    } catch (err) {
      alert("Complaint Not Found");
    }
  };

  return (
    <>
      <Navbar />

      <section
        className="dashboard"
        style={{
          minHeight: "100vh",
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.7)
          ), url(${smartIndia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "120px",
          paddingBottom: "50px"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "60px",
            marginBottom: "30px"
          }}
        >
          Track Issue
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "30px"
          }}
        >
          <input
            type="text"
            placeholder="Enter Complaint ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{
              width: "350px",
              padding: "12px",
              borderRadius: "10px",
              border: "none"
            }}
          />

          <button
            onClick={searchComplaint}
            style={{
              padding: "12px 25px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: "#22c55e",
              color: "white",
              fontWeight: "bold"
            }}
          >
            Track
          </button>
        </div>

        {complaint && (
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "25px",
              color: "white",
              boxShadow:
                "0 0 20px rgba(0,0,0,0.4)"
            }}
          >
            <h2>{complaint.id}</h2>

            <p>
              <strong>Name:</strong>{" "}
              {complaint.name}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {complaint.category}
            </p>

            <p>
              <strong>Status:</strong>

              <span
                style={{
                  marginLeft: "10px",
                  padding: "6px 15px",
                  borderRadius: "20px",
                  background:
                    complaint.status ===
                    "Resolved"
                      ? "#16a34a"
                      : "#f59e0b",
                  color: "white"
                }}
              >
                {complaint.status}
              </span>
            </p>

            <p>
              <strong>Description:</strong>{" "}
              {complaint.description}
            </p>

            {complaint.image && (
              <img
                src={`http://localhost:5000/uploads/${complaint.image}`}
                alt="Issue"
                style={{
                  width: "100%",
                  maxHeight: "450px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  marginTop: "20px"
                }}
              />
            )}

            <div
              style={{
                marginTop: "25px",
                background:
                  "rgba(255,255,255,0.08)",
                padding: "20px",
                borderRadius: "15px"
              }}
            >
              <h3>
                🤖 AI Verification
              </h3>

              <p>
                <strong>Issue:</strong>{" "}
                {
                  complaint.aiVerification
                    ?.issue
                }
              </p>

              <p>
                <strong>
                  Confidence:
                </strong>{" "}
                {
                  complaint.aiVerification
                    ?.confidence
                }
                %
              </p>

              <p>
                <strong>
                  Verified:
                </strong>{" "}
                {complaint.aiVerification
                  ?.verified
                  ? "✅ Yes"
                  : "❌ No"}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default TrackIssue;