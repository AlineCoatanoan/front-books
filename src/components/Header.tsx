import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#8B5E3C] to-[#3C2F1E] text-[#F1E1C6] p-2 shadow-lg">
      <motion.div
        className="flex justify-between items-center max-w-screen-xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo cliquable */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link to="/">
            <img src="/logo.gif" alt="My Books" className="w-24 h-auto" />
          </Link>
        </motion.div>

        {/* Menu centré avec animation rigolote */}
        <motion.nav
          className="flex flex-grow justify-center items-center space-x-8 text-lg font-special-elite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            whileHover={{
              scale: 1.3, // agrandir au survol
              rotate: [0, 10, -10, 15, -15, 0], // rotation dans différentes directions
              x: [-10, 10, -10], // mouvement horizontal
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileTap={{
              scale: 0.9, // rétrécir lors du clic
              transition: { type: "spring", stiffness: 500 },
            }}
          >
            <Link to="/" className="hover:text-[#8B5E3C] text-xl">
              Accueil
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.3, // agrandir au survol
              rotate: [0, 10, -10, 15, -15, 0], // rotation dans différentes directions
              x: [10, -10, 10], // mouvement horizontal
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileTap={{
              scale: 0.9, // rétrécir lors du clic
              transition: { type: "spring", stiffness: 500 },
            }}
          >
            <Link to="/books" className="hover:text-[#8B5E3C] text-xl">
              Liste des livres
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>
    </header>
  );
}

export default Header;
