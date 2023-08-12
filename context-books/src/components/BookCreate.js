import React, {useState} from 'react'

function BookCreate({onCreate}) {
    const [title, setTitle] = useState("");
    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle('');
    }
    return (
        <div className="book-create">
            <h3 className='title'>Add a book</h3>
            <form action="" onSubmit={handleFormSubmit}>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" value={title} onChange={handleTitleChange} className='input'/>
                <button type='submit' className='button'>Create!</button>
            </form>
        </div>
    )
}

export default BookCreate