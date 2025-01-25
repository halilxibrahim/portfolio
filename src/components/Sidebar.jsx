import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { FiX, FiGithub, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-lg hover:bg-blue-50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        w-64 bg-white border-r border-blue-100 p-6
      `}>
        {/* Profil Bilgisi */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFT3_2ciDLjJA/profile-displayphoto-shrink_800_800/B4DZN85RDIHoAc-/0/1732967207736?e=1743033600&v=beta&t=3sk_wsG_MQtNWw1m5Bd8cmhTfDKS-0TNglfQKfcxk_g"
            alt="Halil ibrahim Kamacı"
            className="w-20 h-20 rounded-full mb-4 p-1"
          />
          <h1 className="text-lg font-semibold text-gray-800">Halil ibrahim Kamacı</h1>
          <p className="text-sm text-black-400">Software Developer</p>
        </div>

        {/* Menü */}
        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className={`flex items-center p-2 rounded font-medium transition-colors duration-300 ${
                  location.pathname === '/' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <AiOutlineHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className={`flex items-center p-2 rounded font-medium transition-colors duration-300 ${
                  location.pathname === '/work' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <MdWorkOutline className="mr-2" /> Work
              </Link>
            </li>
            <li>
              <Link 
                to="/experience" 
                className={`flex items-center p-2 rounded font-medium transition-colors duration-300 ${
                  location.pathname === '/experience' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <AiOutlineProject className="mr-2" /> Experience
              </Link>
            </li>
          </ul>
        </nav>

        {/* Online Linkleri */}
        <div className="border-t border-blue-100 pt-4">
          <h3 className="text-sm font-semibold mb-2 text-gray-800">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a 
                href="https://github.com/halilxibrahim" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-md hover:bg-blue-50"
              >
                <FiGithub className="mr-2" /> GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/halilxibrahim/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-md hover:bg-blue-50"
              >
                <FiLinkedin className="mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://medium.com/@halilxibrahim" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-md hover:bg-indigo-50"
              >
                <SiMedium className="mr-2" /> Medium
              </a>
            </li>
            <li>
              <a 
                href="https://x.com/halilxibrahim_" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-md hover:bg-blue-50"
              >
                <FiX className="mr-2" /> X (Twitter)
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/halil.coding/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-md hover:bg-indigo-50"
              >
                <FiInstagram className="mr-2" /> Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/@halilxibrahim" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-md hover:bg-indigo-50"
              >
                <FiYoutube className="mr-2" /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}