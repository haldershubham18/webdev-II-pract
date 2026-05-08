import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import InputForm from './components/InputForm';
import DisplayOutput from './components/DisplayOutput';

function App() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <div className="routes-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="form-section">
          <InputForm value={name} onChange={handleInputChange} />
          <DisplayOutput name={name} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
