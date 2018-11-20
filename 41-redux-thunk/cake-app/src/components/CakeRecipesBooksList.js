import React, { Component } from "react";
import { connect } from "react-redux";

import { setBooks } from "../actions/cake-recipes-books";

class CakeRecipesBooksList extends Component {
  componentDidMount() {
    this.props.onSetBooks();
    // fetch("https://www.googleapis.com/books/v1/volumes?q=cake+recipes")
    //   .then(response => response.json())
    //   .then(response => {
    //     this.props.onSetBooks(response.items);
    //   });

    this.getBooks();
  }

  getBooks = async () => {
    const books = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=cake+recipes"
    );

    console.log("======", books);
  };

  render() {
    return this.props.loading ? (
      <h1>HEY! BAKING THE CAKE BOOKS, BRotHerS and SiSteRs!</h1>
    ) : (
      <div>
        <h1>YO! I'm the cake recipes books list, my brother.</h1>

        {this.props.books.map(book => {
          return <div key={book.id}>{book.volumeInfo.title}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.cakeRecipesBooks.loading,
    books: state.cakeRecipesBooks.books
  };
};

const mapDispatchToProps = {
  onSetBooks: setBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeRecipesBooksList);
