import React from 'react'
import image1 from '../assets/vrsamplephoto.jpg'
import image2 from '../assets/grafana.png'
import image3 from '../assets/portfoliopicmasked.png'
import { motion } from 'framer-motion'



const projectsData = [
  {
    image: image1,
    title: "Virtual Reality Game",
    description: "I developed a Virtual Reality (VR) game to help bioanalyst students recognize and familiarize themselves with laboratory sampling equipment. This educational tool enhances learning by bridging theoretical knowledge with practical application in a virtual lab.",
    technologies: ["C#", "Unity", "XR-tools", "Git", "Agile"],
    link: ""
  },
  {
    image: image2,
    title: "Intelligent and sustainable stormwater management (ISMO)",
    description: "I worked on the ISMO project as a developer. Our project team built a pipeline for receiving, processing, storing and displaying relevant data.",
    technologies: ["PostgreSQL", "InfluxDB", "Telegraf", "Grafana", "Python", "Microservices"],
    link: "https://ismo.turkuamk.fi/"
  },
  {
    image: image3,
    title: "This website!",
    description: "Built with React, Tailwind CSS, and Framer Motion, this project is automatically deployed via a CI/CD pipeline that triggers on every push to the repository. Taught me a lot about responsiveness and importance of automation.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Vite", "Git"],
    link: ""
  },
]

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img src={project.image} draggable='false' alt='' className='w-full cursor-pointer rounded-2xl aspect-video transition-all duration-300 hover:scale-105 md:w-[400px]' />

        <div className='flex flex-col gap-5'>

          <div className='flex flex-col gap-3'>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>
            {project.link.length !== 0 ?
              <div className="flex items-center gap-1">
                <p className="text-gray-400">Read more</p>
                <a href={project.link} className="text-blue-500 underline" target='_blank'>
                  here
                </a>
              </div> :
              null}
          </div>

          <div className='flex flex-wrap gap-5'>
            {
              project.technologies.map((tech, index) => (
                <span key={index} className='rounded-lg bg-black p-3'>
                  {tech}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-6xl'>Projects</h1>
      </ScrollReveal>

      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          projectsData.map((project, index) => {
            return <ProjectCard key={index} project={project} />
          })
        }

      </div>
    </div>
  )
}

export default Projects