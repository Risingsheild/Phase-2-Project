import React, {useState} from "react"

function SearchBar({onSearch}) {
     const [search, setSearch] = useState("")
        
        function handleSubmit(e) {
            e.preventDefualt()
            onSearch(search)
        }
    return ( 
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="Search a Movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchBar