import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
// import  {fetchData} from '../../Services/Service.js'
import { Link } from "react-router-dom";
class SharkCardDisplay extends Component {
  state = {
    sharkData: [],
  };
  componentDidMount() {
    console.log("called");
    fetch("http://localhost:9000/shark")
      .then((res) =>
        res.json().then((res) => {
          console.log("Successfully received data from backend");
          this.setState({ sharkData: res });
          console.log(this.state.sharkData);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let image_links = this.state.sharkData.map((data, idx) => (
      <Card key={idx}>
        <Card.Img src={data.imageURL} />
        <Card.Body>
          <Card.Title>
            <Link
              to={{
                pathname: "/sharks/" + data.sharkType,
                state: { fetched: data },
              }}
            >
              {data.sharkType}
            </Link>
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    ));
    return (
      <div className="main_card_group">
        <CardGroup>{image_links}</CardGroup>
      </div>
    );
  }
}

export default SharkCardDisplay;
