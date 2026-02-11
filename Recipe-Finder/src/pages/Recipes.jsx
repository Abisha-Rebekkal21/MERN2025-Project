import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recipes.css'; // Optional for card styles
import pasta from '../assets/pasta.jpeg'
import pizza from '../assets/pizza.jpeg'
import friedRice from '../assets/friedRice.jpeg';
import chocolateCake from '../assets/chocolateCake.jpg';
import caesarSalad from '../assets/caesarSalad.jpg';
import vegetableSoup from '../assets/vegetableSoup.jpg';
import mashedPotatoes from '../assets/mashedPotatoes.jpg';
import omelette from '../assets/omelette.jpg';
import pancakes from '../assets/pancakes.jpg';
import grilledSandwich from '../assets/grilledSandwich.jpg';
import fruitSmoothie from '../assets/fruitSmoothie.jpg';
import frenchFries from '../assets/frenchFries.jpg';
import mangoLassi from '../assets/mangoLassi.jpg';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Example data (replace with API call)
    const data = [
      { id: 1, name: 'Pasta', image: pasta, ingredients: ['Pasta', 'Tomato', 'Flour', 'Water', 'Eggs', 'Olive oil', 'Salt'], method: "Combine the flour and salt in a large bowl.Add the eggs. Create a deep well in the middle of the flour and crack eggs into it.Combine the flour and eggs. Gradually pull in flour from the bottom and sides of the bowl.Knead the dough. Gently knead the dough until it forms a smooth elastic ball.Rest the dough. Add the dough to the clean bowl and cover. Rest for 30 minutes.Divide the dough. Use a spatula or bowl scraper to divide the dough into four pieces.Begin rolling out the pasta. Flatten one piece of dough into a thick disk between your hands and feed it through the pasta roller. Thin the pasta. Change the settings on your roller to roll the pasta thinner.Cut the pasta. Cut the long stretch of dough into noodle-length sheets, about 12-inches.Cook, dry, or freeze the pasta. Cook it right away, dry it, or freeze it for later" },
      { id: 2, name: 'Pizza', image: pizza, ingredients: ['All-purpose flour', 'yeast', 'a little sugar','warm water, salt','olive oil'], method: " A wide range of pizza crust mixes, pre-made crusts and refrigerated doughs are available. Try a whole-grain crust to get the benefits of fiber and a range of vitamins and minerals. Or try making minipizzas with pita bread, English muffin halves, bagel halves, lovash or naan as the base. Gluten-free and vegetarian crust options are available, too.Go light on the sauce to avoid a soggy rust. You can use the old standby tomato-based pizza auce, such as the provided recipe, or another sauce.Add some veggies.Add cheese.Adjust your baking time, depending on the number of toppings. Consider baking your pizza on a grill to impart a smoky, grilled flavor. Combine whole-wheat flour, all-purpose flour, yeast, salt and sugar in a mixing bowl. Stir to mix dry ingredients. In a separate bowl, combine hot water and oil (water should be 120 to 130 F); gradually combine water mixture with dry ingredients until a sticky ball forms. *If dough is too dry, add 1 to 2 Tbsp. warm water; if dough is too sticky, add 1 to 2 Tbsp. flour. Using a stand mixer, process dough for one minute to knead. Spray a sheet of plastic wrap with cooking spray and cover bowl, allowing dough to rest for 10 to 20 minutes before rolling. Preheat oven to 500 F and roll out dough (13-inch circle). Brush crust with olive oil and poke with fork.Makes 10 servings (slices). Each serving has 80 calories, 1.5 g fat, 3 g protein, 14 g carbohydrate, 1 g fiber and 180 mg sodium.Preheat oven to 450 F. Line baking sheet with parchment paper for easy cleanup. In a mixing bowl, combine all ingredients. Using dough hook, mix on low speed until one ball of dough forms. If not using a stand mixer, stir together ingredients until a ball of ough forms. Sprinkle flour onto rolling surface, remove dough from bowl and pat with flour to form into solid ball. *Dough may be slightly sticky straight from the mixer. Roll dough into a ball and set onto repared baking sheet. Use rolling pin coated with flour to roll out ough to desired thickness, ¼ inch thick. Top with desired toppings and bake for 10 to 12 minutes.Makes 10 servings of crust. Each serving has 150 calories, 5 g fat, 4 g protein, 23 carbohydrate, 0 g fiber and 220 mg sodium." },
      { id: 3, name: 'Fried Rice', image: friedRice, ingredients: ['Rice', 'Carrots', 'Peas', 'Eggs', 'Soy sauce', 'Garlic', 'Oil', 'Spring onions', 'Salt'], method: "Cook rice ahead and let it cool. Heat oil in a wok. Add minced garlic and sauté until golden. Add chopped carrots and peas; stir-fry for 2 minutes. Push veggies aside, scramble eggs in the same pan. Add cooked rice and stir everything together. Pour soy sauce evenly, mix well. Stir-fry for 3–5 minutes. Top with chopped spring onions. Serve hot."},
      { id: 4, name: 'Chocolate Cake', image: chocolateCake, ingredients: ['Flour', 'Cocoa powder', 'Sugar', 'Eggs', 'Butter', 'Baking powder', 'Milk', 'Vanilla essence'], method: "Preheat oven to 180°C (350°F). In a bowl, sift together flour, cocoa powder, and baking powder. In another bowl, beat sugar and butter until creamy. Add eggs one by one and mix well. Add vanilla essence. Alternate adding dry mixture and milk into the wet mix. Mix into smooth batter. Pour into greased cake tin. Bake for 30–35 minutes. Cool and serve, optionally with frosting."},
      { id: 5, name: 'Caesar Salad', image: caesarSalad, ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Croutons', 'Caesar dressing', 'Lemon juice', 'Olive oil', 'Black pepper', 'Anchovies (optional)'], method: "Wash and dry romaine lettuce. In a bowl, toss chopped lettuce with Caesar dressing. Add croutons, shaved Parmesan, and a splash of lemon juice. Drizzle olive oil and season with black pepper. For extra flavor, add chopped anchovies. Toss again and serve immediately."},
      { id: 6, name: 'Vegetable Soup', image: vegetableSoup, ingredients: ['Carrot', 'Potato', 'Beans', 'Onion', 'Tomato', 'Garlic', 'Pepper', 'Salt', 'Water'], method: "Chop all vegetables into small cubes. In a pot, heat oil and sauté garlic and onions. Add carrots, potatoes, beans, and stir for 5 minutes. Add tomatoes and cook until soft. Pour in water, add salt and pepper. Cover and simmer for 15–20 minutes. Serve hot with bread or croutons."},
      {id: 7,name: 'Mashed Potatoes', image: mashedPotatoes,ingredients: ['Potatoes', 'Butter', 'Milk', 'Salt', 'Black pepper'],method: "Peel and cut potatoes into cubes. Boil in salted water until soft (15–20 minutes). Drain and mash while hot. Add butter and mix until smooth. Slowly add milk until desired texture is reached. Season with salt and pepper. Serve warm as a side dish."},
      {id: 8,name: 'Omelette',image: omelette,ingredients: ['Eggs', 'Onion', 'Tomato', 'Salt', 'Pepper', 'Butter', 'Green chili', 'Coriander'],method: "Crack eggs into a bowl. Add chopped onions, tomatoes, green chili, coriander, salt, and pepper. Beat well. Heat butter in a non-stick pan. Pour egg mixture and cook on low heat. Flip carefully when the bottom is set. Cook the other side. Serve hot with toast or rice."},
      {id: 9,name: 'Pancakes',image: pancakes,ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Baking powder', 'Butter', 'Salt'],method: "In a bowl, mix flour, sugar, baking powder, and salt. In another bowl, whisk milk, eggs, and melted butter. Combine wet and dry ingredients until smooth. Heat a non-stick pan and pour batter to form pancakes. Cook until bubbles form, flip, and cook the other side. Serve with syrup or fruits."},
      {id: 10,name: 'Grilled Sandwich',image: grilledSandwich,ingredients: ['Bread slices', 'Cheese', 'Tomato', 'Onion', 'Butter', 'Green chutney'],method: "Spread butter and green chutney on bread slices. Layer cheese, tomato, and onion between slices. Grill until golden brown and cheese melts. Slice and serve hot."},
      {id: 11,name: 'Fruit Smoothie',image: fruitSmoothie,ingredients: ['Banana', 'Strawberries', 'Yogurt', 'Honey', 'Ice cubes'],method: "Add chopped banana, strawberries, yogurt, honey, and ice to a blender. Blend until smooth. Pour into a glass and serve chilled."},
      {id: 12,name: 'French Fries',image: frenchFries,ingredients: ['Potatoes', 'Salt', 'Oil'],method: "Peel and cut potatoes into thin strips. Soak in water for 30 minutes, then pat dry. Heat oil and deep-fry in batches until golden and crispy. Drain on paper towels and season with salt."},
      {id: 13,name: 'Mango Lassi',image: mangoLassi,ingredients: ['Mango pulp', 'Yogurt', 'Sugar', 'Cardamom', 'Ice cubes'],method: "Blend mango pulp, yogurt, sugar, cardamom, and ice cubes until smooth. Pour into a glass and garnish with mint or saffron. Serve chilled."
}

    ];
    setRecipes(data);
  }, []);

  const goToDetail = (recipe) => {
    navigate(`/recipe/${recipe.id}`, { state: recipe });
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="recipes-wrapper">

      <input
        type="text"
        placeholder="Search recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="recipes-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="card" onClick={() => goToDetail(recipe)}>
              <img src={recipe.image} alt={recipe.name} height="200px" />
              <h3>{recipe.name}</h3>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;