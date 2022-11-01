import { Route, Routes } from "react-router-dom"
import Home from "./tabs/Home"
import HomeOP from "./tabs/HomeOP"
import HomePP from "./tabs/HomePP"
import Cart from "./tabs/Cart"
import './App.css';

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeop" element={<HomeOP />} />
          <Route path="/homepp" element={<HomePP />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
    </>
  );
}

export default App;
