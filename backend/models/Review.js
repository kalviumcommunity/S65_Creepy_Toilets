const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  toiletId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "Toilet",
       required: true
     },
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true
     },
  rating: { 
    type: Number, 
    required: true,
    min: 1,
    max: 5
     },

  commentText: {
     type: String
     },
}, {timestamps: true});

module.exports = mongoose.model("Review", ReviewSchema);
