import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'
import { CreatePost } from './pages/CreatePost';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth } from './firebase_config';


function App() {
  const [isAuth, setIsAuth] = useState(false)
  

  const signUserOut = () => {
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }

  return (
    
      <Router>
        <nav className='navbar' >
            <Link to='/'>Home</Link>
            <Link to='/createpost'>Create Post</Link>
            {isAuth ? <button onClick={signUserOut} >Log Out</button> : <Link to='/login'>Login</Link>}
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/createpost' element={<CreatePost/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
