
import { Link } from "react-router-dom"
import { IRecipe }  from "../../@types/recipe";

interface RecipeProps {
recipes: IRecipe[];
}

function RecipeList ({ recipes }: RecipeProps) {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        Nos Recettes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/recipe/${recipe.id}`} className="block">
              <img
                src={recipe.thumbnail}
                alt={recipe.title}
                className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{recipe.title}</h2>
                <p className="text-gray-700 mb-4">{recipe.description}</p>
                <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:from-blue-600 hover:to-teal-600 hover:scale-105"
                  >
                    Voir la recette
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeList;