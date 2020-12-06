import React, { Component } from "react";
import {Image, Container ,Row ,Col } from "react-bootstrap";

class TechnologyUsed extends Component {
    render() {
        return (
            <div >

                <Container>
                   <Row> <Col>
                   <div>
                        <Image width="100" height="100" className="m-5 align-items-center" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDIyNiAyMjYiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjI2di0yMjZoMjI2djIyNnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMTEzLDIyNmMtNjIuNDA4MTgsMCAtMTEzLC01MC41OTE4MiAtMTEzLC0xMTN2MGMwLC02Mi40MDgxOCA1MC41OTE4MiwtMTEzIDExMywtMTEzdjBjNjIuNDA4MTgsMCAxMTMsNTAuNTkxODIgMTEzLDExM3YwYzAsNjIuNDA4MTggLTUwLjU5MTgyLDExMyAtMTEzLDExM3oiIGZpbGw9IiMwNmEwMWUiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTc0Ljg2NzUsODkuOTcxNTRjMCw3MC40NjAyMSAtNjEuODY3NSw5MS43NzAxMiAtNjEuODY3NSw5MS43NzAxMmMwLDAgLTYxLjg2NzUsLTIxLjMwOTkyIC02MS44Njc1LC05MS43NzAxMmMwLC04LjU5MjcxIDAuNjg3NDIsLTE1LjgxMDU4IDEuMzc0ODMsLTIxLjY1MzYyYzEuMDMxMTMsLTguNTkyNzEgNi44NzQxNywtMTUuNDY2ODggMTUuMTIzMTcsLTE3LjUyOTEzYzEwLjY1NDk2LC0zLjA5MzM3IDI3LjQ5NjY3LC02LjUzMDQ2IDQ1LjM2OTUsLTYuNTMwNDZjMTcuODcyODMsMCAzNC43MTQ1NCwzLjQzNzA4IDQ1LjcxMzIxLDYuNTMwNDZjOC4yNDksMi4wNjIyNSAxNC4wOTIwNCw5LjI4MDEzIDE1LjEyMzE3LDE3LjUyOTEzYzAuMzQzNzEsNS44NDMwNCAxLjAzMTEzLDEzLjQwNDYyIDEuMDMxMTMsMjEuNjUzNjJ6IiBmaWxsPSIjNWQ0MDM3Ij48L3BhdGg+PHBhdGggZD0iTTExMyw1NC41Njk1OGMxNi44NDE3MSwwIDMyLjY1MjI5LDMuNDM3MDggNDIuOTYzNTQsNi4xODY3NWM0LjEyNDUsMS4wMzExMiA2Ljg3NDE3LDQuNDY4MjEgNy41NjE1OCw4LjkzNjQyYzAuNjg3NDIsNi41MzA0NiAxLjAzMTEyLDEzLjQwNDYyIDEuMDMxMTIsMjAuMjc4NzljMCw1My42MTg1IC0zOS41MjY0Niw3NS4yNzIxMiAtNTEuNTU2MjUsODAuNDI3NzVjLTEyLjAyOTc5LC01LjQ5OTMzIC01MS41NTYyNSwtMjcuMTUyOTYgLTUxLjU1NjI1LC04MC40Mjc3NWMwLC02Ljg3NDE3IDAuMzQzNzEsLTEzLjc0ODMzIDEuMDMxMTMsLTIwLjI3ODc5YzAuMzQzNzEsLTQuNDY4MjEgMy40MzcwOCwtNy45MDUyOSA3LjU2MTU4LC04LjkzNjQyYzEwLjMxMTI1LC0yLjc0OTY3IDI2LjEyMTgzLC02LjE4Njc1IDQyLjk2MzU0LC02LjE4Njc1TTExMyw0NC4yNTgzM2MtMTcuODcyODMsMCAtMzQuNzE0NTQsMy40MzcwOCAtNDUuNzEzMjEsNi41MzA0NmMtNy45MDUyOSwyLjA2MjI1IC0xNC4wOTIwNCw5LjI4MDEyIC0xNC43Nzk0NiwxNy41MjkxM2MtMC42ODc0Miw1Ljg0MzA0IC0xLjM3NDgzLDEzLjQwNDYyIC0xLjM3NDgzLDIxLjY1MzYyYzAsNzAuNDYwMjEgNjEuODY3NSw5MS43NzAxMiA2MS44Njc1LDkxLjc3MDEyYzAsMCA2MS44Njc1LC0yMS4zMDk5MiA2MS44Njc1LC05MS43NzAxMmMwLC04LjU5MjcxIC0wLjY4NzQyLC0xNS44MTA1OCAtMS4zNzQ4MywtMjEuNjUzNjJjLTEuMDMxMTMsLTguNTkyNzEgLTYuODc0MTcsLTE1LjQ2Njg4IC0xNS4xMjMxNywtMTcuNTI5MTNjLTEwLjY1NDk2LC0zLjA5MzM3IC0yNy40OTY2NywtNi41MzA0NiAtNDUuMzY5NSwtNi41MzA0NnoiIGZpbGw9IiM0Y2FmNTAiPjwvcGF0aD48cGF0aCBkPSJNMTA5LjU2MjkyLDEyNi43NDgzM2g2Ljg3NDE3djI3LjQ5NjY3aC02Ljg3NDE3eiIgZmlsbD0iI2RjZWRjOCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTMsNjQuODgwODNjMCwwIC0yMC42MjI1LDE3LjE4NTQyIC0yMC42MjI1LDQ0LjY4MjA4YzAsMTcuODcyODMgMTEuMzQyMzcsMjkuMjE1MjEgMTcuMTg1NDIsMzQuMzcwODNsMy40MzcwOCwtMTAuMzExMjVsMy40MzcwOCwxMC4zMTEyNWM1Ljg0MzA0LC01LjE1NTYyIDE3LjE4NTQyLC0xNi40OTggMTcuMTg1NDIsLTM0LjM3MDgzYzAsLTI3LjQ5NjY3IC0yMC42MjI1LC00NC42ODIwOCAtMjAuNjIyNSwtNDQuNjgyMDh6IiBmaWxsPSIjNGNhZjUwIj48L3BhdGg+PHBhdGggZD0iTTExMyw2NC44ODA4M2MwLDAgLTIwLjYyMjUsMTcuMTg1NDIgLTIwLjYyMjUsNDQuNjgyMDhjMCwxNy44NzI4MyAxMS4zNDIzNywyOS4yMTUyMSAxNy4xODU0MiwzNC4zNzA4M2wzLjQzNzA4LC0xMC4zMTEyNXoiIGZpbGw9IiM4MWM3ODQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" rounded />
                    </div>
                    </Col>
                    <Col >
                        <Image src="https://img.icons8.com/plasticine/200/000000/react.png" width="120" height="120" className="m-5 align-items-center"></Image>
                        
                    </Col>
                    </Row>
                    <Row> <Col>
                   <div>
                        <Image width="130" height="130" className="m-5 align-items-center" src="https://img.icons8.com/color/240/000000/nodejs.png" />
                    </div>
                    </Col>
                    <Col >
                        <Image width="100" height="100" className="m-5 align-self-center" src="https://img.icons8.com/color/144/000000/heroku.png"></Image>
                        
                    </Col>
                    </Row>
                </Container>
              
            </div>
        );
    }
}

export default TechnologyUsed;
