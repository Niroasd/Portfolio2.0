import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Tech from "./components/Tech"

function App() {

  return (
    <>

      {/* credits to here for the neat background template: https://bg.ibelick.com/ */}
      <div className="-z-10 fixed h-full w-full bg-slate-950">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] 
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div>
      </div>

      <main className=" flex flex-col items-center px-4 md:px-8
      lg:px-16">
        <Navbar />
        <Profile />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
