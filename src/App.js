import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Pricing from './components/Pricing';
import Textform from './components/Textform';
import Contact from './components/Contact';
import Slider from './components/Slider';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar title='Ankush React Demo'/>  
    <Routes>
    <Route path="/" element={<><Slider/><Home/></>} exact />
    <Route path="/about" element={<About/>} exact />
    <Route path="/pricing" element={<Pricing/>} exact />
    <Route path="/text-converter" element={<Textform heading="Text Converter"/>} exact />
    <Route path="/contact" element={<Contact/>} exact />
    </Routes>
    <Footer/>
    </Router>
    
    </>
  );
}

export default App;
