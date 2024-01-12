import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./compnents/style.css";
import Login from "./compnents/Login";
import Index from "./compnents/Index";
import Home from "./compnents/Home";
import Admin from "./compnents/Admin";
import Membership from "./compnents/Membership";
import Advocate from "./compnents/Advocate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />}>
       
        <Route path="Home" element={<Home />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Membership" element={<Membership />} />
        <Route path="Advocate" element={<Advocate />} />
        </Route> 
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
