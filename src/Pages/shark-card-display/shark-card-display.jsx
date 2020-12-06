import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
// import  {fetchData} from '../../Services/Service.js'
class SharkCardDisplay extends Component {
  state = {
    sharkData: []
  }
  componentDidMount() {
    console.log("called");
    fetch('http://localhost:9000/shark').then(res =>
      res.json().then(res => {
        console.log("Successfully received data from backend")
        this.setState({ sharkData: res });
        console.log(this.state.sharkData);
      }
      )).catch(err => {
        console.log(err);
      });
  }
  render() {
    let image_links = [
      "https://i.ytimg.com/vi/_82Iv7P0ASM/maxresdefault.jpg",
      "https://www.nhm.ac.uk/content/dam/nhmwww/discover/megalodon/megalodon_warpaint_shutterstock-full-width.jpg.thumb.1160.1160.jpg",
      "https://science.sciencemag.org/content/359/6382/1342.1/F1.large.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Great_hammerhead2.jpg",
    ].map((variant, idx) => (
      <Card key={idx}>
        <Card.Img src={variant} />
        <Card.Body>
          <Card.Title>shark</Card.Title>
          <Card.Text>
            The tiger shark is a species of requiem shark and the only extant
            member of the genus Galeocerdo. It is a large macropredator, capable
            of attaining a length over 5 m. Populations are found in many
            tropical and temperate waters, especially around central Pacific
            islands
          </Card.Text>
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
