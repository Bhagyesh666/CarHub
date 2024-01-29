"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
    const [Manufacturer, setManufacturer] = useState('')
    const handleSearch = () => {}
  return (
   <form className="Searchbar" onSubmit={handleSearch}>
    <div className="Searchbar__item">
        <SearchManufacturer 
        manufacturer={Manufacturer}
        setmanufacturer={setManufacturer}
        
        />

    </div>

   </form>
  )
}

export default SearchBar
