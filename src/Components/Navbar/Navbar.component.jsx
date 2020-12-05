import React, { Component } from 'react';

class NavbarComponent extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="assest/logo.png" width="35" height="35" class="d-inline-block align-top" alt="" />
                    <div className="text-align-center d-inline-block pl-2"> 
                    SharkVR
                    </div>
                </a>
            </nav>
            
        );
    }
}

export default NavbarComponent;