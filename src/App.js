import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <main className="flex relative min-h-[100vh] w-max-[100vh] font-Lato">
      <div className="h-screen top-0 sticky">
        <Navbar />
      </div>
      <div className="flex flex-grow w-screen">
        <div className="flex flex-wrap ">
          <Hero />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
