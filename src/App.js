import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/inscription" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
