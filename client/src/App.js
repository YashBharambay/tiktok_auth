import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <Router>
    <div className="App">
      <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>
            Welcome to the Tiktok Authentication.
          </h1>
          <Link className='showlink' to='/'>
            Home
          </Link>
        </header>

        <div className='App-body'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />

          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
