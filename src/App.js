import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './Styles/genralStyling.css'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}>
        </Route>
        <Route path='/contact' element = {<Contact/>}>
        </Route>
        <Route path='/project' element = {<Projects/>}>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
