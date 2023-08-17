import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById, editBookById } = useContext(BooksContext);
  const handleDelete = () => {
    deleteBookById(book.id);
  };

  const handleEdit = () => {
    setShowEdit((edit) => !edit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    editBookById(id, title);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit book={book} onEdit={handleSubmit} />;

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
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
