import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/connexion" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
