import NavbarComponent from "./Components/Navbar/Navbar.component.jsx";
import "./App.css";
import SharkCardDisplay from "./Pages/shark-card-display/shark-card-display.page.jsx";
import SharkVRDisplayComponent from "./Pages/shark-vr-display/shark-vr-display.page.jsx";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import aboutus from "./Components/About/aboutus.component.jsx";
// import TechnologyUsed from "./Pages/Technology/Technology.jsx";
import TeamMember from "./Components/Team/Team.component.jsx"
import TechnologyUsed from "./Components/Technology/Technology.component.jsx";
 function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/" component={SharkCardDisplay} /> */}
        <Route exact path="/sharks/:s" render={props=> <SharkVRDisplayComponent {...props} />} />
        <Route path="/shark/:sharkname" component={SharkVRDisplayComponent} />
        <Route exact path="/" component={aboutus} />{" "}
        <Route exact path="/" component={TechnologyUsed} />{" "}
        <Route exact path="/" component={TeamMember} />{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
