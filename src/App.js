import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import Home from "./component/Home.js";
import Contact from "./component/Contact.js";

// import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
