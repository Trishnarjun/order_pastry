import './App.scss';
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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
    </nav>
    <div className="App">
      <h1>Pastry_</h1>
    </div>
    <div className='titleAbout'>
      <h3>About</h3> 
      <p>My name is blha</p>
    </div>
    </>
  );
}

export default Home;
