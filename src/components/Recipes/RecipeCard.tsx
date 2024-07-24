import React from 'react';
import { IRecipe } from "../../@types/recipe";
import { useParams, Navigate } from "react-router-dom";

interface CardProps {
    allRecipes: IRecipe[];
}

export default function RecipeCard({ allRecipes }: CardProps) {
  const { id } = useParams();
  const recipeToDisplay = allRecipes.find((recipe) => recipe.id === Number(id));
  
  if (!recipeToDisplay) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">    
      <img src={recipeToDisplay.thumbnail} alt={recipeToDisplay.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{recipeToDisplay.title}</h2>
        <p className="text-gray-600">{recipeToDisplay.description}</p>
        <p className="text-gray-600">{recipeToDisplay.instructions}</p>
      </div>
    </div>
  )
}