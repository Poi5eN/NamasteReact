import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

// CSS styles for the menu item details page
const itemDetailsStyles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    color: "#e67e22",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  description: {
    color: "#666",
    fontSize: "16px",
    marginBottom: "20px",
  },
  rating: {
    color: "#f1c40f",
    fontSize: "16px",
    marginBottom: "10px",
  },
  category: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  },
  vegStatus: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  veg: {
    color: "#27ae60",
  },
  nonVeg: {
    color: "#c0392b",
  },
  ingredients: {
    marginTop: "20px",
  },
  ingredientsTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  ingredientsList: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  ingredientsItem: {
    fontSize: "14px",
    color: "#666",
  },
};

const MenuItemDetails = () => {
  const [itemInfo, setItemInfo] = useState(null);
  const [restaurantName, setRestaurantName] = useState("");
  const { resId, itemId } = useParams();

  useEffect(() => {
    // Find the restaurant and menu item based on resId and itemId
    const restaurant = resList.find((res) => res.data.id === resId);
    if (restaurant && restaurant.data.menu) {
      const allMenuItems = Object.values(restaurant.data.menu).flat();
      const item = allMenuItems.find((item) => item.id === itemId);
      setItemInfo(item);
      setRestaurantName(restaurant.data.name);
    }
  }, [resId, itemId]);

  if (itemInfo === null) {
    return (
      <div className="loading">
        <Shimmer />
      </div>
    );
  }

  return (
    <div style={itemDetailsStyles.container}>
      <div style={itemDetailsStyles.header}>
        <h1 style={itemDetailsStyles.title}>{itemInfo.name}</h1>
        <p>{restaurantName}</p>
      </div>
      <img
        src={itemInfo.image}
        alt={itemInfo.name}
        style={itemDetailsStyles.image}
        onError={(e) => {
          e.target.src =
            "data:image/svg+xml,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20fill%3D%22%23cccccc%22%20width%3D%22400%22%20height%3D%22400%22/%3E%3Ctext%20x%3D%22200%22%20y%3D%22200%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666%22%20font-family%3D%22Arial%2C%20sans-serif%22%3EImage%20Not%20Available%3C/text%3E%3C/svg%3E";
        }}
      />
      <p style={itemDetailsStyles.price}>₹{itemInfo.price}</p>
      <p style={itemDetailsStyles.description}>{itemInfo.description}</p>
      <p style={itemDetailsStyles.rating}>Rating: {itemInfo.rating} ⭐</p>
      <p style={itemDetailsStyles.category}>Category: {itemInfo.category}</p>
      <p
        style={
          itemInfo.isVeg
            ? { ...itemDetailsStyles.vegStatus, ...itemDetailsStyles.veg }
            : { ...itemDetailsStyles.vegStatus, ...itemDetailsStyles.nonVeg }
        }
      >
        {itemInfo.isVeg ? "Vegetarian" : "Non-Vegetarian"}
      </p>
      <div style={itemDetailsStyles.ingredients}>
        <h3 style={itemDetailsStyles.ingredientsTitle}>Ingredients</h3>
        <ul style={itemDetailsStyles.ingredientsList}>
          {itemInfo.ingredients.map((ingredient, idx) => (
            <li key={idx} style={itemDetailsStyles.ingredientsItem}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuItemDetails;