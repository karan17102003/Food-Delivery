import logo from './logo.svg';
import './App.css';

import Navbar from './component/Navbar';
import { Route, Routes,Router } from 'react-router-dom';
import SingUp from './component/SingUp';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ApiFetch from './component/ApiFetch';
import Cart from './Pages/Cart';
import Reviews from './Pages/Reviews';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Reviews' element={<Reviews/>}/>
            <Route path='/SingUp' element={<SingUp/>}/>
            <Route path='/login' element={<Login/>}/>
            
        </Routes>
        <Footer/>
        
        
      
    </div>
  );
}

export default App;
