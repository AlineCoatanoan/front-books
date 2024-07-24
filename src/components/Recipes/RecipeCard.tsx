import React from 'react';
import { IRecipe } from "../../@types/recipe";
import { useParams, Navigate } from "react-router-dom";

interface CardProps {
    allRecipes: IRecipe[];
}

export default function RecipeCard({ allRecipes }: CardProps) {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipeToDisplay = allRecipes.find((recipe) => recipe.id === recipeId);
  
  if (!recipeToDisplay) {
    return <Navigate to="/error" replace={true} />;
  }

  

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">    
      <img 
        src={recipeToDisplay.thumbnail} 
        alt={recipeToDisplay.title} 
        className="w-full h-48 object-cover" 
        />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipeToDisplay.title}</h2>
        <p className="text-sm text-gray-500 mb-6">{recipeToDisplay.description}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingrédients</h3>

        <ul className="list-disc list-inside mb-6">
          {recipeToDisplay.ingredients.length > 0 ? (
            recipeToDisplay.ingredients.map((ingredient) => (
              <li key={ingredient.id} className="text-gray-700">
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            ))
          ) : (
            <li className="text-gray-700">Aucun ingrédient trouvé pour cette recette.</li>
          )}
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h3>
        <ol className="list-decimal list-inside space-y-2">
          {recipeToDisplay.instructions.length > 0 ? (
            recipeToDisplay.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700">{instruction}</li>
            ))
          ) : (
            <li className="text-gray-700">Aucune instruction trouvée pour cette recette.</li>
          )}
        </ol>
        
      </div>
    </div>
  )
}