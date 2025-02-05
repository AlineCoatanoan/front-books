import { useState, useEffect } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import logo from "/logo.gif";
import { IBook } from "./@types/book";
import BookList from './components/Books/BookList';
import BookCard from './components/Books/BookCard';

function App() {
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://api-books-alpha.vercel.app/');
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
      <Routes>
      <Route path="/" element={<BookList books={books} />} />
      <Route path="/book/:id" element={<BookCard allBooks={books} />} />
    </Routes>
    </div>
  );
}

export default App;
