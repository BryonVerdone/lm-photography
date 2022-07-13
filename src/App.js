import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Prices from './pages/prices/Prices';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='prices' element={<Prices />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
