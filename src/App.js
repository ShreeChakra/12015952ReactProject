import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  document.title = 'Peetzah';
  //title shown on tab is given by document.title
  return (
    <div className="App">
      <div className='nav'>
        <h1 className='maint'>PEETZAH</h1>
        <Link className='link' exact to='/' element={<Home />} >Home</Link>
        <Link className='link' exact to='/about' element={<About />} >About</Link>
        <Link className='link' exact to='/contact' element={<Contact />} >Contact</Link>
      </div>
      {
        //Routing creates a Single page web application
        //By routing, the web application does not rerender when we move to another page.
        // This makes the web application simpler and more powerful
      }
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
