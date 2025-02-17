import React, { useState } from 'react';
import { BiX, BiMenu } from 'react-icons/bi';
import { GrGithub, GrLinkedin } from 'react-icons/gr';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 py-6 text-white backdrop-blur-md md:px-32'>
      <a href='#home' className='bg-gradient-to-r bg-clip-text text-transparent opacity-80 text-3xl font-semibold text-white transition-all duration-300 hover:opacity-100'>
        Nico
      </a>

      <ul className='hidden md:flex gap-10'>
        <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Home</li>
        </a>
        <a href='#projects' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Projects</li>
        </a>
        <a href='#tech' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Technologies</li>
        </a>
        <a href='#contact' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Contact</li>
        </a>
      </ul>

      <ul className='hidden md:flex gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-finn-blue hover:opacity-100'>
          <a href="https://www.linkedin.com/in/nico-roininen/" target="_blank" rel="noopener noreferrer">
            <GrLinkedin />
          </a>
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-finn-blue hover:opacity-100'>
          <a href="https://github.com/Niroasd" target="_blank" rel="noopener noreferrer">
            <GrGithub />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
          <div className={`fixed left-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 ${isOpen ? "block" : "hidden"}`} onClick={menuOpen}></div>
          <ul className='flex flex-col gap-8'>
            <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Home</li>
            </a>
            <a href='#tech' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Technologies</li>
            </a>
            <a href='#projects' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Projects</li>
            </a>
            <a href='#contact' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Contact</li>
            </a>
          </ul>

          <ul className='flex flex-wrap gap-5'>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-finn-blue hover:opacity-100'>
              <a href="https://www.linkedin.com/in/nico-roininen/" target="_blank">
                <GrLinkedin />
              </a>
            </li>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-finn-blue hover:opacity-100'>
              <a href="https://github.com/Niroasd" target="_blank">
                <GrGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
