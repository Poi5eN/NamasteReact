const RestaurantCard = ({ resObj }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    totalRatingsString,
    deliveryTime,
    avgRating,
    price,
  } = resObj;

  const placeholderImg =
  "data:image/svg+xml,%3Csvg%20width%3D%22250%22%20height%3D%22160%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20fill%3D%22%23cccccc%22%20width%3D%22250%22%20height%3D%22160%22/%3E%3Ctext%20x%3D%22125%22%20y%3D%2280%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666%22%20font-family%3D%22Arial%2C%20sans-serif%22%3EImage%20Not%20Available%3C/text%3E%3C/svg%3E";


  return (
    <div className="restaurant-card">
      <img
        src={cloudinaryImageId}
        alt={name}
        className="restaurant-image"
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src = placeholderImg; // set placeholder
        }}
      />

      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-rating">⭐ {totalRatingsString}</p>
        <div className="cuisine-badges">
          {cuisines.map((cuisine, idx) => (
            <span key={idx} className="badge">
              {cuisine}
            </span>
          ))}
        </div>
        <p className="restaurant-delivery-time">🕒 {deliveryTime} mins</p>
        <p className="restaurant-avg-rating">
          {avgRating ? `Avg Rating: ${avgRating}` : "No Ratings Yet"}
        </p>
        <p className="restaurant-price">Approx. ₹{price}</p>
      </div>
    </div>
  );
};


export default RestaurantCard;