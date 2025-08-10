import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  checkIn: String,
  checkOut: String,
  roomType: String,
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;
