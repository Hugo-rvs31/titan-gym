import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./pages/Programs/Programs";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </div>
  );
}

export default App;
