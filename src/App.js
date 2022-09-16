import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CS5610 Week 2
        </p>
        <ul>
          <li>
            <a href="labs/a2/index.html" className="App-link">Assignment 2</a>
          </li>
          <li>
            <a href="tuiter/navigation.html"  className="App-link">Tuiter</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
