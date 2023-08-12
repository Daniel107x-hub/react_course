import React, { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit((edit) => !edit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit book={book} onEdit={handleSubmit} />;

  return (
    <div className="book-show">
      <div className="actions">
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
      </div>
      {content}
    </div>
  );
}

export default BookShow;
