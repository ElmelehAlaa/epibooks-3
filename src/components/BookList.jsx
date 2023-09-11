import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
    // selected: false,
    // asinSelected: null,
  };
  setAsinSelected = (value) => {
    this.setState({ asinSelected: value });
  };
  render() {
    return (
      <>
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

        <Col xs={12}>
          <div className="d-flex flex-wrap">
            {this.props.books
              .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery))
              .map((book) => (
                <SingleBook
                  // onClick={() => this.setState({ selected: !this.state.selected })}
                  book={book}
                  key={book.asin}
                  setAsin={this.props.setAsin}
                />
              ))}
          </div>
        </Col>
      </>
    );
  }
}

export default BookList;
