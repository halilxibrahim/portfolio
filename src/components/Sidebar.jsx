import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-lg"
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
        w-64 bg-white border-r border-gray-200 p-6
      `}>
        {/* Profil Bilgisi */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFT3_2ciDLjJA/profile-displayphoto-shrink_800_800/B4DZN85RDIHoAc-/0/1732967207736?e=1743033600&v=beta&t=3sk_wsG_MQtNWw1m5Bd8cmhTfDKS-0TNglfQKfcxk_g"
            alt="Onur Şuyalcınkaya"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h1 className="text-lg font-semibold">Halil ibrahim Kamacı</h1>
          <p className="text-sm text-gray-500">Software Developer</p>
        </div>

        {/* Menü */}
        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block p-2 rounded hover:bg-gray-100 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="block p-2 rounded hover:bg-gray-100 font-medium"
              >
                Work
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 rounded hover:bg-gray-100 font-medium"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 rounded hover:bg-gray-100 font-medium"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Online Linkleri */}
        <div className="border-t pt-4">
          <h3 className="text-sm font-semibold mb-2">Online</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                X (Twitter)
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                SoundCloud
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}