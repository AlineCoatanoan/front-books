

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 px-6 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center"></div>
        {/* Formulaire de connexion */}
        <form className="flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Email"
            className="mb-2 sm:mb-0 sm:mr-2 p-2 rounded border border-gray-300 bg-white text-gray-900"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="mb-2 sm:mb-0 sm:mr-2 p-2 rounded border border-gray-300 bg-white text-gray-900"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Connexion
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
