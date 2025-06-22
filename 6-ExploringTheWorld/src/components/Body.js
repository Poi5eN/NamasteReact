import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import resList from "../utils/mockData"; // Assuming you have a mockData.js file with resList exported
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState(""); // State to hold the search text
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList); // State to hold the filtered restaurants

  // useEffect(() => {
  //   // This effect runs once when the component mounts
  //   // console.log("UseEffect Called");
  //   fetchData();
  // }, []); // Empty dependency array means this effect runs only once

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  // const fetchData = async () => {
  //   const data = await fetch(
  //   "https://corsproxy.io/?" +
  //     encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING")
  // );

  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  //   // console.log("List of Restaurants: ", listOfRestaurants);
  // }

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
            // Logic to filter top rated restaurants
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating >= 4.0
            );
            setListOfRestaurants(filteredList);
            setFilteredRestaurants(filteredList);

            console.log("Filtered top rated restaurants: ", filteredList);

            // listOfRestaurants = listOfRestaurants.filter((restaurant) => {
            //   return restaurant.data.avgRating >= 4.0;
            // });
            // console.log("Filtered top rated restaurants: ", listOfRestaurants);
          }}
          aria-label="Filter top rated restaurants"
          title="Filter top rated"
        >
          {/* Sleek funnel icon */}
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
          <RestaurantCard key={restaurant.data.id} resObj={restaurant.data} />
        ))}
        {/* <RestaurantCard key={restaurant.data.id} resObj={restaurant.data} />
        ))} */}
      </div>
    </main>
  );
};

export default Body;
