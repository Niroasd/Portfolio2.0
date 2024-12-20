import React from 'react'
import { motion } from 'framer-motion'
import hello2 from '../assets/hello2.jpg'


const Profile = () => {
  return (
    <>
      <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
        <div className='flex flex-col items-center justify-center gap-10 text-white'>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}


          >
            <img src={hello2} className='w-[300px] cursor-pointer shadow-xl shadow-white rounded-full transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-finn-blue md:w-[350px]'></img>

          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}

            className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
            <h1 className='bg-gradient-to-r from-white to-finn-blue bg-clip-text text-transparent text-5xl font-light'>Nico Roininen</h1>
            <h3 className='bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent text-2xl md:text-3xl'>Software developer</h3>
            <p className='md:text-base text-pretty text-sm text-gray-400'>Hi👋! I'm a Full-Stack Developer crafting seamless and efficient web applications. I have expertise in both front-end and back-end development, I transform ideas into fully functional digital experiences that are visually appealing, highly performant, and user-centric.</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Profile