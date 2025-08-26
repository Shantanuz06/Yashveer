import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from '../assets/logo.png';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <img className="h-16 w-auto" src={logo} alt="Yashveer Group Logo" loading="lazy" decoding="async" />
                <span className="ml-2 text-xl font-bold text-green-700">
                  YASHVEER GROUP
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              Services
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              Projects
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              Team
            </Link>
            <Link to="/contact" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700">
              Contact Us
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Team
            </Link>
            <Link to="/contact" className="bg-green-600 text-white block px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>}
    </nav>;
}