import Main from "./components/Main";
import Condition from "./components/Condition";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./components/FAQ";
//import Services from "./components/Services";

export default function App() {
  document.title = 'Вызов опытной медсестры на дом';
  return (
    <Router>
      <div className="App">
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL4BHDZW"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <Routes>
          <Route
            path="/"
            element={
              <div className="scroll-container">
                <Main />
                <Help />
                {/* <Services/> */}
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
