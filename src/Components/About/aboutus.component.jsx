import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./aboutus.component.css";

class aboutus extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="image_container">
              <Col>
                1 0f 1
                <Image src="https://images-ext-1.discordapp.net/external/FpGkLZh-9DP5tHzGgqRc9xeOOn4uibQYeKnNTXSFO8Q/https/img.etimg.com/thumb/msid-48223813%2Cwidth-650%2Cimgsize-363706%2C%2Cresizemode-4%2Cquality-100/.jpg?width=633&height=475"></Image>
              </Col>
            </div>
          </div>
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
        </div>
      </div>
    );
  }
}

export default aboutus;
