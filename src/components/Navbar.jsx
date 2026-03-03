const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">
          Guru Prasanth
        </h1>

        <div className="space-x-6 hidden md:block text-blue-600">
          <a href="#about" className="hover:text-blue-800">About</a>
          <a href="#projects" className="hover:text-blue-800">Projects</a>
          <a href="#contact" className="hover:text-blue-800">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;