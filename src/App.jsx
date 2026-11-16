import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
/* import Services from "./components/Services"; */

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
{/*       <Services /> */}
    </>
  );
}

export default App;
