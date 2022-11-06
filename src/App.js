import './App.css';
import HelloWorld from "./labs/a6/hello-world";
import Labs from "./labs";
import Tuiter from "./tuiter";

// import {BrowserRouter} from "react-router-dom";
// import {Routes, Route} from "react-router";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/*" element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
