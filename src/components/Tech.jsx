import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BiLogoAws, BiLogoDocker, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoUnity } from 'react-icons/bi'

const Tech = () => {

  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const handleMouseEnter = (event, text) => {
    const { clientX, clientY } = event;
    // console.log(`entered ${text}\n${clientX}\n${clientY}`); //leaving this here for debugging purposes

    setTooltip({
      visible: true,
      x: clientX,
      y: clientY,
      text,
    });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTooltip((prev) => ({
      ...prev,
      x: clientX,
      y: clientY,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 md:w-6/12'>

      {tooltip.visible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2 }}
          className="hidden sm:block"
          style={{
            position: 'fixed',
            top: tooltip.y + 10,
            left: tooltip.x + 10,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 10,
          }}
        >
          {tooltip.text}
        </motion.div>
      )}
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}

        className='text-4xl font-light text-white md:text-6xl'>Technologies</motion.h1>


      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'JavaScript')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>


          <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'NodeJS')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoNodejs className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'TailwindCSS')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoTailwindCss className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'PostgreSQL')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoPostgresql className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'AWS')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoAws className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'MongoDB')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoMongodb className='cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'Python')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoPython className='cursor-pointer text-[80px] text-yellow-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'Docker')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoDocker className='cursor-pointer text-[80px] text-[#0db7ed] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'Java')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoJava className='cursor-pointer text-[80px] text-red-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'Unity')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>

          <BiLogoUnity className='cursor-pointer text-[80px] text-black transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onMouseEnter={(e) => handleMouseEnter(e, 'C#')}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] transition-all duration-300 hover:-translate-y-5"
            aria-label="C# Logo"
          >
            <path
              fill="#9B4F96"
              d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
            />
            <path
              fill="#68217A"
              d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
            />
            <path
              fill="#fff"
              d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
            />
          </svg>
        </motion.div>

      </div>
    </div>
  )
}

export default Tech