import React, { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
  const {count, incrementCount} = useContext(BooksContext);

  const renderedBooks = books.map((book) => (
    <BookShow
      book={book}
      key={book.id}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
  return( 
    <div className="book-list">
      <button onClick={incrementCount}></button>
      {count}{renderedBooks}
    </div>
  );
}

export default BookList;
