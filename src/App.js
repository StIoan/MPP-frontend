import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Owner from './pages/Owner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddOwner from './owner/AddOwner';
import UpdateOwner from './owner/UpdateOwner';
import Country from './pages/Country';
import NavbarCountry from './layout/NavbarCountry';
import NavbarCar from './layout/NavbarCar';
import Car from './pages/Car'

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Navbar/>
      break
    case "/country":
      component = <NavbarCountry/>
      break
    case "/car":
      component = <NavbarCar/>
      break
    default:
      break
  }
  return (
    <div className="App">
      <Router>
      {component}
      <Routes>
        <Route exact path="/" element={<Owner/>}/>
        <Route exact path="/country" element={<Country/>}/>
        <Route exact path="https://fantastic-zabaione-297ed8.netlify.app/car" element={<Car/>}/>
        <Route exact path="/addOwner" element={<AddOwner/>}/>
        <Route exact path='/editOwner/:ownerId' element={<UpdateOwner/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
