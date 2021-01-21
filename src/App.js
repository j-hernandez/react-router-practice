import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import React, { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const _toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <Router>
      <div>
        <nav>
          <button onClick={_toggleLoggedIn}>
            { isLoggedIn ? 'logout' : 'login'}
          </button>
          <Link to="/">Home Page</Link>
          <Link to="/blog">My blog</Link>
          <Link to="/contact"> Contact Me </Link>
          { isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
            <Blog />
          </Route>
        <Route path="/dashboard">
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </ProtectedRoute>
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
            
  );
}

export default App;
