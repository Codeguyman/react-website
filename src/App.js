
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Product from './Components/pages/products'
import Services from './Components/pages/Services'
import SignUp from './Components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/products'  element={<Product/>} />
      <Route path='/services'  element={<Services/>} />
      <Route path='/sign-up'  element={<SignUp/>} />
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
