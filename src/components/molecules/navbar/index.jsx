import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DefaultNavbar from './default-navbar';
import MobileNavbar from './mobile-navbar';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="flex mr-10 mt-2">
      <div className="md:block hidden">
        <DefaultNavbar />
      </div>
      {/* HAMBURGER BUTTON MOBILE VERSION */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => handleNavbar()}
        >
          {
            !navbar ? (
              <FaBars size={22} />
            ) : (
              <FaTimes size={22} />
            )
          }
        </button>
      </div>
      <div className={navbar ? 'block ' : 'hidden '}>
        <MobileNavbar />
      </div>
    </div>
  );
}
