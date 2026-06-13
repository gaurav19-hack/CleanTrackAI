import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ReportIssue() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "",
    description: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          location: `${position.coords.latitude}, ${position.coords.longitude}`
        }));
      },
      () => {
        alert("Location access denied");
      }
    );
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("location", formData.location);
    data.append("category", formData.category);
    data.append("description", formData.description);

    if (image) {
      data.append("image", image);
    }

    try {
  const response = await axios.post(
    "http://localhost:5000/api/complaints",
    data
  );

  console.log(response.data);

  alert(
    `Complaint Submitted\nID: ${response.data.id}`
  );
} catch (error) {
  console.log(error);
  console.log(error.response);

  alert(
    JSON.stringify(error.response?.data)
  );
}

    alert(
      `Complaint Submitted\nID: ${response.data.id}`
    );

    setFormData({
      name: "",
      location: "",
      category: "",
      description: ""
    });

    setImage(null);
    setPreview("");
  };

  return (
    <>
      <Navbar />

      <section className="dashboard">
        <h2>Report Issue</h2>

        <form
          onSubmit={handleSubmit}
          className="report-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div
            style={{
              display: "flex",
              gap: "10px"
            }}
          >
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={getLocation}
            >
              Use GPS
            </button>
          </div>

          <input
            type="text"
            name="category"
            placeholder="Issue Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Issue Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{
                width: "250px",
                borderRadius: "10px"
              }}
            />
          )}

          <button type="submit">
            Submit Complaint
          </button>
        </form>
      </section>
    </>
  );
}

export default ReportIssue;