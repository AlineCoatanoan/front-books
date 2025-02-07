import { IBook } from "../../@types/book";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";  // Importation de Framer Motion pour les animations

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
    <div className="bg-[#F1E1C6] min-h-[calc(100vh-60px)] flex justify-center items-start pt-16 px-2"> {/* Fond avec un dégradé et remontée de la card */}
      <motion.div
        className="bg-[#FFF2E5] p-6 shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row" // Utilisation de flex-direction pour l'agencement
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}  // Effet d'apparition fluide
      >
        {/* Image du livre à gauche */}
        <motion.img
          src={bookToDisplay.image}
          alt={bookToDisplay.title}
          className="w-72 h-96 object-contain mx-auto my-6 rounded-md shadow-md md:mx-0 md:my-0 md:mr-6"  // Ajustement pour la version mobile et desktop
          whileHover={{ scale: 1.05 }} // Effet de zoom au survol
          transition={{ type: "spring", stiffness: 300 }}
        />
        
        {/* Contenu textuel à droite de l'image */}
        <div className="p-6 flex flex-col justify-center">
          {/* Titre du livre */}
          <motion.h2
            className="text-4xl font-bold text-[#6B4F3A] mb-4 text-center md:text-left"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {bookToDisplay.title}
          </motion.h2>

          {/* Auteur du livre */}
          <motion.p
            className="text-xl text-[#6B4F3A] mb-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Auteur: <span className="font-semibold">{bookToDisplay.author}</span>
          </motion.p>

          {/* Difficulté du livre */}
          <motion.p
            className="text-sm text-[#8B5E3C] mb-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Difficulté: <span className="font-semibold">{bookToDisplay.difficulty}</span>
          </motion.p>

          {/* Description du livre */}
          <motion.p
            className="text-lg text-[#3C2F1E] mb-6 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {bookToDisplay.description}
          </motion.p>

          {/* Genre du livre */}
          {bookToDisplay.genres?.length > 0 && (
            <motion.p
              className="text-sm text-[#8B5E3C] mb-4 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Genre: <span className="font-semibold">{bookToDisplay.genres.join(', ')}</span>
            </motion.p>
          )}

          {/* Avis sur le livre */}
          <motion.h3
            className="text-xl font-semibold text-[#6B4F3A] mb-2 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Avis
          </motion.h3>
          <motion.p
            className="text-[#3C2F1E] text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {bookToDisplay.avis}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
