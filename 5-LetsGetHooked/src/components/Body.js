import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


import resList from "../utils/mockData"; // Assuming you have a mockData.js file with resList exported


const Body = () => {
// State Variable(Local State)
const [listOfRestaurants, setListOfRestaurants] = useState(resList);


// Normal JS Variable
// let listOfRestaurantsJS = [
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "12345",
//       name: "The Great Indian Restaurant",
//       uuid: "abcde-12345-fghij-67890",
//       city: "Mumbai",
//       area: "Andheri",
//       totalRatingsString: "1000+ ratings",
//       avgRating: 4.5,
//       cloudinaryImageId:
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//       cuisines: ["Indian", "North Indian"],
//       tags: [],
//       price: 50000,
//       costForTwoString: "$500 for two",
//       deliveryTime: 30,
//     },
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "12346",
//       name: "Spice Haven",
//       uuid: "bcdef-23456-ghijk-78901",
//       city: "Mumbai",
//       area: "Bandra",
//       totalRatingsString: "800+ ratings",
//       avgRating: 3.5,
//       cloudinaryImageId:
//         "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
//       cuisines: ["Indian", "Mughlai"],
//       tags: [],
//       price: 60000,
//       costForTwoString: "$600 for two",
//       deliveryTime: 28,
//     },
//   },
// ];


  return (
    <main className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Logic to filter top rated restaurants
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.data.avgRating >= 4.0;
            });
            setListOfRestaurants(filteredList);
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
        <input type="text" placeholder="Search for restaurants..." />
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resObj={restaurant.data} />
        ))}
          {/* <RestaurantCard key={restaurant.data.id} resObj={restaurant.data} />
        ))} */}
      </div>
    </main>
  );
};

export default Body;
