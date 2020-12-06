import NavbarComponent from "./Components/Navbar/Navbar.component.jsx";
import "./App.css";
import SharkCardDisplay from "./Pages/shark-card-display/shark-card-display.jsx";
import SharkVRDisplayComponent from "./Pages/shark-vr-display/shark-vr-display.component.jsx";
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
        <Route exact path="/" component={SharkCardDisplay} />
        <Route exact path="/shark/:sharkname" render={props=> <SharkVRDisplayComponent {...props} />} />
        {/* <Route path="/shark/:sharkname" component={SharkVRDisplayComponent} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
