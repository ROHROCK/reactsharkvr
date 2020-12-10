import React, { Component } from "react";
import "./vr-display.component.css";
import { Button, Card, CardDeck } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { withRouter } from "react-router-dom";

class VRDisplayComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.location.state);
    // let display = ["Primary", "Secondary", "Success"].map((variant, idx) => (
    //   <Card
    //     bg={variant.toLowerCase()}
    //     key={idx}
    //     text={variant.toLowerCase() === "light" ? "dark" : "white"}
    //     style={{ width: "18rem" }}
    //     className="mb-2"
    //   >
    //     <Card.Header>Test</Card.Header>
    //     <Card.Body>
    //       <Card.Title>{variant} Card Title </Card.Title>
    //     </Card.Body>
    //   </Card>
    // ));
    // console.log(this.props.location.state.fetched.glbLink);
    return (
      <div className="container">
        <model-viewer
          src="/assest/Megalodon.glb"
          alt="A 3D model of a robot"
          auto-rotate
          camera-controls
          background-color="#455A64"
        />
        <Card>
          {/* <Card.Header>
            {this.props.location.state.fetched.sharkType}
          </Card.Header> */}
          <Card.Body>
            <Table responsive="lg"></Table>
            <CardDeck>
              {/*  */}
              <Card
                bg={"Success".toLowerCase()}
                text={"Success".toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>Shark Type</Card.Header>
                <Card.Body>
                  <Card.Title>
                    {this.props.location.state.fetched.sharkType}
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                bg={"Primary".toLowerCase()}
                text={"Primary".toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>bodyLength</Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {this.props.location.state.fetched.bodyLength}{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>

            <Button
              variant="primary"
              src={this.props.location.state.fetched.wikilink}
            >
              Click Here
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(VRDisplayComponent);
