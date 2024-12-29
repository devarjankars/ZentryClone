import About from "./Components/About"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
function App() {
  return (
    <main className="w-screen min-h-screen overflow-x-hidden relative">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App  