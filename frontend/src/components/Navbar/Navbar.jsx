export const Navbar = () => {
    return (
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AgriConnect</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#loans" className="hover:underline">Loans</a></li>
            <li><a href="#community" className="hover:underline">Community</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };