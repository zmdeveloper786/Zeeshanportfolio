import React from 'react';
import { FaUserTie, FaHome, FaUser, FaRegFolderOpen, FaServicestack, FaChartLine, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="h-screen w-20 text-white mr-8 flex flex-col items-center fixed right-0 top-0 py-6">
      <button className="flex items-center justify-center mb-8 px-2 py-2 bg-black text-white font-semibold rounded-full shadow-md transition duration-300 bg-yellow-500">
        <a title='Hire Me' target='blank' href="https://wa.me/+923254992099">
          <div className="p-2 rounded-full transition duration-300">
            <FaUserTie className="text-2xl text-white transition duration-300 hover:text-white" />
          </div>
        </a>
      </button>

      {/* <nav className="flex flex-col gap-6 w-full mt-5">
        {[
          { id: 'home', label: 'Home', icon: <FaHome /> },
          { id: 'about', label: 'About', icon: <FaUser /> },
          { id: 'portfolio', label: 'Portfolio', icon: <FaRegFolderOpen /> },
          { id: 'skills', label: 'Skills', icon: <FaServicestack /> },
          { id: 'experience', label: 'Experience', icon: <FaChartLine /> },
          { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
        ].map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`group relative flex items-center rounded-full justify-center w-full h-12 text-lg hover:bg-yellow-500 ${activeSection === id ? 'bg-yellow-500 text-white' : 'bg-[rgb(42,42,42)] text-white'
              }`}
          >

            <span className="text-2xl z-20 rounded-3xl">{icon}</span>
            <span className="nav-label hover:rounded-z-10 tl-3xl bg-yellow-500">{label}</span>
          </button>
        ))}
      </nav> */}
   <nav className="lg:flex flex-col gap-6 w-full mt-5">
  {[
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FaRegFolderOpen /> },
    { id: 'skills', label: 'Skills', icon: <FaServicestack /> },
    { id: 'experience', label: 'Experience', icon: <FaChartLine /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ].map(({ id, label, icon }) => (
    <button
      key={id}
      onClick={() => setActiveSection(id)}
      className={`group relative flex items-center rounded-full justify-center w-full h-12 text-lg hover:bg-yellow-500 ${
        activeSection === id ? 'bg-yellow-500 text-white' : 'bg-[rgb(42,42,42)] text-white'
      }`}
    >
      <span className="text-2xl z-20 rounded-3xl">{icon}</span>
      <span className="nav-label hover:rounded-z-10 tl-3xl bg-yellow-500">{label}</span>
    </button>
  ))}
</nav>


    </div>
  );
};

export default Navbar;

