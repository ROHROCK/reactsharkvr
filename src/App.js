import NavbarComponent from "./Components/Navbar/Navbar.component.jsx";
import "./App.css";
import SharkCardDisplay from "./Pages/shark-card-display/shark-card-display.jsx";
import SharkVRDisplayComponent from "./Pages/shark-vr-display/shark-vr-display.component.jsx";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/home.jsx";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/sharks" component={SharkCardDisplay} />
        <Route exact path="/sharks/:s" render={props=> <SharkVRDisplayComponent {...props} />} />
        {/* <Route path="/shark/:sharkname" component={SharkVRDisplayComponent} /> */}
        {/* <Route exact path="/" component={SharkCardDisplay} /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
