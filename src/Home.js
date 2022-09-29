import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <nav role="navigation">
    
      <div id="menuToggle">
          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            
          <ul id="menu">
          <div className="MenuApp">
            <h1>Pastry_</h1>
          </div>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>
    </nav>
    <div className="App">
      <h1>Pastry_</h1>
    </div>
    </>
  );
}

export default Home;
