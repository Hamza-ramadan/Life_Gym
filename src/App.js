import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SingUP from './Pages/SingUP';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SingUP" element={<SingUP/>}/>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
