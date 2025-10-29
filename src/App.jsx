import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      {/* <Pricing/>
      <Testimonials />
      <Footer />   */}
    </div>
  );
}

export default App;
