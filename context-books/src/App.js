import React, { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async() => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title
    });
    setBooks(prev => [...prev, response.data]);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title
    });
    const updatedBooks = books.map((book) => {
      if (book.id !== id) return book;
      return { ...book, ...response.data };
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
