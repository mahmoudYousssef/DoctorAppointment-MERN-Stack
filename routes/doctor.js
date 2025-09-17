import express from "express";
import Doctor from "../models/DoctorSchema.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.filename + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

router.post("/addDoctors", upload.single("image"), async (req, res) => {
  try {
    const { name, specialty, description, experienceYears } = req.body;

    const image = req.file ? req.file.fieldname : null;
    if ((!name || !specialty || !description || !experienceYears, !image))
      return res.status(400).json({ message: "all Field are required" });
    const newDoctor = new Doctor({
      name,
      specialty,
      description,
      experienceYears,
      image: req.file?.filename,
    });

    const savedDoctors = await newDoctor.save();
    res.status(201).json(savedDoctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

router.get("/allDoctors", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

router.get("/:id", async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).json({ message: "Doctor not found" });
  res.json(doctor);
});

export default router;




// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikhhc3NhbkBnbWFpbC5jb20iLCJpZCI6IjY4Y2E3M2M4NjExNjQwMTQ1MDhjMGU4YiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1ODA5ODM3NiwiZXhwIjoxNzU4NzAzMTc2fQ.B6rXLj8OaGhyyR1L0b5yWbDVBYTFIPWt2w3LNbsVkgY"