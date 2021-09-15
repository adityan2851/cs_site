// import Navbar from "./components/Navbar/Navbar";
import HomePage from "./screens/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
      <div className="App">
          <Router>
          <HomePage />
          </Router>
      </div>  
  );
}

export default App;