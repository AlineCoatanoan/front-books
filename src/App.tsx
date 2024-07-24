import { useState, useEffect } from 'react'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";
import logo from "./assets/logo.png";
import Header from "./components/Header"
import { IRecipe } from "./@types/recipe";
import RecipeList from './components/Recipes/RecipeList';


function App() {
 
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://orecipesapi.onrender.com/api/recipes"
      );
      console.log(response)
      
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
    <div className="w-1/4 bg-white shadow-md h-full p-4">
      <Link to="/" className="flex items-center mb-8">
        <img src={logo} className="w-32" alt="Logo" />
        <span className="text-2xl font-semibold ml-2">O'Recipes</span>
      </Link>
      <nav className="flex flex-col space-y-4">
        
        <Link to="/recipe" className="text-lg font-medium hover:text-blue-500">
          Recettes
        </Link>
        {/* Ajoutez d'autres liens de navigation ici */}
      </nav>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-8">
    
      <Routes>
        <Route path="/recipe" element={<RecipeList recipes={recipes} />} />
      </Routes>
    </div>
  </div>
  );
}

export default App
