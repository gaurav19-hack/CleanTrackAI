import express from "express";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

const DB_FILE = "./server/db.json";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, "./uploads");
},
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("CleanTrackAI Backend Running");
});

app.get("/api/complaints", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_FILE));
  res.json(data.complaints);
});

app.post(
  "/api/complaints",
  upload.single("image"),
  async (req, res) => {

    console.log("POST HIT");
    console.log(req.body);
    console.log(req.file);

    try {

      const aiResult = await axios.get(
  "http://127.0.0.1:8000/verify"
);

      console.log("AI RESULT:");
      console.log(aiResult.data);

      const data = JSON.parse(
        fs.readFileSync(DB_FILE)
      );

      const complaint = {
  id: `CTA-${Date.now()}`,

  name: req.body.name,
  location: req.body.location,
  category: req.body.category,
  description: req.body.description,

  aiVerification: aiResult.data,

  image: req.file
    ? req.file.filename
    : null,

  status: "Pending",

  assignedTo: "Ward Supervisor",

  escalationLevel: 1,

  deadline:
    Date.now() + (2 * 60 * 1000),

  proofImage: null,

  createdAt:
    new Date().toISOString(),
};
      data.complaints.push(
        complaint
      );

      fs.writeFileSync(
        DB_FILE,
        JSON.stringify(
          data,
          null,
          2
        )
      );

      res.status(201).json(
        complaint
      );

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: error.message,
      });

    }
  }
);

app.get("/api/complaints/:id", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(DB_FILE)
  );

  const complaint = data.complaints.find(
    (c) => c.id === req.params.id
  );

  if (!complaint) {
    return res.status(404).json({
      message: "Complaint not found",
    });
  }

  res.json(complaint);
});

app.put("/api/complaints/:id", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(DB_FILE)
  );

  const complaint = data.complaints.find(
    (c) => c.id === req.params.id
  );

  if (!complaint) {
    return res.status(404).json({
      message: "Complaint not found",
    });
  }

  complaint.status = req.body.status;

  fs.writeFileSync(
    DB_FILE,
    JSON.stringify(data, null, 2)
  );

  res.json(complaint);
});
app.post(
  "/api/complaints/:id/proof",
  upload.single("proof"),
  (req, res) => {
    try {
      const data = JSON.parse(
        fs.readFileSync(DB_FILE)
      );

      const complaint = data.complaints.find(
        (c) => c.id === req.params.id
      );

      if (!complaint) {
        return res.status(404).json({
          message: "Complaint not found",
        });
      }

      if (!req.file) {
  return res.status(400).json({
    message:
      "Proof image required before resolution",
  });
}

const validTypes = [
  "image/jpeg",
  "image/png",
  "image/jpg",
];

if (
  !validTypes.includes(req.file.mimetype)
) {
  return res.status(400).json({
    message:
      "Only image proof is allowed",
  });
}

complaint.proofImage =
  req.file.filename;

complaint.status = "Resolved";

      fs.writeFileSync(
        DB_FILE,
        JSON.stringify(data, null, 2)
      );

      res.json({
        success: true,
        complaint,
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        error: error.message,
      });
    }
  }
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});