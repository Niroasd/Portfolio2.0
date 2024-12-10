import React from 'react'
import { GrGithub, GrLinkedin } from 'react-icons/gr'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md:justify-evenly'>
      <a href='#home' className='bg-gradient-to-r from-white to-finn-blue bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>
        Nico Roininen
      </a>

      <ul className='hidden md:flex gap-10'>
        <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Home</li>
        </a>

        <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Technologies</li>
        </a>

        <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Projects</li>
        </a>

        <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Contact</li>
        </a>
      </ul>

      <ul className='hidden md:flex gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-finn-blue hover:opacity-100'>
          <GrLinkedin></GrLinkedin>
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-finn-blue hover:opacity-100'>
          <GrGithub></GrGithub>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar