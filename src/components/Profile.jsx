import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import hello2 from '../assets/hello2.jpg'
import '../index.css'

const Profile = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
        <div className='flex flex-col items-center justify-center gap-10 text-white'>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}


          >
            <img src={hello2} draggable='false' alt='portrait picture of me or something that i like' className='w-[300px] cursor-pointer shadow-xl shadow-white rounded-full transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-finn-blue md:w-[350px]'></img>

          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}

            className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
            <h1 className='bg-gradient-to-r from-white to-finn-blue bg-clip-text text-transparent text-5xl font-light'>Nico Roininen</h1>
            <h3 className='bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent text-2xl md:text-3xl'>Software developer</h3>
            <p className='md:text-base text-pretty text-sm text-gray-400'>Hi👋! I'm a third-year student at TUAS with a passion for technology, problem-solving, and continuous learning. I have experience in both front-end and back-end development and have also explored game development.<br></br> I enjoy creating software that's user-friendly, efficient, and designed to solve real-world problems. Feel free to reach out if you're interested in collaborating—let's create something amazing together!</p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: scrollY < 200 ? 1 : 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div className='hidden md:flex px-6 pt-6 rounded-md relative radial-gradient'
              initial={{ "--x": "100%", scale: 1 }}
              animate={{ "--x": "-100%" }}
              transition={{ repeat: Infinity, repeatType: 'loop', repeatDelay: 1, type: 'spring', stiffness: 20, damping: 15, mass: 2 }}
              style={{ "--x": "100%" }}
            >
              <span className='text-gray-100 tracking-wide font-light h-full w-full block relative linear-mask'>scroll down</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Profile