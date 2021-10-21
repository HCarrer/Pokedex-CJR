import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import './Searchbar.css'


const Search = () => {
    const [searchPoke, setSearchPoke] = useState('');

    return (
        <div className="searchBox">
            <input className="searchInput"type="text" name="" placeholder="Procure um pokemon..." onChange={
                (event) => {setSearchPoke(event.target.value)}}/>
            <button className="searchButton">
            <FaSearch/>
            </button>
        </div>
    )
}

export default Search