
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout">
        <Header />
        <h1>I AM A CHECKOUT, SMASH THE LIKE BUTTON</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>

        </Routes>
    </div>

    </Router>
  );
}

export default App;
