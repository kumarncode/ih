import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
   <>
   <Header />
   
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
   </>
  );
}

export default App;
