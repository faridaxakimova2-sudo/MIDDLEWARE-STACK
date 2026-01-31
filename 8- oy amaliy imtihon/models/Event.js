
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
      trim: true,
    },

    description: {
      type: String,
      required: true, 
    },

    location: {
      type: String,
    },

    date: {
      type: Date,
      required: true,
    },

    attendees: {
      type: Number,
      min: [0, "Qatnashchilar soni 0 dan kichik bo‘lishi mumkin emas"],
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, 
    collection: "events", 
  }
);

module.exports = mongoose.model("Event", eventSchema);
