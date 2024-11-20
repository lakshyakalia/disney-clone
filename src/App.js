import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes exact path="/">
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
