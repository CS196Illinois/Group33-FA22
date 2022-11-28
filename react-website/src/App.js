import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/about'
import PredictionPage from './pages/PredictionPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/predictionpage" element={<PredictionPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
