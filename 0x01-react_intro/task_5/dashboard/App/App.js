import logo from "./holberton-logo.jpg";
import './App.css';
import { getFooterCopy } from '../utils/utils.js';

function App() {
  return (
    <div>
      <header className="App-header">

        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button>OK</button>
        </form>


      </div>
      <div className="App-footer">{getFooterCopy(true)}</div>

    </div>
  );
}

export default App;
