import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/useBooksContext";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
