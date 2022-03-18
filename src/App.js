import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";

export default function App() {
  return (
    <main className="h-full">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
