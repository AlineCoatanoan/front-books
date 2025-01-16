import { IBook } from "../../@types/book";
import { useParams, Navigate } from "react-router-dom";

interface CardProps {
  allBooks: IBook[];
}

export default function BookCard({ allBooks }: CardProps) {
  const { id } = useParams();
  const bookId = Number(id);
  const bookToDisplay = allBooks.find((book) => book.id === bookId);

  // Si le livre n'existe pas, redirige vers la page d'erreur
  if (!bookToDisplay) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <div className="bg-[#F1E1C6] min-h-screen flex justify-center items-start pt-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Image du livre */}
        <img
          src={`http://localhost:3000/images/${bookToDisplay.thumbnail}`}
          alt={bookToDisplay.title}
          className="w-full max-h-72 object-contain mx-auto" // Ajuste la taille sans couper l'image
        />

        <div className="p-6">
          {/* Titre du livre */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{bookToDisplay.title}</h2>

          {/* Auteur du livre */}
          <p className="text-xl text-gray-600 mb-4">Auteur: {bookToDisplay.author}</p>

          {/* Difficulté du livre */}
          <p className="text-sm text-gray-500 mb-4">Difficulté: {bookToDisplay.difficulty}</p>

          {/* Description du livre */}
          <p className="text-lg text-gray-700 mb-6">{bookToDisplay.description}</p>

          {/* Genre du livre */}
          <p className="text-sm text-gray-500 mb-4">Genre: {bookToDisplay.genres.join(', ')}</p>

          {/* Avis sur le livre */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Avis</h3>
          <p className="text-gray-700">{bookToDisplay.avis}</p>
        </div>
      </div>
    </div>
  );
}
