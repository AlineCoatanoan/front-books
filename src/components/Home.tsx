import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#8B5E3C] to-[#3C2F1E] text-[#F1E1C6]">
      {/* Image en arrière-plan */}
      <div
        className="absolute inset-0 bg-[size:100%] bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/books.png')" }}
      ></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-8 space-y-12">
        {/* Titre animé */}
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Bienvenue dans <span className="text-[#F1E1C6]">My Books</span>
        </motion.h1>

        {/* Description animée avec décalage */}
        <motion.p
          className="text-lg sm:text-2xl mb-12 px-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explorez votre bibliothèque virtuelle et découvrez de nouveaux livres passionnants !
        </motion.p>

        {/* Boutons de navigation animés avec effet de rebond */}
        <motion.div
          className="space-x-4 flex justify-center pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="inline-block p-4 bg-[#F1E1C6] text-[#3C2F1E] rounded-lg cursor-pointer hover:bg-[#8B5E3C] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileInView={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 10, -10, 0] }}
            transition={{ type: "spring", stiffness: 300, delay: 1.5 }}
          >
            <Link to="/books">Voir la liste des livres</Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
