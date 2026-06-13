import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import smartIndia from "../assets/smart-india.jpg";

function OfficerPanel() {
  const [complaints, setComplaints] = useState([]);
  const [proofFiles, setProofFiles] = useState({});

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

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/complaints/${id}`,
        { status }
      );

      fetchComplaints();

      alert("Complaint Marked Resolved ✅");
    } catch (error) {
      console.error(error);
      alert("Status Update Failed ❌");
    }
  };
  const uploadProof = async (id) => {
  try {
    if (!proofFiles[id]) {
      alert("Select a proof image first");
      return;
    }

    const formData = new FormData();

    formData.append(
      "proof",
      proofFiles[id]
    );

    await axios.post(
      `http://localhost:5000/api/complaints/${id}/proof`,
      formData
    );

    alert("Proof Uploaded Successfully ✅");

    fetchComplaints();

  } catch (error) {
    console.error(error);
    alert("Proof Upload Failed ❌");
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
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.75)
          ), url(${smartIndia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "120px",
          paddingBottom: "50px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "60px",
            marginBottom: "40px"
          }}
        >
          Officer Panel
        </h1>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          {complaints.map((c) => (
            <div
              key={c.id}
              style={{
                marginBottom: "30px",
                padding: "25px",
                background:
                  "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                border:
                  "1px solid rgba(255,255,255,0.15)",
                color: "white"
              }}
            >
              <h2>{c.id}</h2>

              <p>
                <strong>Name:</strong>{" "}
                {c.name}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {c.category}
              </p>

              <p>
                <strong>Status:</strong>

                <span
                  style={{
                    marginLeft: "10px",
                    padding: "6px 15px",
                    borderRadius: "20px",
                    background:
                      c.status ===
                      "Resolved"
                        ? "#16a34a"
                        : "#f59e0b",
                    color: "white"
                  }}
                >
                  {c.status}
                </span>
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {c.description}
              </p>

              {c.image && (
                <img
                  src={`http://localhost:5000/uploads/${c.image}`}
                  alt="Issue"
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    borderRadius: "15px",
                    marginTop: "15px",
                    marginBottom: "20px"
                  }}
                />
              )}<div style={{ marginBottom: "20px" }}>
  <h3>📸 Upload Resolution Proof</h3>

  <input
    type="file"
    onChange={(e) =>
      setProofFiles({
        ...proofFiles,
        [c.id]: e.target.files[0]
      })
    }
  />

  <button
    style={{
      marginLeft: "10px",
      background: "#3b82f6",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "8px",
      cursor: "pointer"
    }}
    onClick={() => uploadProof(c.id)}
  >
    Upload Proof
  </button>

  {c.proofImage && (
    <div>
      <h3>✅ Resolution Proof</h3>

      <img
        src={`http://localhost:5000/uploads/${c.proofImage}`}
        alt="Proof"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "15px",
          marginTop: "10px"
        }}
      />
    </div>
  )}
</div>


              <div
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "20px"
                }}
              >
                <h3>
                  🤖 AI Verification
                </h3>

                <p>
                  <strong>Issue:</strong>{" "}
                  {
                    c.aiVerification
                      ?.issue
                  }
                </p>

                <p>
                  <strong>
                    Confidence:
                  </strong>{" "}
                  {
                    c.aiVerification
                      ?.confidence
                  }
                  %
                </p>

                <p>
                  <strong>
                    Verified:
                  </strong>{" "}
                  {c.aiVerification
                    ?.verified
                    ? "✅ Yes"
                    : "❌ No"}
                </p>
              </div>

              {c.status !==
                "Resolved" && (
                <button
                  style={{
                    background:
                      "#22c55e",
                    color: "white",
                    border: "none",
                    padding:
                      "12px 20px",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                    fontWeight:
                      "bold"
                  }}
                  onClick={() =>
                    updateStatus(
                      c.id,
                      "Resolved"
                    )
                  }
                >
                  ✅ Mark Resolved
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default OfficerPanel;