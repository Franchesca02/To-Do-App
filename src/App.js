import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Home from "./Pages/Home";
import Navbar from "./Components/Layout/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ToDo from "./Pages/ToDo";
import Admin from "./Components/Dashboard/Admin";
import Footer from "./Components/Layout/Footer";
function App() {
  return (
    <div className="bg-Gray">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="to_do" element={<ToDo />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
