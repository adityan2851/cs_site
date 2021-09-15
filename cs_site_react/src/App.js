// import Navbar from "./components/Navbar/Navbar";
import HomePage from "./screens/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div>
        <div className="App">
          <Router>
          <HomePage />
          </Router>
     
    </div>
   
    </div>
  
  );
}

export default App;