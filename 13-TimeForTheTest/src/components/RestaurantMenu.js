import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();

  if (resInfo === null) {
    return (
      <div className="loading">
        <Shimmer />
      </div>
    );
  }

  const menuCategories = resInfo.menu ? Object.keys(resInfo.menu) : [];

  return (
    <div style={menuStyles.container}>
      <div style={menuStyles.header}>
        <h1>{resInfo.name}</h1>
        <p>{resInfo.description}</p>
        <p>{resInfo.address} | {resInfo.phone}</p>
      </div>
      {menuCategories.length > 0 ? (
        menuCategories.map((category) => (
          <div key={category} style={menuStyles.category}>
            <h2 style={menuStyles.categoryTitle}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            {resInfo.menu[category].map((item) => (
              <Link
                to={`/restaurant/${resInfo.id}/item/${item.id}`}
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={menuStyles.menuItem}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      menuStyles.menuItemHover.transform)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={menuStyles.itemImage}
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20fill%3D%22%23cccccc%22%20width%3D%22100%22%20height%3D%22100%22/%3E%3Ctext%20x%3D%2250%22%20y%3D%2250%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666%22%20font-family%3D%22Arial%2C%20sans-serif%22%3EImage%20Not%20Available%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div style={menuStyles.itemDetails}>
                    <h3 style={menuStyles.itemName}>{item.name}</h3>
                    <p style={menuStyles.itemPrice}>₹{item.price}</p>
                    <p style={menuStyles.itemDescription}>{item.description}</p>
                    <p style={item.isVeg ? menuStyles.itemVeg : menuStyles.itemNonVeg}>
                      {item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))
      ) : (
        <p>No menu available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
