import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { IBook } from "./@types/book";
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/Books/BookList';
import BookCard from './components/Books/BookCard';
import Home from './components/Home';

function App() {
  const [books, setBooks] = useState<IBook[]>([]);

  const API_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://api-books-alpha.vercel.app";

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${API_URL}/`, {
        credentials: 'include', // Permet l'envoi des cookies, si nécessaire
      });
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }
      const data = await response.json();
      console.log('Données reçues:', data);
      setBooks(data); // 🔥 Met à jour l'état pour que les livres s'affichent
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Passer 'books' à BookList directement */}
        <Route path="/books" element={<BookList />} />
        {/* Passer 'books' à BookCard directement */}
        <Route path="/book/:id" element={<BookCard allBooks={books} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
