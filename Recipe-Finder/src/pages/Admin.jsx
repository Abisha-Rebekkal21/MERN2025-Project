// src/pages/Admin.jsx
import React, { useState } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          ingredients: ingredients.split(",").map((i) => i.trim()), // split by commas
          instructions,
        }),
      });

      if (res.ok) {
        setMessage("✅ Recipe added successfully!");
        setTitle("");
        setIngredients("");
        setInstructions("");
      } else {
        setMessage("❌ Failed to add recipe");
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Server error");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Ingredients (comma separated)</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            className="w-full p-2 border rounded"
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Recipe
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default Admin;
