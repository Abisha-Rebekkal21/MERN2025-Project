const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // store image URL for now
  ingredients: { type: [String], required: true },
  method: { type: String, required: true },
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
