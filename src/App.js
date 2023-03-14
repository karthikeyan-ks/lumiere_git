import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Events } from "./components/Pages/Events";
import { Workshops } from "./components/Pages/Workshops";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Events />} />
            <Route path="/contact" element={<Workshops />} />
            
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
