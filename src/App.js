import './App.css';
import React, { useState } from 'react'

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <>
      <div className="container my-3">
        {/* <Router> */}
          <Navbar title="Project1" mode={mode} toogleMode={toggleMode} />
          <TextForm heading="Enter the text to analyze below" />
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" />} /> */}
            {/* <Route exact path="/about" element={<About />} />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
