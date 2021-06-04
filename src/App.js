import './App.css';
import New from './New'
import JI from './JI'
import J from './J'
import {NavLink,BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>swapan chutia hai  </h2>
      <Router>

      <New/>
      <Switch>
        
    <Route path='/JI'>
      <JI/>
    </Route>
    <Route path='/J'>
      <J/>
    </Route>
      </Switch>
      </Router>

      
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
    </div>
  );
}

export default App;
