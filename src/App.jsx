import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Fotter from './components/Fotter';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <Shop />
        <Contact />
        <Fotter />
      </main>
    </div>
  );
}

export default App;
