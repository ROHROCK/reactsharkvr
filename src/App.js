import NavbarComponent from "./Components/Navbar/Navbar.component.jsx";
import "./App.css";
import SharkCardDisplay from "./Pages/shark-card-display/shark-card-display.jsx";
import AboutUs from "./Pages/AboutUs/Aboutus.jsx";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        {/* <Route exact path="/" component={SharkCardDisplay} /> */}
        <Route exact path="/" component={AboutUs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
