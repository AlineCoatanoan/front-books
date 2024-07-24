import { useState, useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import logo from "./assets/logo.png";
import { IRecipe } from "./@types/recipe";
import RecipeList from './components/Recipes/RecipeList';
import { IIngredient } from "./@types/recipe";
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
  
  const fetchCards = async () => {
    try {
      const response = await axios.get("https://orecipesapi.onrender.com/api/cards");
      setCards(response.data);
    } catch (e) {
      console.log("erreur");
    }
  };

  useEffect(() => {
    fetchRecipes()
    fetchCards()
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md h-full p-4">
        <Link to="/" className="flex items-center mb-8">
          <img src={logo} className="w-32" alt="Logo" />
          <span className="text-2xl font-semibold ml-2">O'Recipes</span>
        </Link>
        <nav className="flex flex-col space-y-4">
          <Link to="/recipes" className="text-lg font-medium hover:text-blue-500">
            Accueil
          </Link>
          {cards.map(card => (
            <Link 
              key={card.id}
              to={`/cards/${card.id}`} 
              className="text-lg font-medium hover:text-blue-500"
            >
              {card.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeCard allRecipes={recipes} />} />
          <Route path="/cards/:id" element={<RecipeCard allRecipes={recipes} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App