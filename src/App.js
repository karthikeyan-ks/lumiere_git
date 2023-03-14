import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Events } from "./components/Pages/Events";
import { Workshops } from "./components/Pages/Workshops";
import GeneralEvents from "./components/Pages/generalevents";
import TechnicalEvents from "./components/Pages/technicalevents";
import CulturalEvents from "./components/Pages/culturalevents";
import PublicityEvents from "./components/Pages/publicityevents";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Workshops" element={<Workshops />} />
            <Route path="/generalevents" element={<GeneralEvents />}/>
            <Route path="/technicalevents" element={<TechnicalEvents />}/>
            <Route path="/culturalevents" element={<CulturalEvents />}/>
            <Route path="/publicityevents" element={<PublicityEvents />}/>
            
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
