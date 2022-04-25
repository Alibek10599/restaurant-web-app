import './App.css';
import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";
import  Login  from './pages/Login';
import Reservation from './pages/Reservation';
function App() {
  return (
    <Router>
    
    <Routes>
      <Route path="/reserve" element={<Reservation/>} />
      <Route path="/" element={<Login/>} />
    </Routes>
    </Router>
  );
}

export default App;
