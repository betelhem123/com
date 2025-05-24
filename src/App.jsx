import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <AboutPage />
        <Shop />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
