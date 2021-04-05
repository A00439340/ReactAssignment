import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import MyTwon from './components/MyTown';
import Navigation from './components/Navigation';
import MyTown from './components/MyTown';

function App() {
  return (
      <div className="App">

          <td><AboutMe /> </td> <td> </td><td><MyTown /> </td>

      </div>
  );
}

export default App;


/*<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>

    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
        </a>
</header>
*/