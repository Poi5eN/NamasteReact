import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  console.log("Body Renders");

  if (listOfRestaurants.length === 0) {
    return (
      <div className="loading">
        <Shimmer />
      </div>
    );
  }

  return (
    <main className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating >= 4.0
            );
            setListOfRestaurants(filteredList);
            setFilteredRestaurants(filteredList);

            console.log("Filtered top rated restaurants: ", filteredList);
          }}
          aria-label="Filter top rated restaurants"
          title="Filter top rated"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 4h18v2H3V4zm4 6h10v2H7v-2zm2 6h6v2H9v-2z" />
          </svg>
          <span>Top Rated</span>
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            const searchValue = e.target.value;
            setSearchText(searchValue);

            const filtered = listOfRestaurants.filter((restaurant) =>
              restaurant.data.name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        />
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
            className="restaurant-link"
          >
            <RestaurantCard resObj={restaurant.data} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;