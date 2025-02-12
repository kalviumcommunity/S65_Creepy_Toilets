const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
     },

  toiletId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Toilet",
    required: true
     },

  reason: {
     type: String, 
     required: true
     },
  status: {
     type: String,
      enum: ["Pending", "Resolved"],
       default: "Pending"
     },
  
}, {timestamps: true});

module.exports = mongoose.model("Report", ReportSchema);
