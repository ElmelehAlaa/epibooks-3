import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selected: false,
    asinSelected: "",
  };
  setAsinSelected = (value) => {
    this.setState({ asinSelected: value });
  };
  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="d-flex flex-wrap">
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery))
                .map((book) => (
                  <SingleBook
                    book={book}
                    key={book.asin}
                    onClick={() =>
                      this.setState({ selected: !this.state.selected, asinSelected: this.props.book.asin })
                    }
                  />
                ))}
            </div>
          </Col>

          {this.state.selected ? (
            <Col xs={6}>
              <CommentArea asin={this.state.asinSelected} />
            </Col>
          ) : (
            <Col xs={6}>
              <p>Seleziona un libro per vedere i commenti!</p>
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default BookList;
