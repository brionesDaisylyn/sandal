const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand Name on the Left */}
        <div className="text-2xl font-bold">
          Heels Yeah!
        </div>

        {/* Centered Navigation Links */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-20 text-lg">
            <li className="hover:text-gray-400">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#products">Products</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
