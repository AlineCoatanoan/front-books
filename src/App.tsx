import { useState, useEffect } from 'react'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";
import logo from "./assets/logo.png";
import Header from "./components/Header"

function App() {
 
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://orecipesapi.onrender.com/api/recipes"
          
        );
        console.log(response)
        setRecipes(response.data);
      } catch (e) {
        console.log("erreur");
      }
    }; fetchRecipes()
  }, []);
  



  return (
    <>
      
    </>
  )
}

export default App
