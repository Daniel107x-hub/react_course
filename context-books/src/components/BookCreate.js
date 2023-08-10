import React, {useState} from 'react'
import './BookCreate.css';

function BookCreate() {
    const [title, setTitle] = useState("");
    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }
    const handleFormSubmit = () => {
        console.log("Creating book: " + title);
    }
    return (
        <section className="book-create">
            <h1 className='title'>Add a book</h1>
            <form action="" onSubmit={handleFormSubmit}>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" value={title} onChange={handleTitleChange}/>
                <button type='submit'>Create!</button>
            </form>
        </section>
    )
}

export default BookCreate