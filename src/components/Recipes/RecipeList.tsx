import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { IRecipe }  from "../../@types/recipe";

interface RecipeProps {
recipes: IRecipe[];
}

function RecipeList ({ recipes }: RecipeProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link to={`/recipe/${recipe.id}`} className="block">
            <img src={recipe.thumbnail} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList;