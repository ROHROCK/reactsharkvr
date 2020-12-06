import React, { Component } from "react";
import VRDisplayComponent from "../../Components/VR Display/vr-display.component";

class SharkVRDisplayComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <VRDisplayComponent />
      </div>
    );
  }
}

export default SharkVRDisplayComponent;
