import { BrowserRouter as Router, Switch,Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
