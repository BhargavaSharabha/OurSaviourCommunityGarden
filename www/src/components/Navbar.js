import React, { useState } from 'react';
import Logo from '../assets/logo1.png';
import { BsFacebook } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const linkClasses = "mx-4 text-lg capitalize font-semibold cursor-pointer transition-transform duration-300 ease-in-out relative";
  const linkClassesWhite = `${linkClasses} text-white`;

  return (
    <>
      <div className='bg-[#0B3D2C] text-white font-normal text-[16px] flex justify-between items-center p-4 rounded-b-[27.5px] relative top-[-21px]'>
        <div className='flex-1'>
          <p>Welcome to Our Saviour Community Garden</p>
        </div>
        <a
          href='https://www.facebook.com/profile.php?id=100064727794513&mibextid=LQQJ4d'
          className='cursor-pointer'
          target='_blank'
        >
          <BsFacebook className='w-6 h-6' />
        </a>
      </div>

      <div className='w-full border-b border-[rgba(18,74,47,0.1)] px-4'>
        <div className='flex items-center justify-between py-4 relative'>
          <div className='flex items-center'>
            <img src={Logo} alt="logo" className='w-[90px] h-[70px] mr-4' />
            <p className='font-dancingscript text-[24px] md:text-[30px]'>Our Saviour Community Garden</p>
          </div>

          {/* Hamburger Menu Icon for Small and Medium Screens */}
          <div className='md:hidden' onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose className='w-8 h-8 cursor-pointer text-white' /> : <RxHamburgerMenu className='w-8 h-8 cursor-pointer text-black' />}
          </div>

          {/* Navigation Links - Displayed on large screens */}
          <nav className='hidden md:flex items-center justify-start ml-10'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${linkClasses} text-black active` : `${linkClasses} text-black`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive ? `${linkClasses} text-black active` : `${linkClasses} text-black`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Calendar
            </NavLink>
            <NavLink
              to="/volunteers"
              className={({ isActive }) =>
                isActive ? `${linkClasses} text-black active` : `${linkClasses} text-black`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteers
            </NavLink>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                isActive ? `${linkClasses} text-black active` : `${linkClasses} text-black`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? `${linkClasses} text-black active` : `${linkClasses} text-black`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </nav>

          {/* Overlay Menu for Small and Medium Screens */}
          <div
            className={`fixed top-0 left-0 w-full h-[35vh] bg-[#0B3D2C] z-50 flex flex-col justify-evenly items-center transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
              } md:hidden`}
          >
            <div className="w-full flex justify-end pr-4 pt-4">
              <AiOutlineClose onClick={toggleMenu} className='text-white w-8 h-8 cursor-pointer' />
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${linkClassesWhite} active underline` : linkClassesWhite
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive ? `${linkClassesWhite} active underline` : linkClassesWhite
              }
              onClick={toggleMenu}
            >
              Calendar
            </NavLink>
            <NavLink
              to="/volunteers"
              className={({ isActive }) =>
                isActive ? `${linkClassesWhite} active underline` : linkClassesWhite
              }
              onClick={toggleMenu}
            >
              Volunteers
            </NavLink>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                isActive ? `${linkClassesWhite} active underline` : linkClassesWhite
              }
              onClick={toggleMenu}
            >
              Donate
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? `${linkClassesWhite} active underline` : linkClassesWhite
              }
              onClick={toggleMenu}
            >
              Portfolio
            </NavLink>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          height: 4px;
          width: 100%;
          background-color: #0B3D2C;
          border-radius: 2px;
          transform: scaleX(1);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          height: 4px;
          width: 100%;
          background-color: #0B3D2C;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        a:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
};

export default Navbar;