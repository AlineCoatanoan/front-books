import { useState, useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import logo from "./assets/logo.png";
import { IRecipe, IIngredient } from "./@types/recipe";
import RecipeList from './components/Recipes/RecipeList';
import RecipeCard from './components/Recipes/RecipeCard';
import Header from "./components/Header";

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


    <Header />

    {/* Sidebar */}
    <div className="w-80 bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg h-full fixed top-0 left-0 flex flex-col">
        <div className="flex flex-col items-center justify-start p-8 mt-16 border-b border-white h-full"> {/* Ajusté padding et margin top */}
          <img src={logo} className="w-32 h-32 rounded-full mb-6" alt="Logo" /> {/* Ajusté margin bottom */}
          <span className="text-4xl font-bold mb-8">O'Recipes</span> {/* Ajusté text size et margin bottom */}
          <nav className="w-full">
            <Link to="/recipes" className="block py-3 px-5 rounded-lg text-lg font-medium bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
              <span className="text-lg font-semibold">Accueil</span> {/* Ajusté margin top */}
            </Link>
            <div className="mt-6"> {/* Ajusté margin top */}
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
      </div>


      {/* Main Content */}
      <div className="flex-1 ml-80 pt-16"> {/* Ajout de `ml-80` pour le padding gauche correspondant à la largeur de la sidebar et `pt-16` pour le padding supérieur */}
        <Routes>
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeCard allRecipes={recipes} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App