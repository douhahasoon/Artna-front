
import React, { useState } from 'react'
import "./search.css"

export default function Search({ placeholder, data }) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    < div className="search lg:inline-block hidden" >
      <div className='searchInputs '>
        <input
          type="text"
          id="header-search"
          placeholder={placeholder}
          name="s"
          value={wordEntered}
          onChange={handleFilter}
        /><div className='searchicon'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>

        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult ">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.first_name} </p>
              </a>
            );
          })}
        </div>

      )}








    </div >
  )
}
