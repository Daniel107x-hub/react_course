import React from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
function App() {
    const handleSubmit = (term) => {
        console.log(`Search ${term}`);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList/>
        </div>
    )
}

export default App