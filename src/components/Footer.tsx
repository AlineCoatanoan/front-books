import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-[#8B5E3C] to-[#3C2F1E] text-[#F1E1C6] p-4 text-center flex justify-center items-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <p>&copy; 2025 My Books - Tous droits réservés</p>
      <img src="/logo.gif" alt="My Books" className="w-8 h-auto" />
    </motion.footer>
  );
}

export default Footer;
