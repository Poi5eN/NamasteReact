import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
* - RestaurantCard
    - Img
    - Name of Res, Star Rating, cuisine, delivery time
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12345",
      name: "The Great Indian Restaurant",
      uuid: "abcde-12345-fghij-67890",
      city: "Mumbai",
      area: "Andheri",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      cuisines: ["Indian", "North Indian"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "$500 for two",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 mins",
      lastMileTravel: 4.5,
      price: 250,
      slugs: { restaurant: "the-great-indian-restaurant-andheri" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12346",
      name: "Spice Haven",
      uuid: "bcdef-23456-ghijk-78901",
      city: "Mumbai",
      area: "Bandra",
      totalRatingsString: "800+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      cuisines: ["Indian", "Mughlai"],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "$600 for two",
      deliveryTime: 28,
      minDeliveryTime: 23,
      maxDeliveryTime: 33,
      slaString: "23-33 mins",
      lastMileTravel: 5.0,
      price: 300,
      slugs: { restaurant: "spice-haven-bandra" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12347",
      name: "Pizza Delight",
      uuid: "cdefg-34567-hijkl-89012",
      city: "Mumbai",
      area: "Juhu",
      totalRatingsString: "1200+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1512054502232-10a0a035d672",
      cuisines: ["Italian", "Pizza"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "$400 for two",
      deliveryTime: 25,
      minDeliveryTime: 20,
      maxDeliveryTime: 30,
      slaString: "20-30 mins",
      lastMileTravel: 3.8,
      price: 200,
      slugs: { restaurant: "pizza-delight-juhu" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12348",
      name: "Sushi World",
      uuid: "defgh-45678-ijkml-90123",
      city: "Mumbai",
      area: "Colaba",
      totalRatingsString: "600+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1579871494447-1378c27c170f",
      cuisines: ["Japanese", "Sushi"],
      tags: [],
      costForTwo: 80000,
      costForTwoString: "$800 for two",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 mins",
      lastMileTravel: 6.2,
      price: 400,
      slugs: { restaurant: "sushi-world-colaba" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12349",
      name: "Burger Bonanza",
      uuid: "efghi-56789-jklmn-01234",
      city: "Mumbai",
      area: "Worli",
      totalRatingsString: "900+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1568901341344-653bf5e0a66f",
      cuisines: ["American", "Burgers"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "$350 for two",
      deliveryTime: 27,
      minDeliveryTime: 22,
      maxDeliveryTime: 32,
      slaString: "22-32 mins",
      lastMileTravel: 4.0,
      price: 180,
      slugs: { restaurant: "burger-bonanza-worli" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12350",
      name: "Taco Fiesta",
      uuid: "fghij-67890-klmno-12345",
      city: "Mumbai",
      area: "Powai",
      totalRatingsString: "700+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1551504734-5b93556e3db3",
      cuisines: ["Mexican", "Tacos"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "$450 for two",
      deliveryTime: 32,
      minDeliveryTime: 27,
      maxDeliveryTime: 37,
      slaString: "27-37 mins",
      lastMileTravel: 5.5,
      price: 220,
      slugs: { restaurant: "taco-fiesta-powai" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12351",
      name: "Pasta Paradise",
      uuid: "ghijk-78901-lmnop-23456",
      city: "Mumbai",
      area: "Malad",
      totalRatingsString: "1100+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      cuisines: ["Italian", "Pasta"],
      tags: [],
      costForTwo: 55000,
      costForTwoString: "$550 for two",
      deliveryTime: 29,
      minDeliveryTime: 24,
      maxDeliveryTime: 34,
      slaString: "24-34 mins",
      lastMileTravel: 4.8,
      price: 270,
      slugs: { restaurant: "pasta-paradise-malad" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12352",
      name: "Dimsum Delight",
      uuid: "hijkl-89012-mnopq-34567",
      city: "Mumbai",
      area: "Goregaon",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1583394838336-803216a2f9a2",
      cuisines: ["Chinese", "Dimsum"],
      tags: [],
      costForTwo: 70000,
      costForTwoString: "$700 for two",
      deliveryTime: 33,
      minDeliveryTime: 28,
      maxDeliveryTime: 38,
      slaString: "28-38 mins",
      lastMileTravel: 6.0,
      price: 350,
      slugs: { restaurant: "dimsum-delight-goregaon" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12353",
      name: "Curry Corner",
      uuid: "ijklm-90123-nopqr-45678",
      city: "Mumbai",
      area: "Kandivali",
      totalRatingsString: "950+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1592924351719-8a8a0b1e00a0",
      cuisines: ["Indian", "South Indian"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "$400 for two",
      deliveryTime: 26,
      minDeliveryTime: 21,
      maxDeliveryTime: 31,
      slaString: "21-31 mins",
      lastMileTravel: 4.2,
      price: 210,
      slugs: { restaurant: "curry-corner-kandivali" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12354",
      name: "BBQ Nation",
      uuid: "jklmn-01234-opqrs-56789",
      city: "Mumbai",
      area: "Vile Parle",
      totalRatingsString: "1300+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1555939594-58d7cb2e259b",
      cuisines: ["Barbecue", "Grill"],
      tags: [],
      costForTwo: 75000,
      costForTwoString: "$750 for two",
      deliveryTime: 34,
      minDeliveryTime: 29,
      maxDeliveryTime: 39,
      slaString: "29-39 mins",
      lastMileTravel: 6.5,
      price: 380,
      slugs: { restaurant: "bbq-nation-vile-parle" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12355",
      name: "Noodle Nirvana",
      uuid: "klmno-12345-pqrst-67890",
      city: "Mumbai",
      area: "Chembur",
      totalRatingsString: "850+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1569718212165-332a529f6670",
      cuisines: ["Chinese", "Noodles"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "$500 for two",
      deliveryTime: 31,
      minDeliveryTime: 26,
      maxDeliveryTime: 36,
      slaString: "26-36 mins",
      lastMileTravel: 5.3,
      price: 260,
      slugs: { restaurant: "noodle-nirvana-chembur" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12356",
      name: "Waffle Wonders",
      uuid: "lmnop-23456-qrstu-78901",
      city: "Mumbai",
      area: "Santacruz",
      totalRatingsString: "650+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
      cuisines: ["Desserts", "Waffles"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "$300 for two",
      deliveryTime: 24,
      minDeliveryTime: 19,
      maxDeliveryTime: 29,
      slaString: "19-29 mins",
      lastMileTravel: 3.5,
      price: 150,
      slugs: { restaurant: "waffle-wonders-santacruz" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12357",
      name: "Kebab Kingdom",
      uuid: "mnopq-34567-rstuv-89012",
      city: "Mumbai",
      area: "Dadar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1601050690597-df3f0e2d9f79",
      cuisines: ["Indian", "Kebabs"],
      tags: [],
      costForTwo: 65000,
      costForTwoString: "$650 for two",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 mins",
      lastMileTravel: 4.7,
      price: 320,
      slugs: { restaurant: "kebab-kingdom-dadar" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12358",
      name: "Salad Stop",
      uuid: "nopqr-45678-stuvw-90123",
      city: "Mumbai",
      area: "Lower Parel",
      totalRatingsString: "750+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      cuisines: ["Healthy", "Salads"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "$450 for two",
      deliveryTime: 28,
      minDeliveryTime: 23,
      maxDeliveryTime: 33,
      slaString: "23-33 mins",
      lastMileTravel: 4.3,
      price: 230,
      slugs: { restaurant: "salad-stop-lower-patel" },
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12359",
      name: "The Coastal Catch",
      uuid: "opqrs-56789-tuvwx-01234",
      city: "Mumbai",
      area: "Versova",
      totalRatingsString: "950+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1606851185329-b4b1c2b09086",
      cuisines: ["Seafood", "Coastal"],
      tags: [],
      costForTwo: 70000,
      costForTwoString: "$700 for two",
      deliveryTime: 32,
      minDeliveryTime: 27,
      maxDeliveryTime: 37,
      slaString: "27-37 mins",
      lastMileTravel: 5.7,
      price: 350,
      slugs: { restaurant: "the-coastal-catch-versova" },
    },
  },
];

const styledCard = {
  backgroundColor: "#f8f8f8",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "200px",
  fontFamily: "Arial, sans-serif",
  color: "#333",
  transition: "transform 0.2s",
  cursor: "pointer",
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-icon-isolated-black-background-simple-vector-logo-food-icon-isolated-black-background-164144307.jpg"
          alt="Logo"
        />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

// const RestaurantCard = ({ resName, rating, cuisine, deliveryTime }) => {
//   console.log("Rendering RestaurantCard for:", resName, "Rating:", rating, "Cuisine:", cuisine, "Delivery Time:", deliveryTime);

const RestaurantCard = ({ resObj }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    totalRatingsString,
    deliveryTime,
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
        <p className="restaurant-price">Approx. ₹{price}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <main className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
      </div>
      <div className="restaurant-container">
        {/* <RestaurantCard
          resName="The Great Indian Restaurant"
          rating="4.5"
          cuisine="Indian"
          deliveryTime="30"
        /> */}

        {/* <RestaurantCard
          resName={resObj.data.name}
          rating={resObj.data.totalRatingsString}
          cuisine={resObj.data.cuisines.join(", ")}
          deliveryTime={resObj.data.deliveryTime}
        /> */}

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resObj={restaurant.data} />
        ))}
      </div>
    </main>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
