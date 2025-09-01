import { data } from "../utils/data"
import { useState } from "react"

const Search = ({originalData, setFreshList}) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const searchedList = originalData
                    .filter((res)=>res.info.name.toLowerCase().trim().includes(searchText.toLowerCase().trim()) || res.info.cuisines
                    .some((cuisine) => cuisine.toLowerCase().trim().includes(searchText.toLowerCase().trim())
                )
            )
            searchedList.length === 0 ? (alert("No Restaurant Found"), setSearchText("")): setFreshList(searchedList);
    }
    return (
        <>
            <input 
                type="text" 
                placeholder="Search for Restraunt and Food" 
                value={searchText} 
                onChange={(e)=> {setSearchText(e.target.value)}}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSearch()}}
            />
            <button className="search-btn, filter" onClick={handleSearch}>
                search
            </button>
        </>
    )
}
export default Search;