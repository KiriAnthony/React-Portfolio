import './App.css';
import Header from "./component/Header/Header.jsx"
// import Homepage from './pages/Homepage/Homepage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Homepage/Homepage';
import Projects from './pages/Projects/Projects';
import Travels from './pages/Travels/Travels';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Projects"
              element={<Projects />}
            />
            <Route
              path="/Travels"
              element={<Travels />}
            />
            <Route
              path="/Contact"
              element={<Contact />}
            />
            <Route
              path="/Resume"
              element={<Resume />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
