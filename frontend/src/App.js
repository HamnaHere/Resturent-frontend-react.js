import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import Aboutus from "./components/Aboutus";
import Mainpage from "./components/Mainpage";
import Menu from "./components/Menu";

import Auth from "./components/Auth"

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>



          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
          <Route path="/mainpage" element={
            <Auth>
              <Mainpage />
            </Auth>
          } />
          <Route path="/signup" element={<SignUp />} />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
