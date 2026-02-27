# Quick Recipes from Fridge Items


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, HTML/CSS/JavaScript, basic ML concepts |
| Built by | SuperCook, MyFridgeFood, Yummly, Allrecipes |

**Skills you'll earn:** Fuzzy matching, ranking algorithms, image recognition, REST APIs, dietary filtering, meal planning

Start with matching ingredients. End with a smart recipe recommendation engine.

(Assumes starting from scratch with basic HTML/CSS/JS knowledge)

## Step 1: Match ingredients to recipes (~2-3 hours)

You have eggs, tomatoes, and cheese. What can you make?

- Build a static JSON file with 20-30 recipes, each with a name, ingredients list, and instructions
- Create a frontend with checkboxes or a text input for available ingredients
- Filter recipes where all required ingredients are in your list
- Display matching recipes

**You now have:** A basic ingredient matcher.

## Step 2: Partial matches and ranking (~2-3 hours)

With strict matching, you almost never get results. One missing ingredient shouldn't disqualify a recipe.

- Score each recipe by the percentage of ingredients you have
- Sort by best match (90% match ranks above 50%)
- Show what's missing for each recipe
- Highlight which of your ingredients each recipe uses

**You now have:** Ranked recipe suggestions.

## Step 3: Move to a server (~2-3 hours)

Your JSON file has 30 recipes. You want thousands, and you want to add new ones.

- Set up a Node.js server with Express
- Store recipes in a database (MongoDB works well for flexible ingredient lists)
- Create API endpoints: `GET /recipes?ingredients=egg,tomato,cheese`
- Add an admin endpoint to add new recipes

**You now have:** A recipe API.

## Step 4: User-submitted recipes (~3-4 hours)

You have 30 recipes. Your users know thousands.

- Add user registration and login
- Let users submit recipes with name, ingredients, instructions, and a photo
- Add a review/approval workflow so bad recipes don't show up immediately
- Show the contributor's name on each recipe

**You now have:** Community-contributed recipes.

## Step 5: Smart ingredient input (~3-4 hours)

Users type "tomato" but the database says "tomatoes." No match.

- Normalize ingredient names (stemming, pluralization)
- Add an ingredient autocomplete that suggests from known ingredients
- Support synonyms: "capsicum" matches "bell pepper"
- Use fuzzy matching for typos

**You now have:** Forgiving ingredient matching.

## Step 6: Dietary filters and tags (~2-3 hours)

You're vegetarian. Half the results have chicken.

- Add tags: vegetarian, vegan, gluten-free, dairy-free, quick (under 30 min)
- Let users filter by dietary preference
- Show tags on recipe cards
- Save preferences in the user's profile

**You now have:** Dietary-aware recommendations.

## Step 7: Recipe detail page (~3-4 hours)

- Full recipe page with ingredients, step-by-step instructions, cook time, and servings
- Serving size adjuster (scale ingredients up or down)
- Nutritional info (calories, protein, carbs, fat) — estimate from ingredients

## Step 8: Image recognition (~4-5 hours)

- Let users take a photo of their fridge
- Use a vision model or image classification to identify ingredients
- Auto-populate the ingredient list from the photo

## Step 9: Meal planning (~3-4 hours)

- Suggest a week of meals using available ingredients
- Generate a shopping list for missing ingredients
- Track pantry inventory over time

## Step 10: Deploy (~2 hours)

- Containerize and deploy
- Add CI/CD
- Set up a domain and TLS

## Useful Resources

- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/) — Store recipes with flexible schemas
- [Fuse.js](https://www.fusejs.io/) — Lightweight fuzzy-search library for ingredient matching
- [natural (npm)](https://www.npmjs.com/package/natural) — NLP tools for stemming and text processing
- [Multer (GitHub)](https://github.com/expressjs/multer) — Handle recipe photo uploads
- [bcrypt (npm)](https://www.npmjs.com/package/bcrypt) — Password hashing for user accounts
- [Express.js](https://expressjs.com/) — Web framework for the recipe API

## Where to go from here

- Voice input ("I have eggs, rice, and soy sauce")
- Social features (save favorites, share recipes, follow cooks)
- Cost estimation based on local grocery prices
- Integration with grocery delivery APIs
- Cooking timer and step-by-step guided mode
