import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <Blog />
      <Dashboard />
    </div>
  );
}

export default App;
