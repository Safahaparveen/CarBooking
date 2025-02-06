import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import Home from "./component/Home.js";

// import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
