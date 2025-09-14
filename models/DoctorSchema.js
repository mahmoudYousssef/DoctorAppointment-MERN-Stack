import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  Image: String,
  description: String,
  experienceYears: Number,
});
const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;