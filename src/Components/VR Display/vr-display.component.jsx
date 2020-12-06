import React, { Component } from "react";
import "./vr-display.component.css";
import { Button, Card, CardDeck } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class VRDisplayComponent extends Component {
  render() {
    let display = [
      "Primary",
      "Secondary",
      "Success",
      "Danger",
      "Warning",
      "Dark",
    ].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{variant} Card Title </Card.Title>
        </Card.Body>
      </Card>
    ));
    return (
      <div className="container">
        <model-viewer
          src="/assest/great_hammerhead_shark.glb"
          alt="A 3D model of a robot"
          auto-rotate
          camera-controls
          background-color="#455A64"
        />
        <Card>
          <Card.Header>This is the shark name</Card.Header>
          <Card.Body>
            <Table responsive="lg"></Table>
            <CardDeck>{display}</CardDeck>
            <Button variant="primary">Click here to learn more</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default VRDisplayComponent;
