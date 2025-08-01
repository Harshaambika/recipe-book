let recipes = [
  {
    title: "🍝 Spaghetti Bolognese (30 mins)",
    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
    steps: ["Boil spaghetti", "Cook beef with onion and garlic", "Add sauce", "Mix and serve"]
  },
  {
    title: "🥞 Pancakes (20 mins)",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking powder"],
    steps: ["Mix dry ingredients", "Add milk and eggs", "Pour on griddle", "Flip and cook"]
  },
  {
    title: "🥦 Vegetable Stir Fry (15 mins)",
    ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Oil"],
    steps: ["Heat oil", "Add garlic and ginger", "Add vegetables", "Stir fry and add soy sauce"]
  },
  {
    title: "🧀 Grilled Cheese Sandwich (10 mins)",
    ingredients: ["Bread", "Cheese", "Butter"],
    steps: ["Butter bread", "Add cheese", "Grill until golden"]
  },
  {
    title: "🍳 Omelette (10 mins)",
    ingredients: ["Eggs", "Salt", "Pepper", "Onion", "Tomato"],
    steps: ["Beat eggs", "Add vegetables", "Cook in pan"]
  },
  {
    title: "🍓 Fruit Salad (5 mins)",
    ingredients: ["Apple", "Banana", "Orange", "Grapes", "Honey"],
    steps: ["Chop fruits", "Mix together", "Add honey", "Serve chilled"]
  }
];

const container = document.getElementById("recipe-container");
const searchInput = document.getElementById("search");

function renderRecipes(list) {
  container.innerHTML = "";
  list.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h2>${recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      <h3>Steps:</h3>
      <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>
    `;
    container.appendChild(card);
  });
}

function addRecipe() {
  const title = document.getElementById("new-title").value.trim();
  const time = document.getElementById("new-time").value.trim();
  const ingredients = document.getElementById("new-ingredients").value
    .trim().split(",").map(i => i.trim());
  const steps = document.getElementById("new-steps").value
    .trim().split(",").map(s => s.trim());

  if (title && ingredients.length && steps.length && time) {
    const newRecipe = {
      title: `${title} (${time})`,
      ingredients,
      steps
    };
    recipes.push(newRecipe);
    renderRecipes(recipes);

    // Clear fields
    document.getElementById("new-title").value = "";
    document.getElementById("new-time").value = "";
    document.getElementById("new-ingredients").value = "";
    document.getElementById("new-steps").value = "";
  } else {
    alert("Please fill in all fields correctly.");
  }
}

// Filter as user types
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r => r.title.toLowerCase().includes(query));
  renderRecipes(filtered);
});

// Initial render
renderRecipes(recipes);


