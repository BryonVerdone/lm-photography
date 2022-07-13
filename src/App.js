import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Prices from './pages/prices/Prices';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
