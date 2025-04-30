import logo from './logo.svg';
import './App.css';
import Screen1 from './Complonents/Screen1';
import Screen2 from './Complonents/Screen2';
import Screen3 from './Complonents/Screen3';
import Screen4 from './Complonents/Screen4';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Screen1/>
      <Screen2/>
      <Screen3/>
      <Screen4/>
    </div>
  );
}

export default App;
