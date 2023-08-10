import React, {useState} from 'react';
import BookCreate from './components/BookCreate';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className='app'>
      <BookCreate/>
    </div>
  );
}

export default App;
