import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Gallery() {
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
    <div>
      <h2>Gallery</h2>
    </div>
    <div className="imgBank">
      <img src={require('./images/Img1.png')} alt="first project"/>
      <img src={require('./images/Img2.png')} alt="first project"/>
      <img src={require('./images/Img3.png')} alt="first project"/>
      <img src={require('./images/Img4.png')} alt="first project"/>
      <img src={require('./images/Img5.png')} alt="first project"/>
      <img src={require('./images/Img6.png')} alt="first project"/>
      <img src={require('./images/Img7.png')} alt="first project"/>
      <img src={require('./images/Img8.png')} alt="first project"/>
      <img src={require('./images/Img9.png')} alt="first project"/>
      <img src={require('./images/Img10.png')} alt="first project"/>
      <img src={require('./images/Img11.png')} alt="first project"/>
      <img src={require('./images/Img12.png')} alt="first project"/>
      <img src={require('./images/Img13.png')} alt="first project"/>
      <img src={require('./images/Img14.png')} alt="first project"/>
      <img src={require('./images/Img15.png')} alt="first project"/>
      <img src={require('./images/Img16.png')} alt="first project"/>
      <img src={require('./images/Img17.png')} alt="first project"/>
      <img src={require('./images/Img18.png')} alt="first project"/>
      <img src={require('./images/Img19.png')} alt="first project"/>
      <img src={require('./images/Img20.png')} alt="first project"/>
      <img src={require('./images/Img21.png')} alt="first project"/>
    </div>
    </>
  );
}

export default Gallery;
