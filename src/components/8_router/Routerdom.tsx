import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Navbar from "./Navbar";

const Routerdom = () => {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routerdom;
