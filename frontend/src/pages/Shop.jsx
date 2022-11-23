import axios from "axios";
import React, { useEffect, useState } from "react";
import { typeBoxes } from "../utils/constants";
import BeersCards from "../components/shop/BeersCards";
import Loader from "../components/shop/Loader";

function Shop() {
  const [selectedCheckRadio, setSelectedCheckRadio] = useState();
  const [dataBeer, setDataBeer] = useState([]);
  const [foodPairing, setFoodPairing] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1800);
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDataBeer(response.data));
  }, []);

  const checkIfFoodPairingMatch = (food, value) => {
    return food.toLowerCase().includes(value.toLowerCase());
  };

  const handleSorting = (beer) => {
    if (selectedCheckRadio === "% alcohol (ascending)") {
      return beer.sort((a, b) => a.abv - b.abv);
    }
    if (selectedCheckRadio === "% alcohol (descending)") {
      return beer.sort((a, b) => b.abv - a.abv);
    }
    if (selectedCheckRadio === "price (ascending)") {
      return beer.sort((a, b) => a.target_fg - b.target_fg);
    }
    if (selectedCheckRadio === "price (descending)") {
      return beer.sort((a, b) => b.target_fg - a.target_fg);
    }
    return beer;
  };

  return (
    <div className="bg-backcolor pb-2">
      <div className=" w-full bg-backpink flex justify-around items-center h-10  ">
        <select
          onChange={(e) => setSelectedCheckRadio(e.target.value)}
          className=" w-40 rounded h-6 md:w-60"
        >
          {typeBoxes.map((box) => {
            return (
              <option key={box} value={box}>
                {box}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder=" 🔍 Food pairing with ..."
          className="w-40 rounded h-6 md:w-60"
          maxLength="50"
          onChange={(e) => setFoodPairing(e.target.value)}
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      {loader ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <ul className="flex flex-row flex-wrap justify-center	 gap-y-9  gap-x-6 my-4">
          {dataBeer.length &&
            handleSorting(dataBeer)
              .filter(
                (beer) =>
                  beer.food_pairing.filter((item) =>
                    checkIfFoodPairingMatch(item, foodPairing)
                  ).length > 0
              )
              .map((beer, i) => (
                <BeersCards
                  key={beer.id}
                  beer={beer}
                  isActive={isActive}
                  i={i}
                />
              ))}
        </ul>
      )}
    </div>
  );
}

export default Shop;
