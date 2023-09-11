import { Component } from "react";
import { Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  render() {
    return (
      <Col xs={"4"}>
        <Card
          onClick={() => {
            this.props.setAsin(this.props.book.asin);
          }}
          style={{
            border: this.props.book.asin === this.props.asin ? "3px solid red" : "none",
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </Col>
    );
  }
}

export default SingleBook;
