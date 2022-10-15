import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Web Dev Assignments</h1>
        <ul>
          <li>
            <a href="labs/a2/index.html" className="App-link">Assignment 2</a>
          </li>
          <li>
            <a href="labs/a3/index.html" className="App-link">Assignment 3</a>
          </li>
          <li>
            <a href="labs/a4/index.html" className="App-link">Assignment 4</a>
          </li>
          <li>
            <a href="labs/a5/index.html" className="App-link">Assignment 5</a>
          </li>
          <li>
            <a href="labs/a5/todos/index.html" className="App-link">Assignment 5: Todos</a>
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
