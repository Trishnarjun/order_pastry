import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';
// import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
