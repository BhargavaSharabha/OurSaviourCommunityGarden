import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Calendar from './components/Calendar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Portfolio from './components/Portfolio';
import Donation from './components/Donation';
import Volunteer from './components/Volunteer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Header />
      <About /> */}
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path="/about" element={<About />} />
          <Route path='/portfolio' element={<Gallery/>} />
          <Route path='/donate' element={<Donation/>} />
          <Route path='/volunteers' element={<Volunteer/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
