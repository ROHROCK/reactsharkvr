import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./aboutus.css";

class aboutus extends Component {
  render() {
    return (
      <div>
        <Container>
        <Container fluid>
        <Row>
          <div className="image_container">
            <Col>1 0f 1
            <Image src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DihKUoZxNClA&psig=AOvVaw3AUersqxp8m7JlcoZoUK3h&ust=1607333438525000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCSn_OFue0CFQAAAAAdAAAAABAf">
              </Image>
            </Col>
            </div>
       </Row>
        </Container>
          <Row>
            <Col fluid>
              {/* <h1>BLAHAJ</h1> */}
              {/* <div className="image_container"> */}
                {/* <Image src="https://cf.shopee.com.my/file/9a1fa360daa78564598b2bd6f5b1d749" /> */}
              {/* </div> */}
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <div className="about_conatiner"> */}

              <div className="image_container">
                <Image src="https://react-landing-page-template.herokuapp.com/img/about.jpg" />
              </div>
            </Col>
            <Col>
              <h1>ABOUT US</h1>
              <p>
                As inspired by Ikea shark, blahaj, we have build an augmented
                reality project for sharks. This Augmented Reality Shark will
                magically appear on the screen, floating on any surface you
                point your phone at.
              </p>{" "}
              {/* </div> */}
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default aboutus;
