// recipe.d.ts

// Représente un ingrédient utilisé dans une recette
export interface IIngredient {
    id: number;       // Identifiant unique de l'ingrédient
    quantity: number | string; // Quantité de l'ingrédient (peut être un nombre ou une chaîne, par exemple 'zeste')
    unit: string;     // Unité de mesure (g, ml, pincée, etc.)
    name: string;     // Nom de l'ingrédient
  }
  
  // Représente une recette de cuisine
 export interface IRecipe {
    id: number;                   // Identifiant unique de la recette
    title: string;                // Titre de la recette
    slug: string;                 // Slug de la recette (URL-friendly)
    thumbnail: string;            // URL de l'image miniature de la recette
    author: string;               // Auteur de la recette
    difficulty: string;           // Niveau de difficulté (Facile, Moyen, Difficile)
    description: string;          // Description courte de la recette (par exemple, "Pour 10 cookies")
    ingredients: Ingredient[];    // Liste des ingrédients nécessaires à la recette
    instructions: string[];       // Liste des instructions étape par étape pour préparer la recette
  }
  
  // Représente une collection de recettes
 export type Recipes = Recipe[];
  