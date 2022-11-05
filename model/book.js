const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  title_ar: {
    type: String,
    required: true,
  },
  publication_year: {
    type: String,
    required: true,
  },
  publication_year_ar: {
    type: String,
    required: true,
  },
  exhibitor_booth: {
    type: String,
    required: true,
  },
  exhibitor_booth_ar: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    default: [],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("book", bookSchema);