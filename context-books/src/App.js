import React, {useState} from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, {title: title}]);
  }

  return (
    <div className='app'>
      {books.length}
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
