import { Link } from "react-router-dom";
import { IBook } from "../../@types/book";

interface BookProps {
  books: IBook[];
}

function BookList({ books }: BookProps) {
  return (
    <div className="p-6 bg-[#F1E1C6]"> {/* Fond beige doux */}
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5E3C] to-[#3C2F1E]"> {/* Titre avec dégradé brun */}
        Mes Livres
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/book/${book.id}`} className="block">
              <img
                src={`https://api-books-mu.vercel.app/images/${book.thumbnail}`}
                alt={book.title}
                className="w-full h-48 object-contain"  // Utilisation de object-contain pour éviter la coupe des images
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-[#3C2F1E]"> {/* Texte brun foncé pour les titres */}
                  {book.title}
                </h2>
                <p className="text-[#6B4F3A] mb-4"> {/* Texte marron clair pour la description */}
                  {book.description}
                </p>
                <div className="inline-block bg-gradient-to-r from-[#8B5E3C] to-[#3C2F1E] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:from-[#6B4F3A] hover:to-[#3C2F1E] hover:scale-105">
                  Voir le livre
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
