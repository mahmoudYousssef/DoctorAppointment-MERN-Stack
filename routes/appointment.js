import express from "express";
import Appointment from "../models/AppointmentSchema.js";
const router = express.Router();

router.post("/createAppointment", async (req, res) => {
  const { doctor, date, reason } = req.body;
  if (!doctor || !date || !reason)
    return res.status(400).json({ message: "Missing fields" });

  const appointment = await Appointment.create({
    user: req.user.id,
    doctor,
    date,
    reason,
  });
  res.status(201).json(appointment);
});

router.get("/myAppointments", async (req, res) => {
  const appointment = await Appointment.find({
    user: req.user.id,
  });
  res.json(appointment);
});
router.post("/deleteAppointment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment)
      return res.status(404).json({ message: "appointment not found" });
    res.status(200).json({ message: "appointment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
