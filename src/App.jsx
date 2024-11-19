import Main from "./components/Main";
import Condition from "./components/Condition";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="scroll-container">
                <Main />
                <Help />
                <Condition />
                <FAQ/>
                <Contact />
              </div>
            }
          />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </div>
    </Router>
  );
}
