import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Dashboard from './components/Dashboard'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div>
        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/blog">My blog</Link>
          <Link to="/contact"> Contact Me </Link>
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
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
