import mongoose from "mongoose";


const trackingSchema = new mongoose.Schema({
  trackingCode: { type: String, required: true }, // 6-digit code
  status: String, // e.g., "In Transit", "Delivered"
  currentLocation: String,
  lastUpdated: { type: Date, default: Date.now },
  details: mongoose.Schema.Types.Mixed, // store raw API response if needed
});

module.exports = mongoose.model("Tracking", trackingSchema);
