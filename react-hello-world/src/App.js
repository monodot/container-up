import logo from './kylie.jpg';
import './App.css';
import { configuration } from './config.js';

console.log(configuration);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>Welcome to The React + Kylie Fan Club!</strong>
        </p>
        <p>
         Favourite song = <strong>{ configuration.favourite_song }</strong><br/>
         Favourite Kylie era = <strong>{ configuration.favourite_era }</strong>
        </p>
      </header>
    </div>
  );
}

export default App;
