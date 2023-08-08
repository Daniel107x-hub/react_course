import React, {useState} from 'react'

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState("");

    const handleTermChange = (e) => {
        const value = e.target.value;
        setTerm(value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        onSubmit(term);
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" onChange={handleTermChange} value={term}/>
            </form>
        </div>
    )
}

export default SearchBar