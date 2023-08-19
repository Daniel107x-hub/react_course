import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  };

  return (
    <form action="" onSubmit={handleUpdate} className="book-edit">
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        className="input"
        onChange={handleTitleChange}
      />
      <button type="submit" className="button is-primary">
        Submit
      </button>
    </form>
  );
}

export default BookEdit;
