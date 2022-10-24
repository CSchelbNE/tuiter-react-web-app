import './App.css';
import HelloWorld from "./labs/a6/hello-world";
import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavigationSidebar from "./tuiter/navigation-sidebar";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Web Dev Assignments</h1>
    //     <ul>
    //       <li>
    //         <a href="labs/a2/index.html" className="App-link">Assignment 2</a>
    //       </li>
    //       <li>
    //         <a href="labs/a3/index.html" className="App-link">Assignment 3</a>
    //       </li>
    //       <li>
    //         <a href="labs/a4/index.html" className="App-link">Assignment 4</a>
    //       </li>
    //       <li>
    //         <a href="labs/a5/index.html" className="App-link">Assignment 5</a>
    //       </li>
    //       <li>
    //         <a href="labs/a5/todos/index.html" className="App-link">Assignment 5: Todos</a>
    //       </li>
    //       <li>
    //         <a href="tuiter/navigation.html"  className="App-link">Tuiter</a>
    //       </li>
    //     </ul>
    //   </header>
    // </div>
  );
}

export default App;
