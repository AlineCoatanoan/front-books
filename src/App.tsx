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
      console.log("Tentative de récupération des livres...");
      const response = await fetch("https://api-books-mu.vercel.app"); // Vérifier l'URL de l'API
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Données de l'API :", data); // Vérifie les données reçues ici
  
      if (Array.isArray(data)) {
        console.log("Livres reçus :", data); // Vérifie que data est un tableau
        setBooks(data);
      } else {
        console.error("Réponse inattendue : ", data);
        setBooks([]);
      }
    } catch (e) {
      console.error("Erreur lors de la récupération des livres :", e);
      setBooks([]); // Si une erreur se produit, on vide les livres
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Liste des livres</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
