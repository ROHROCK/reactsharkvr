import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./Team.component.css";

class TeamMember extends Component {
  render() {
    return (
      <Container fluid>
        <div class="team_container">
          <Row>
            <h1>MEET THE TEAM</h1>
          </Row>{" "}
        </div>{" "}
        <Row>
          <div className="profile">
            <Col xs lg="2">
              <Image src="assest/Kausar.jpg" fluid></Image>
              <h4>Kausar Sayyed</h4>
              <a href="https://www.linkedin.com/in/kausar-sayyed07/">
                <Image src="https://img.icons8.com/android/38/000000/linkedin.png"></Image>
              </a>{" "}
              <a href="https://github.com/kausarsayyed20">
                <Image src="https://img.icons8.com/material-rounded/48/000000/github.png"></Image>
              </a>{" "}
            </Col>
            <Col xs lg="2">
              <Image src="assest/Rohit.jpg" fluid></Image>
              <h4>Rohit Agharkar</h4>
              <div className="profile_links">
                <a href="https://www.linkedin.com/in/rohit-agharkar-15793a127/">
                  <Image src="https://img.icons8.com/android/38/000000/linkedin.png"></Image>
                </a>
                <a href="https://github.com/ROHROCK">
                  <Image src="https://img.icons8.com/material-rounded/48/000000/github.png"></Image>
                </a>{" "}
              </div>
            </Col>
            <Col xs lg="2">
              <Image src="assest/Vikrant.jpg" fluid></Image>
              <h4>Vikrant Shitole</h4>
              <div className="profile_links"></div>
              <a href="https://www.linkedin.com/in/vikrant-shitole-081092183/">
                <Image src="https://img.icons8.com/android/38/000000/linkedin.png"></Image>
              </a>
              <a href="https://github.com/vikrantshitole">
                <Image src="https://img.icons8.com/material-rounded/48/000000/github.png"></Image>
              </a>{" "}
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default TeamMember;
