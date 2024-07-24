import { useState, useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import logo from "./assets/logo.png";
import { IRecipe, IIngredient } from "./@types/recipe";
import RecipeList from './components/Recipes/RecipeList';
import RecipeCard from './components/Recipes/RecipeCard';

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [cards, setCards] = useState<IIngredient[]>([]);
  
  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://orecipesapi.onrender.com/api/recipes");
      setRecipes(response.data);
    } catch (e) {
      console.log("erreur");
    }
  };

  useEffect(() => {
    fetchRecipes()
   
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="w-100 bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg h-full">
      <div className="flex items-center justify-center p-4 border-b border-white">
        <img src={logo} className="w-24 h-24 rounded-full" alt="Logo" />
        <span className="text-3xl font-bold ml-2">O'Recipes</span>
      </div>
      <nav className="mt-8 px-4">
        <Link to="/recipes" className="block py-2 px-4 rounded-lg text-lg font-medium bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
          <span className="text-lg font-semibold">Accueil</span>
        </Link>
        <div className="mt-4">
          {recipes.map(recipe => (
            <Link 
              key={recipe.id}
              to={`/recipe/${recipe.id}`} 
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-blue-500 transition-colors duration-200"
            >
              <span className="text-md">{recipe.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeCard allRecipes={recipes} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App