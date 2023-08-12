import React, { useState } from "react";

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
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
