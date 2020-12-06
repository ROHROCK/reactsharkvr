import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./Team.css";

class TeamMember extends Component {
    render() {
        return (
           
            <Container fluid>
                
                 <div class="team_container">
                <Row>
                    <h1>MEET THE TEAM</h1>
                </Row>
                </div>
                <Row>
                    <div className="profile">
                    <Col xs lg="2">
                        <Image src="assest/Kausar.jpg" fluid  style={{width:"300px"}}></Image>
                        <h4 style={{ color:"red" }}>Kausar Sayyed</h4>
                        <a href="https://www.linkedin.com/in/kausar-sayyed07/">
                        <Image src="https://img.icons8.com/android/38/000000/linkedin.png"></Image></a>
                        {" "}
                        <a href="https://github.com/kausarsayyed20">
                        <Image src="https://img.icons8.com/material-rounded/48/000000/github.png"></Image></a>
                        {" "}
                     
                    </Col>
                    <Col xs lg="2">
                        <Image src="assest/Kausar.jpg" fluid style={{width:"300px"}}></Image>
                        <h4>Rohit</h4>
                        <div className="profile_links">
                        <a href="https://www.linkedin.com/in/kausar-sayyed07/">
                        <Image src="https://img.icons8.com/android/38/000000/linkedin.png"></Image></a>

                        <a href="https://github.com/kausarsayyed20">
                        <Image src="https://img.icons8.com/material-rounded/48/000000/github.png"></Image></a>
                        {" "}
                        </div>

                       
                    </Col>
                    <Col xs lg="2">
                        <Image src="assest/Kausar.jpg" fluid style={{width:"300px"}}></Image>
                        <h4>Vikrant</h4>
                        <div className="profile_links"></div>
                        <a href="https://www.linkedin.com/in/kausar-sayyed07/">
                        <Image src="https://img.icons8.com/android/38/000000/linkedin.png"></Image></a>
                        <a href="https://github.com/kausarsayyed20">
                        <Image src="https://img.icons8.com/material-rounded/48/000000/github.png"></Image></a>
                        {" "}
                    </Col>
                    </div>
                </Row>
                
            </Container>
           
        );
    }
}

export default TeamMember;
