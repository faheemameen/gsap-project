import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Feature />
    </main>
  );
}

export default App;
