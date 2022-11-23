import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchBar() {
  const [dataBeers, setDataBeers] = useState([]);

  const [selectedBeer, setSelectedBeer] = useState("");

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDataBeers(response.data));
  }, []);

  return (
    <div>
      <div className="w-16 md:w-full">
        <input
          list="beers"
          name="beers-choice"
          type="search"
          placeholder="Search a beer"
          className="h-8 w-full   rounded-md  "
          onChange={(e) => {
            setSelectedBeer(e.target.value);
          }}
        />
        <div className="flex bg-backpink border-4 border-black rounded-md z-40 flex-col absolute w-28 md:w-[252px] md:ml-0 ml-[-30px] h-60 overflow-scroll ">
          {dataBeers.length > 0 &&
            dataBeers
              .filter((item) => item.name.toLowerCase().includes(selectedBeer))
              .map((beer) => (
                <Link to={`/beers/${beer.id}`}>
                  <span
                    className="text-black w-full text-left text-ellipsis hover:bg-slate-400 px-2 cursor-pointer "
                    value={beer.id}
                  >
                    {beer.name}
                  </span>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
