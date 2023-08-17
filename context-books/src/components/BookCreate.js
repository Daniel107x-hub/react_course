import React, { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);
  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3 className="title">Add a book</h3>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={handleTitleChange}
          className="input"
        />
        <button type="submit" className="button">
          Create!
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
