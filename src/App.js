import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";

export default function App() {
  return (
    <main className="relative min-h-[100vh] w-max-[100vh]">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
