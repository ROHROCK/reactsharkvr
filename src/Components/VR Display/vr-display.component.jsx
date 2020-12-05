import React, { Component } from 'react';
import "./vr-display.component.css";
class VRDisplayComponent extends Component {
    render() {
        return (
            <div className="container">
                <model-viewer  src="assest/great_hammerhead_shark.glb" alt="A 3D model of a robot" auto-rotate camera-controls background-color="#455A64"/>
            </div>
        );
    }
}

export default VRDisplayComponent;