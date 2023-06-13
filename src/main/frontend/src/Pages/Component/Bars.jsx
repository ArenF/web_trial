import { useState } from "react";

export const SearchBar = ({setInput}) => {

    const getValue = (e) => {
        setInput(e.target.value.toLowerCase());
    };

    return (
        <div className="search-bar">
            <input onChange={getValue} className="search" placeholder="Search.." type="text" />
        </div> 
    );
};