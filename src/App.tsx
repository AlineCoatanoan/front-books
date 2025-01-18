import { useState, useEffect } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import logo from "/logo.gif";
import { IBook } from "./@types/book";
import BookList from './components/Books/BookList';
import BookCard from './components/Books/BookCard';

function App() {
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("https://api-books-mu.vercel.app");
      console.log("Réponse brute de l'API :", response.data);
      
      if (Array.isArray(response.data)) {
        // Vérifie que chaque élément respecte la structure attendue
        console.log("Livres reçus :", response.data);
        setBooks(response.data);
      } else {
        console.error("Réponse inattendue : ", response.data);
        setBooks([]);
      }
    } catch (e) {
      console.error("Erreur lors de la récupération des livres :", e);
      setBooks([]);
    }
  };
  
  

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex h-screen bg-[#F1E1C6]">

      {/* Sidebar */}
      <div className="w-80 bg-gradient-to-b from-[#8B5E3C] to-[#3C2F1E] text-white shadow-lg h-full fixed top-0 left-0 flex flex-col"> {/* Dégradé bois */}
        <div className="flex flex-col items-center justify-start p-8 mt-6 border-b border-white h-full"> 
          <img src={logo} className="w-32 h-32 rounded-full mb-6" alt="Logo" /> 
          <span className="text-4xl font-bold mb-8 text-[#F1E1C6]">My Books</span> 
          <nav className="w-full">
            <Link to="/" className="block py-3 px-5 rounded-lg text-lg font-medium bg-[#F1E1C6] border-2 border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white transition-all duration-300">
              <span className="text-lg font-semibold">Accueil</span> 
            </Link>
            <div className="mt-6">
  {Array.isArray(books) && books.length > 0 ? (
    books.map(book => (
      <Link 
        key={book.id}
        to={`/book/${book.id}`} 
        className="block py-3 px-4 rounded-lg hover:bg-[#F1E1C6] hover:text-[#8B5E3C] transition-colors duration-200"
      >
        <span className="text-md">{book.title}</span>
      </Link>
    ))
  ) : (
    <p className="text-white">Aucun livre trouvé.</p> 
  )}
</div>

          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-80 pt-16"> {/* Padding gauche pour laisser de l'espace à la sidebar */}
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/:id" element={<BookCard allBooks={books} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
