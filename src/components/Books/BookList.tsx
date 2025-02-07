import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../@types/book";
import { motion } from "framer-motion";
import axios from "axios";

interface BookProps {
  books: IBook[];
}

function BookList({ books }: BookProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [genres, setGenres] = useState<string[]>([]);

  // Fonction pour filtrer les livres par genre
  const filteredBooks = selectedGenre
    ? books.filter((book) => book.genres.includes(selectedGenre))
    : books;

  // Récupérer les genres depuis l'API
  useEffect(() => {
    axios.get("http://localhost:3000/genres")  // Ajuste l'URL si nécessaire
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }, []);

  // Animation pour les livres (rebond)
  const bookVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="p-6 bg-[#F1E1C6]">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5E3C] to-[#3C2F1E] font-special-elite text-center">
        Mes Livres
      </h1>

      {/* Filtre par genre */}
      <div className="mb-6 text-center">
        <label htmlFor="genreFilter" className="text-lg font-semibold text-[#3C2F1E]">
          Filtrer par genre :
        </label>
        <select
          id="genreFilter"
          className="ml-2 p-2 rounded-lg border border-[#3C2F1E] focus:outline-none"
          onChange={(e) => setSelectedGenre(e.target.value)}
          value={selectedGenre || ""}
        >
          <option value="">Tous</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pt-16">
        {filteredBooks.map((book) => (
          <motion.div
            key={book.id}
            className="bg-[#8B5E3C] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full max-w-[400px] mx-auto"
            initial="hidden"
            animate="visible"
            variants={bookVariants}
          >
            <Link to={`/book/${book.id}`} className="block">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-contain pt-4"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#3C2F1E]">
                  {book.title}
                </h2>
                <p className="text-white mb-6 text-base">
                  {book.author}
                </p>
                <div className="inline-block bg-[#3C2F1E] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:from-[#6B4F3A] hover:to-[#3C2F1E] hover:scale-105">
                  Voir le livre
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
