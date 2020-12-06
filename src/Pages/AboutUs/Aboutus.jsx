import React, { Component } from "react";
import { Image,Container ,Row ,Col } from "react-bootstrap";
import "./Aboutus.css";

class AboutUSSection extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row>
                        <Col>
                        <h1>BLAHAJ</h1>
                        <div className="image_container">
                       {/* <Image src="https://cf.shopee.com.my/file/9a1fa360daa78564598b2bd6f5b1d749" /> */}
                       </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                        {/* <div className="about_conatiner"> */}
                           
                            <div className="image_container">
                                {/* <Image src="https://static1.squarespace.com/static/56c70f6fb6aa609132db545b/56c71655f699bb9171a5cfba/575ace15e707eb2bbd88a9e7/1599056571494/download.jpg?format=1500w" /> */}
                            </div>
                        </Col>
                            <Col>
                            <h1>ABOUT US</h1>
                            <p>
                                As inspired by Ikea shark, blahaj, we have build an augmented reality project for sharks.
                                This Augmented Reality Shark will magically appear on the screen, floating on any surface you point your phone at.
                                
                                </p>
                            {/* </div> */}
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default AboutUSSection;
