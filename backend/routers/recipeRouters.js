const express = require("express");
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require("../controllers/recipeControllers");

const router = express.Router();

// GET all recipes
router.get("/api/recipes", getRecipes);

// POST new recipe (admin)
router.post("/api/recipes", createRecipe);

// PUT update recipe
router.put("/api/recipes/:id", updateRecipe);

// DELETE recipe
router.delete("/api/recipes/:id", deleteRecipe);

module.exports = router;
