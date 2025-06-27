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
      tags: ["Vegetarian", "Spicy"],
      costForTwo: 50000,
      costForTwoString: "$500 for two",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 mins",
      lastMileTravel: 4.5,
      price: 250,
      slugs: { restaurant: "the-great-indian-restaurant-andheri" },
      avgRating: 4.3,
      description: "Authentic Indian cuisine with a modern twist, offering a variety of North Indian delicacies.",
      address: "Shop 12, Andheri West, Mumbai, Maharashtra 400053",
      phone: "+91 9876543210",
      menu: {
        recommended: [
          {
            id: "m1",
            name: "Butter Chicken",
            price: 350,
            description: "Tender chicken cooked in a rich tomato and butter sauce.",
            image: "https://images.unsplash.com/photo-1603894581498-4f0e2e8f4d1f",
            category: "Main Course",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"]
          },
          {
            id: "m2",
            name: "Paneer Tikka",
            price: 280,
            description: "Marinated paneer cubes grilled to perfection.",
            image: "https://images.unsplash.com/photo-1599493080733-4d43e15b7d1f",
            category: "Starters",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Paneer", "Yogurt", "Spices"]
          }
        ],
        mainCourse: [
          {
            id: "m3",
            name: "Dal Makhani",
            price: 250,
            description: "Creamy black lentils slow-cooked with spices.",
            image: "https://images.unsplash.com/photo-1627037558426-7cc46e5a6cb5",
            category: "Main Course",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Black Lentils", "Butter", "Cream", "Spices"]
          }
        ],
        desserts: [
          {
            id: "m4",
            name: "Gulab Jamun",
            price: 100,
            description: "Soft milk dumplings soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1587318982549-297a25ce0f48",
            category: "Desserts",
            isVeg: true,
            rating: 4.6,
            ingredients: ["Milk Solids", "Sugar", "Cardamom"]
          }
        ]
      }
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
      tags: ["Non-Veg", "Rich"],
      costForTwo: 60000,
      costForTwoString: "$600 for two",
      deliveryTime: 28,
      minDeliveryTime: 23,
      maxDeliveryTime: 33,
      slaString: "23-33 mins",
      lastMileTravel: 5.0,
      price: 300,
      slugs: { restaurant: "spice-haven-bandra" },
      avgRating: 3.0,
      description: "A haven for Mughlai food lovers, serving rich and flavorful dishes.",
      address: "Plot 45, Bandra West, Mumbai, Maharashtra 400050",
      phone: "+91 8765432109",
      menu: {
        recommended: [
          {
            id: "m5",
            name: "Biryani",
            price: 400,
            description: "Fragrant rice layered with spiced meat.",
            image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec",
            category: "Main Course",
            isVeg: false,
            rating: 4.7,
            ingredients: ["Rice", "Meat", "Spices", "Saffron"]
          }
        ],
        starters: [
          {
            id: "m6",
            name: "Seekh Kebab",
            price: 320,
            description: "Minced meat skewers grilled over charcoal.",
            image: "https://images.unsplash.com/photo-1601050690597-df3f0e2d9f79",
            category: "Starters",
            isVeg: false,
            rating: 4.2,
            ingredients: ["Minced Meat", "Spices"]
          }
        ],
        mainCourse: [
          {
            id: "m7",
            name: "Rogan Josh",
            price: 380,
            description: "Aromatic lamb curry with Kashmiri spices.",
            image: "https://images.unsplash.com/photo-1631292798544-22b8a106a6e3",
            category: "Main Course",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Lamb", "Yogurt", "Spices"]
          }
        ]
      }
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
      tags: ["Fast Food", "Vegetarian"],
      costForTwo: 40000,
      costForTwoString: "$400 for two",
      deliveryTime: 25,
      minDeliveryTime: 20,
      maxDeliveryTime: 30,
      slaString: "20-30 mins",
      lastMileTravel: 3.8,
      price: 200,
      slugs: { restaurant: "pizza-delight-juhu" },
      avgRating: 3.5,
      description: "Freshly baked pizzas with a variety of toppings.",
      address: "Shop 8, Juhu Beach Road, Mumbai, Maharashtra 400049",
      phone: "+91 7654321098",
      menu: {
        recommended: [
          {
            id: "m8",
            name: "Margherita Pizza",
            price: 300,
            description: "Classic pizza with tomato, mozzarella, and basil.",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d013",
            category: "Pizza",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Tomato", "Mozzarella", "Basil"]
          }
        ],
        pizza: [
          {
            id: "m9",
            name: "Pepperoni Pizza",
            price: 350,
            description: "Pizza topped with spicy pepperoni slices.",
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
            category: "Pizza",
            isVeg: false,
            rating: 4.3,
            ingredients: ["Pepperoni", "Mozzarella", "Tomato"]
          }
        ],
        sides: [
          {
            id: "m10",
            name: "Garlic Bread",
            price: 120,
            description: "Toasted bread with garlic butter.",
            image: "https://images.unsplash.com/photo-1619536026933-7f7b3ac9a0a5",
            category: "Sides",
            isVeg: true,
            rating: 4.1,
            ingredients: ["Bread", "Garlic", "Butter"]
          }
        ]
      }
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
      tags: ["Seafood", "Healthy"],
      costForTwo: 80000,
      costForTwoString: "$800 for two",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 mins",
      lastMileTravel: 6.2,
      price: 400,
      slugs: { restaurant: "sushi-world-colaba" },
      avgRating: 4.7,
      description: "Fresh sushi and Japanese delicacies crafted by expert chefs.",
      address: "Gateway of India Road, Colaba, Mumbai, Maharashtra 400005",
      phone: "+91 6543210987",
      menu: {
        recommended: [
          {
            id: "m11",
            name: "California Roll",
            price: 450,
            description: "Sushi roll with crab, avocado, and cucumber.",
            image: "https://images.unsplash.com/photo-1580975133627-99e5f622a8b9",
            category: "Sushi",
            isVeg: false,
            rating: 4.6,
            ingredients: ["Crab", "Avocado", "Cucumber", "Rice"]
          }
        ],
        sushi: [
          {
            id: "m12",
            name: "Spicy Tuna Roll",
            price: 480,
            description: "Sushi roll with spicy tuna and seaweed.",
            image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
            category: "Sushi",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Tuna", "Spices", "Seaweed", "Rice"]
          }
        ],
        starters: [
          {
            id: "m13",
            name: "Miso Soup",
            price: 150,
            description: "Traditional Japanese soup with tofu and seaweed.",
            image: "https://images.unsplash.com/photo-1598379555592-3e2b1b56f3f7",
            category: "Starters",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Tofu", "Seaweed", "Miso"]
          }
        ]
      }
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
      tags: ["Fast Food", "Non-Veg"],
      costForTwo: 35000,
      costForTwoString: "$350 for two",
      deliveryTime: 27,
      minDeliveryTime: 22,
      maxDeliveryTime: 32,
      slaString: "22-32 mins",
      lastMileTravel: 4.0,
      price: 180,
      slugs: { restaurant: "burger-bonanza-worli" },
      avgRating: 2.2,
      description: "Juicy burgers with bold flavors and fresh ingredients.",
      address: "Worli Sea Face, Mumbai, Maharashtra 400030",
      phone: "+91 5432109876",
      menu: {
        recommended: [
          {
            id: "m14",
            name: "Classic Cheeseburger",
            price: 200,
            description: "Beef patty with cheese, lettuce, and tomato.",
            image: "https://images.unsplash.com/photo-1568901341344-653bf5e0a66f",
            category: "Burgers",
            isVeg: false,
            rating: 4.2,
            ingredients: ["Beef", "Cheese", "Lettuce", "Tomato"]
          }
        ],
        burgers: [
          {
            id: "m15",
            name: "Veggie Burger",
            price: 180,
            description: "Vegetable patty with fresh veggies.",
            image: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a3b",
            category: "Burgers",
            isVeg: true,
            rating: 4.0,
            ingredients: ["Vegetable Patty", "Lettuce", "Tomato"]
          }
        ],
        sides: [
          {
            id: "m16",
            name: "French Fries",
            price: 100,
            description: "Crispy golden fries.",
            image: "https://images.unsplash.com/photo-1576106843156-4e7b3b33d219",
            category: "Sides",
            isVeg: true,
            rating: 4.1,
            ingredients: ["Potatoes", "Oil"]
          }
        ]
      }
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
      totalRatingsString: "700+ ratings", // Fixed typo from 7700
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1551504734-5b93556e3db3",
      cuisines: ["Mexican", "Tacos"],
      tags: ["Spicy", "Fast Food"],
      costForTwo: 45000, // Normalized
      costForTwoString: "$450 for two",
      deliveryTime: 32,
      minDeliveryTime: 27,
      maxDeliveryTime: 37,
      slaString: "27-37 mins",
      lastMileTravel: 5.5,
      price: 220,
      slugs: { restaurant: "taco-fiesta-powai" },
      avgRating: 3.9,
      description: "Authentic Mexican tacos with vibrant flavors.",
      address: "Hiranandani, Powai, Mumbai, Maharashtra 400076",
      phone: "+91 4321098765",
      menu: {
        recommended: [
          {
            id: "m17",
            name: "Chicken Taco",
            price: 220,
            description: "Soft taco with grilled chicken and salsa.",
            image: "https://images.unsplash.com/photo-1551504734-5b93556e3db3",
            category: "Tacos",
            isVeg: false,
            rating: 4.3,
            ingredients: ["Chicken", "Tortilla", "Salsa"],
          },
        ],
        tacos: [
          {
            id: "m18",
            name: "Veggie Taco",
            price: 180,
            description: "Taco with beans, avocado, and salsa.",
            image: "https://images.unsplash.com/photo-1551504734-5b93556e3db3",
            category: "Tacos",
            isVeg: true,
            rating: 4.1,
            ingredients: ["Beans", "Avocado", "Salsa"],
          },
        ],
        sides: [
          {
            id: "m19",
            name: "Nachos",
            price: 160,
            description: "Crispy nachos with cheese and salsa.",
            image: "https://images.unsplash.com/photo-1611348376759-260f57b91c7e",
            category: "Sides",
            isVeg: true,
            rating: 4.2,
            ingredients: ["Corn Chips", "Cheese", "Salsa"],
          },
        ],
      },
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
        "https://images.com/photo-1600585154340-be6161a56a0",
      cuisines: ["Italian", "Pasta"],
      tags: ["Vegetarian", "Creamy"],
      costForTwo: 550,
      costForTwoString: "$550 for two",
      deliveryTime: 29,
      minDeliveryTime: 24,
      maxDeliveryTime: 34,
      slaString: "24-34 mins",
      lastMileTravel: 4.8,
      price: 270,
      slugs: { restaurant: "pasta-paradise-malad" },
      avgRating: 3.6,
      description: "Indulgent pasta dishes with rich Italian sauces.",
      address: "Malad West, Mumbai, Maharashtra 400064",
      phone: "+91 3210987654",
      menu: {
        recommended: [
          {
            id: "m20",
            name: "Pasta Alfredo",
            price: 320,
            description: "Creamy Alfredo sauce with parmesan.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56",
            category: "Pasta",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Pasta", "Cream", "Parmesan"]
          }
        ],
        pasta: [
          {
            id: "m21",
            name: "Pasta Arrabbiata",
            price: 280,
            description: "Spicy tomato sauce pasta.",
            image: "https://images.unsplash.com/photo-159310834",
            category: "Pasta",
            isVeg: true,
            rating: 4.2,
            ingredients: ["Pasta", "Tomato", "Chili"]
          }
        ],
        sides: [
          {
            id: "m22",
            name: "Bruschetta",
            price: 140,
            description: "Toasted bread with tomato and basil.",
            image: "https://images.unsplash.com/photo-159404",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Bread", "Tomato", "Basil"]
          }
        ]
      }
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
        "https://images.unsplash.com/photo-1583394838336-acd5",
      cuisines: ["Chinese", "Dimsum"],
      tags: ["Steamed", "Healthy"],
      costForTwo: 700,
      costForTwoString: "$700 for two",
      deliveryTime: 33,
      minDeliveryTime: 28,
      maxDeliveryTime: 38,
      slaString: "28-38 mins",
      lastMileTravel: 6.0,
      price: 350,
      slugs: { restaurant: "dimsum-delight-goregaon" },
      avgRating: 4.1,
      description: "Steamed dimsums and Chinese delicacies.",
      address: "Goregaon East, Mumbai, Maharashtra 400063",
      phone: "+91 2109876543",
      menu: {
        recommended: [
          {
            id: "m23",
            name: "Chicken Dimsum",
            price: 300,
            description: "Steamed dumplings with chicken filling.",
            image: "https://images.unsplash.com/photo-158345",
            category: "Dimsum",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Chicken", "Flour", "Spices"]
          }
        ],
        dimsum: [
          {
            id: "m24",
            name: "Veg Dimsum",
            price: 280,
            description: "Steamed dumplings with vegetable filling.",
            image: "https://images.unsplash.com/photo-159292",
            category: "Dimsum",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Vegetables", "Flour", "Spices"]
          }
        ],
        starters: [
          {
            id: "m25",
            name: "Spring Rolls",
            price: 160,
            description: "Crispy rolls with vegetable filling.",
            image: "https://images.unsplash.com/photo-158339",
            category: "Starters",
            isVeg: true,
            rating: 4.2,
            ingredients: ["Vegetables", "Wrapper", "Oil"]
          }
        ]
      }
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
        "https://images.unsplash.com/photo-1592924351719-a8a0",
      cuisines: ["Indian", "South Indian"],
      tags: ["Vegetarian", "Spicy"],
      costForTwo: 400,
      costForTwoString: "$400 for two",
      deliveryTime: 26,
      minDeliveryTime: 21,
      maxDeliveryTime: 31,
      slaString: "21-31 mins",
      lastMileTravel: 4.2,
      price: 210,
      slugs: { restaurant: "curry-corner-kandivali" },
      avgRating: 4.4,
      description: "South Indian dishes with authentic flavors.",
      address: "Kandivali West, Mumbai, Maharashtra 400067",
      phone: "+91 0987654321",
      menu: {
        recommended: [
          {
            id: "m26",
            name: "Masala Dosa",
            price: 180,
            description: "Crispy dosa with potato filling.",
            image: "https://images.unsplash.com/photo-159292",
            category: "Dosa",
            isVeg: true,
            rating: 4.6,
            ingredients: ["Rice", "Potato", "Spices"]
          }
        ],
        dosa: [
          {
            id: "m27",
            name: "Mysore Masala Dosa",
            price: 200,
            description: "Dosa with spicy chutney and potato filling.",
            image: "https://images.unsplash.com/photo-159404",
            category: "Dosa",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Rice", "Potato", "Chutney"]
          }
        ],
        sides: [
          {
            id: "m28",
            name: "Sambar",
            price: 80,
            description: "Lentil stew with vegetables.",
            image: "https://images.unsplash.com/photo-159292",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Lentils", "Vegetables", "Spices"]
          }
        ]
      }
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
      tags: ["Non-Veg", "Spicy"],
      costForTwo: 750,
      costForTwoString: "$750 for two",
      deliveryTime: 34,
      minDeliveryTime: 29,
      maxDeliveryTime: 39,
      slaString: "29-39 mins",
      lastMileTravel: 6.5,
      price: 380,
      slugs: { restaurant: "bbq-nation-vile-parle" },
      avgRating: 3.8,
      description: "Grilled meats and barbecue specialties.",
      address: "Vile Parle West, Mumbai, Maharashtra 400056",
      phone: "+91 876543210",
      menu: {
        recommended: [
          {
            id: "m29",
            name: "Grilled Chicken",
            price: 400,
            description: "Juicy chicken grilled with spices.",
            image: "https://images.unsplash.com/photo-155593",
            category: "Grill",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Chicken", "Spices"]
          }
        ],
        grill: [
          {
            id: "m30",
            name: "Paneer Tikka",
            price: 300,
            description: "Grilled paneer with spices.",
            image: "https://images.unsplash.com/photo-159949",
            category: "Grill",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Paneer", "Spices"]
          }
        ],
        sides: [
          {
            id: "m31",
            name: "Corn on the Cob",
            price: 120,
            description: "Grilled corn with butter.",
            image: "https://images.unsplash.com/photo-159292",
            category: "Sides",
            isVeg: true,
            rating: 4.2,
            ingredients: ["Corn", "Butter"]
          }
        ]
      }
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
      tags: ["Spicy", "Fast Food"],
      costForTwo: 500,
      costForTwoString: "$500 for two",
      deliveryTime: 31,
      minDeliveryTime: 26,
      maxDeliveryTime: 36,
      slaString: "26-36 mins",
      lastMileTravel: 5.3,
      price: 260,
      slugs: { restaurant: "noodle-nirvana-chembur" },
      avgRating: 3.0,
      description: "Slurpy noodles with bold Chinese flavors.",
      address: "Chembur East, Mumbai, Maharashtra 400071",
      phone: "+91 765432109",
      menu: {
        recommended: [
          {
            id: "m32",
            name: "Hakka Noodles",
            price: 250,
            description: "Stir-fried noodles with vegetables.",
            image: "https://images.unsplash.com/photo-156971",
            category: "Noodles",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Noodles", "Vegetables", "Soy Sauce"]
          }
        ],
        noodles: [
          {
            id: "m33",
            name: "Chicken Noodles",
            price: 280,
            description: "Noodles with chicken and vegetables.",
            image: "https://images.unsplash.com/photo-156971",
            category: "Noodles",
            isVeg: false,
            rating: 4.3,
            ingredients: ["Noodles", "Chicken", "Vegetables"]
          }
        ],
        starters: [
          {
            id: "m34",
            name: "Manchurian",
            price: 200,
            description: "Crispy vegetable balls in soy sauce.",
            image: "https://images.unsplash.com/photo-158339",
            category: "Starters",
            isVeg: true,
            rating: 4.2,
            ingredients: ["Vegetables", "Soy Sauce"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12356",
      name: "Waffle Wonders",
      uuid: "lnopq-23456-qrstu-78901",
      city: "Mumbai",
      area: "Santacruz",
      totalRatingsString: "650+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
      cuisines: ["Desserts", "Waffles"],
      tags: ["Desserts", "Sweet"],
      costForTwo: 300,
      costForTwoString: "$300 for two",
      deliveryTime: 24,
      minDeliveryTime: 19,
      maxDeliveryTime: 29,
      slaString: "19-29 mins",
      lastMileTravel: 3.5,
      price: 150,
      slugs: { restaurant: "waffle-wonders-santacruz" },
      avgRating: 4.2,
      description: "Crispy waffles with sweet toppings.",
      address: "Santacruz West, Mumbai, Maharashtra 400054",
      phone: "+91 654321098",
      menu: {
        recommended: [
          {
            id: "m35",
            name: "Chocolate Waffle",
            price: 180,
            description: "Waffle with chocolate sauce.",
            image: "https://images.unsplash.com/photo-156237",
            category: "Waffle",
            isVeg: true,
            rating: 4.5,
            ingredients: ["Waffle", "Chocolate Sauce"]
          }
        ],
        waffle: [
          {
            id: "m36",
            name: "Strawberry Waffle",
            price: 200,
            description: "Waffle with fresh strawberries.",
            image: "https://images.unsplash.com/photo-156237",
            category: "Waffle",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Waffle", "Strawberries", "Cream"]
          }
        ],
        sides: [
          {
            id: "m37",
            name: "Ice Cream",
            price: 100,
            description: "Vanilla ice cream scoop.",
            image: "https://images.unsplash.com/photo-156000",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Milk", "Sugar", "Vanilla"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12357",
      name: "Kebab Kingdom",
      uuid: "mnopqr-34567-rstuv-89012",
      city: "Mumbai",
      area: "Dadar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1601050690597-df3f0e2d9f79",
      cuisines: ["Indian", "Kebabs"],
      tags: ["Non-Veg", "Spicy"],
      costForTwo: 65000, // Normalized to match other restaurants
      costForTwoString: "$650 for two",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 mins",
      lastMileTravel: 4.7,
      price: 320,
      slugs: { restaurant: "kebab-kingdom-dadar" },
      avgRating: 3.6,
      description: "Succulent kebabs grilled to perfection.",
      address: "Dadar West, Mumbai, Maharashtra 400028",
      phone: "+91 5432109876", // Fixed incomplete phone number
      menu: {
        recommended: [
          {
            id: "m38",
            name: "Chicken Tikka",
            price: 300, // Fixed price
            description: "Grilled chicken kebab with spices.",
            image: "https://images.unsplash.com/photo-1601050690597-df3f0e2d9f79",
            category: "Kebab",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Chicken", "Spices", "Yogurt"],
          },
        ],
        kebab: [
          {
            id: "m39",
            name: "Mutton Seekh Kebab", // Fixed typo in name
            price: 350, // Fixed price
            description: "Grilled minced mutton kebab.",
            image: "https://images.unsplash.com/photo-1601050690597-df3f0e2d9f79",
            category: "Kebab",
            isVeg: false,
            rating: 4.3,
            ingredients: ["Mutton", "Spices"],
          },
        ],
        sides: [
          {
            id: "m40",
            name: "Mint Chutney",
            price: 80,
            description: "Fresh mint chutney dip.",
            image: "https://images.unsplash.com/photo-1590874180935-1b6c72421f9f",
            category: "Sides",
            isVeg: true,
            rating: 4.2,
            ingredients: ["Mint", "Yogurt", "Spices"],
          },
        ],
      },
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
        "https://images.unsplash.com/photo-151262177087",
      cuisines: ["Healthy", "Salads"],
      tags: ["Vegetarian", "Healthy"],
      costForTwo: 450,
      costForTwoString: "$450 for two",
      deliveryTime: 28,
      minDeliveryTime: 23,
      maxDeliveryTime: 33,
      slaString: "23-33 mins",
      lastMileTravel: 4.3,
      price: 230,
      slugs: { restaurant: "salad-stop-lower-patel" },
      avgRating: 4.3,
      description: "Fresh and healthy meals for all.",
      address: "Lower Parel, Mumbai, Maharashtra 400013",
      phone: "+91 432109876",
      menu: {
        recommended: [
          {
            id: "m41",
            name: "Caesar Salad",
            price: 250,
            description: "Crisp romaine with Caesar dressing.",
            image: "https://images.unsplash.com/photo-151262",
            category: "Salad",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Romaine", "Croutons", "Caesar Dressing"]
          }
        ],
        salad: [
          {
            id: "m42",
            name: "Greek Salad",
            price: 280,
            description: "Feta, olives, and tomatoes with greens.",
            image: "https://images.unsplash.com/photo-151262",
            category: "Salad",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Feta", "Olives", "Tomato"]
          }
        ],
        sides: [
          {
            id: "m43",
            name: "Quinoa Bowl",
            price: 150,
            description: "Quinoa with veggies and dressing.",
            image: "https://images.unsplash.com/photo-151262",
            category: "Sides",
            isVeg: true,
            rating: 4.2,
            ingredients: ["Quinoa", "Vegetables", "Dressing"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12359", // Fixed ID from "Ty"
      name: "The Coastal Catch",
      uuid: "opqrs-56789-tuvwx-01234",
      city: "Mumbai", // Fixed typo
      area: "Versova", // Fixed typo
      totalRatingsString: "950+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1606851185329-b4b1c2b09086",
      cuisines: ["Seafood", "Coastal"],
      tags: ["Seafood", "Non-Veg"],
      costForTwo: 70000, // Normalized
      costForTwoString: "$700 for two",
      deliveryTime: 32,
      minDeliveryTime: 27,
      maxDeliveryTime: 37,
      slaString: "27-37 mins",
      lastMileTravel: 5.7,
      price: 350,
      slugs: { restaurant: "the-coastal-catch-versova" },
      avgRating: 3.5,
      description: "Fresh seafood with coastal flavors.",
      address: "Versova Beach, Mumbai, Maharashtra 400061",
      phone: "+91 3210987654",
      menu: {
        recommended: [
          {
            id: "m44",
            name: "Prawn Curry",
            price: 400,
            description: "Spicy prawn curry with rice.",
            image: "https://images.unsplash.com/photo-1606851185329-b4b1c2b09086",
            category: "Seafood", // Fixed typo
            isVeg: false,
            rating: 4.5,
            ingredients: ["Prawns", "Spices", "Rice"],
          },
        ],
        seafood: [
          {
            id: "m45",
            name: "Fish Fry",
            price: 350,
            description: "Crispy fried fish with spices.",
            image: "https://images.unsplash.com/photo-1606851185329-b4b1c2b09086",
            category: "Seafood",
            isVeg: false,
            rating: 4.3,
            ingredients: ["Fish", "Spices", "Oil"],
          },
        ],
        sides: [
          {
            id: "m46",
            name: "Crab Cakes",
            price: 200,
            description: "Crispy crab cakes with sauce.",
            image: "https://images.unsplash.com/photo-1606851185329-b4b1c2b09086",
            category: "Sides",
            isVeg: false,
            rating: 4.2,
            ingredients: ["Crab", "Bread Crumbs", "Spices"],
          },
        ],
      },
    },
  },
    // Adding 20 more to restaurants to make it dynamic
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12360",
      name: "Chaat Junction",
      uuid: "pqrst-67890-uvwxyz-12345",
      city: "Mumbai",
      area: "Borivali",
      totalRatingsString: "700+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-160621417",
      cuisines: ["Indian", "Street Food"],
      tags: ["Vegetarian", "Spicy"],
      costForTwo: 300,
      costForTwoString: "$300 for two",
      deliveryTime: 25,
      minDeliveryTime: 20,
      maxDeliveryTime: 30,
      slaString: "20-30 mins",
      lastMileTravel: 3.8,
      price: 150,
      slugs: { restaurant: "chaat-junction-borivali" },
      avgRating: 4.2,
      description: "Authentic Indian street food with a focus on chaat.",
      address: "Borivali West, Mumbai, Maharashtra 400092",
      phone: "+91 210987654",
      menu: {
        recommended: [
          {
            id: "m47",
            name: "Pani Puri",
            price: 80,
            description: "Crispy puris filled with spicy water.",
            image: "https://images.unsplash.com/photo-160621",
            category: "PChaat",
            isVeg: true,
            rating: 4.6,
            ingredients: ["Puri", "Tamarind", "Spices"]
          }
        ],
        chaat: [
          {
            id: "m48",
            name: "Sev Puri",
            price: 90,
            description: "Puris topped with sev and chutney.",
            image: "https://images.unsplash.com/photo-160621",
            category: "Chaat",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Puri", "Sev", "Chutney"]
          }
        ],
        sides: [
          {
            id: "m49",
            name: "Dahi Vada",
            price: 100,
            description: "Soft vadas in yogurt.",
            image: "https://images.unsplash.com/photo-160621",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Lentils", "Yogurt", "Spices"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12361",
      name: "The Biryani House",
      uuid: "qrstu-78901-vwxyz-23456",
      city: "Mumbai",
      area: "Kurla",
      totalRatingsString: "850+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-1569058242253",
      cuisines: ["Indian", "Biryani"],
      tags: ["Non-Veg", "Spicy"],
      costForTwo: 500,
      costForTwoString: "$500 for two",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 mins",
      lastMileTravel: 4.5,
      price: 250,
      slugs: { restaurant: "the-biryani-house-kurla" },
      avgRating: 4.3,
      description: "Flavorful biryanis with rich spices.",
      address: "Kurla West, Mumbai, Maharashtra 400070",
      phone: "+91 0987654321",
      menu: {
        recommended: [
          {
            id: "m50",
            name: "Chicken Biryani",
            price: 350,
            description: "Fragrant rice with chicken and spices.",
            image: "https://images.unsplash.com/photo-156905",
            category: "Biryani",
            isVeg: false,
            rating: 4.6,
            ingredients: ["Rice", "Chicken", "Spices"]
          }
        ],
        biryani: [
          {
            id: "m51",
            name: "Veg Biryani",
            price: 300,
            description: "Rice with vegetables and spices.",
            image: "https://images.unsplash.com/photo-156905",
            category: "Biryani",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Rice", "Spices", "Vegetables"]
          }
        ],
        sides: [
          {
            id: "m52",
            name: "Raita",
            price: 60,
            description: "Yogurt with cucumber.",
            image: "https://images.unsplash.com/photo-159087",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Yogurt", "Cucumber", "Spices"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12362",
      name: "Sushi Haven",
      uuid: "rstuv-89012-wxyab-34567",
      city: "Mumbai",
      area: "Andheri East",
      totalRatingsString: "600+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-1580975133627",
      cuisines: ["Japanese", "Sushi"],
      tags: ["Seafood", "Healthy"],
      costForTwo: 800,
      costForTwoString: "$800 for two",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 mins",
      lastMileTravel: 6.0,
      price: 400,
      slugs: { restaurant: "sushi-haven-andheri-east" },
      avgRating: 4.5,
      description: "Premium sushi with fresh ingredients.",
      address: "Andheri East, Mumbai, Maharashtra 400069",
      phone: "+91 210987654",
      menu: {
        recommended: [
          {
            id: "m53",
            name: "Nigiri Sushi",
            price: 450,
            description: "Fresh fish slices on rice.",
            image: "https://images.unsplash.com/photo-158097",
            category: "Sushi",
            isVeg: false,
            rating: 4.6,
            ingredients: ["Fish", "Rice", "Soy Sauce"]
          }
        ],
        sushi: [
          {
            id: "m54",
            name: "Tempura Roll",
            price: 400,
            description: "Sushi roll with tempura prawn.",
            image: "https://images.unsplash.com/photo-161114",
            category: "Sushi",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Prawn", "Rice", "Tempura"]
          }
        ],
        starters: [
          {
            id: "m55",
            name: "Edamame",
            price: 150,
            description: "Steamed edamame with salt.",
            image: "https://images.unsplash.com/photo-159837",
            category: "Starters",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Edamame", "Salt"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12363",
      name: "The Dessert Den",
      uuid: "stuvwxyz-90123-xyabc-45678",
      city: "Mumbai",
      area: "Bandra East",
      totalRatingsString: "750+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-156058",
      cuisines: ["Desserts", "Bakery"],
      tags: ["Sweet", "Desserts"],
      costForTwo: 400,
      costForTwoString: "$400 for two",
      deliveryTime: 28,
      minDeliveryTime: 23,
      maxDeliveryTime: 33,
      slaString: "23-33 mins",
      lastMileTravel: 4.3,
      price: 200,
      slugs: { restaurant: "the-dessert-den-bandra-east" },
      avgRating: 4.4,
      description: "Indulgent desserts and baked goods.",
      address: "Bandra East, Mumbai, Maharashtra 400051",
      phone: "+91 0987654321",
      menu: {
        recommended: [
          {
            id: "m56",
            name: "Chocolate Tart",
            price: 250,
            description: "Rich chocolate tart with crust.",
            image: "https://images.unsplash.com/photo-156058",
            category: "Dessert",
            isVeg: true,
            rating: 4.6,
            ingredients: ["Chocolate", "Flour", "Sugar"]
          }
        ],
        dessert: [
          {
            id: "m57",
            name: "Cheesecake",
            price: 300,
            description: "Creamy cheesecake with berry topping.",
            image: "https://images.unsplash.com/photo-156058",
            category: "Dessert",
            isVeg: true,
            rating: 4.5,
            ingredients: ["Cheese", "Sugar", "Berries"]
          }
        ],
        sides: [
          {
            id: "m58",
            name: "Brownie",
            price: 150,
            description: "Fudgy chocolate brownie.",
            image: "https://images.unsplash.com/photo-156058",
            category: "Sides",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Chocolate", "Flour", "Sugar"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12364",
      name: "The Kebab Corner",
      uuid: "tuvwxyz-01234-yzabc-56789",
      city: "Mumbai",
      area: "Powai",
      totalRatingsString: "900+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-160105069",
      cuisines: ["Indian", "Kebabs"],
      tags: ["Non-Veg", "Spicy"],
      costForTwo: 600,
      costForTwoString: "$600 for two",
      deliveryTime: 32,
      minDeliveryTime: 27,
      maxDeliveryTime: 37,
      slaString: "27-37 mins",
      lastMileTravel: 5.5,
      price: 300,
      slugs: { restaurant: "the-kebab-corner-powai" },
      avgRating: 4.3,
      description: "Juicy kebabs with bold Indian spices.",
      address: "Powai, Mumbai, Maharashtra 400076",
      phone: "+91 210987654",
      menu: {
        recommended: [
          {
            id: "m59",
            name: "Tandoori Chicken",
            price: 350,
            description: "Chicken marinated and grilled.",
            image: "https://images.unsplash.com/photo-160105",
            category: "Kebab",
            isVeg: false,
            rating: 4.6,
            ingredients: ["Chicken", "Yogurt", "Spices"]
          }
        ],
        kebab: [
          {
            id: "m60",
            name: "Paneer Kebab",
            price: 300,
            description: "Grilled paneer with spices.",
            image: "https://images.unsplash.com/photo-160105",
            category: "Kebab",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Paneer", "Spices", "Yogurt"]
          }
        ],
        sides: [
          {
            id: "m61",
            name: "Naan",
            price: 50,
            description: "Soft tandoori naan bread.",
            image: "https://images.unsplash.com/photo-160105",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Flour", "Yeast"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12365",
      name: "Pasta Palace",
      uuid: "uvwxyz-12345-zabcd-67890",
      city: "Mumbai",
      area: "Juhu",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-160058515",
      cuisines: ["Italian", "Pasta"],
      tags: ["Vegetarian", "Creamy"],
      costForTwo: 550,
      costForTwoString: "$550 for two",
      deliveryTime: 29,
      minDeliveryTime: 24,
      maxDeliveryTime: 34,
      slaString: "24-34 mins",
      lastMileTravel: 4.8,
      price: 270,
      slugs: { restaurant: "pasta-palace-juhu" },
      avgRating: 4.2,
      description: "Delicious pasta dishes with authentic Italian flavors.",
      address: "Juhu Beach Road, Mumbai, Maharashtra 400049",
      phone: "+91 0987654321",
      menu: {
        recommended: [
          {
            id: "m62",
            name: "Pasta Pesto",
            price: 320,
            description: "Pasta with basil pesto sauce.",
            image: "https://images.unsplash.com/photo-160058",
            category: "Pasta",
            isVeg: true,
            rating: 4.5,
            ingredients: ["Pasta", "Basil", "Pine Nuts"]
          }
        ],
        pasta: [
          {
            id: "m63",
            name: "Carbonara",
            price: 350,
            description: "Pasta with creamy bacon sauce.",
            image: "https://images.unsplash.com/photo-160058",
            category: "Pasta",
            isVeg: false,
            rating: 4.4,
            ingredients: ["Pasta", "Bacon", "Cream"]
          }
        ],
        sides: [
          {
            id: "m64",
            name: "Caesar Salad",
            price: 150,
            description: "Romaine with Caesar dressing.",
            image: "https://images.unsplash.com/photo-160058",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Romaine", "Croutons", "Dressing"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12368",
      name: "Tandoori Flames",
      uuid: "yzabcd-34567-bcde-78901",
      city: "Mumbai",
      area: "Malad",
      totalRatingsString: "950+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-160105069",
      cuisines: ["Indian", "Tandoori"],
      tags: ["Non-Veg", "Spicy"],
      costForTwo: 600,
      costForTwoString: "$600 for two",
      deliveryTime: 32,
      minDeliveryTime: 27,
      maxDeliveryTime: 37,
      slaString: "27-37 mins",
      lastMileTravel: 5.5,
      price: 300,
      slugs: { restaurant: "tandoori-flames-malad" },
      avgRating: 4.3,
      description: "Tandoori dishes with bold Indian spices.",
      address: "Malad West, Mumbai, Maharashtra 400064",
      phone: "+91 210987654",
      menu: {
        recommended: [
          {
            id: "m65",
            name: "Tandoori Chicken",
            price: 350,
            description: "Chicken marinated and grilled.",
            image: "https://images.unsplash.com/photo-160105",
            category: "Tandoori",
            isVeg: false,
            rating: 4.6,
            ingredients: ["Chicken", "Yogurt", "Spices"]
          }
        ],
        tandoori: [
          {
            id: "m66",
            name: "Paneer Tikka",
            price: 300,
            description: "Grilled paneer with spices.",
            image: "https://images.unsplash.com/photo-160105",
            category: "Tandoori",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Paneer", "Spices", "Yogurt"]
          }
        ],
        sides: [
          {
            id: "m67",
            name: "Naan",
            price: 50,
            description: "Soft tandoori naan bread.",
            image: "https://images.unsplash.com/photo-160105",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Flour", "Yeast"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12369",
      name: "The Curry House",
      uuid: "zabcde-45678-cdef-89012",
      city: "Mumbai",
      area: "Goregaon",
      totalRatingsString: "800+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-159292435",
      cuisines: ["Indian", "Curry"],
      tags: ["Vegetarian", "Spicy"],
      costForTwo: 500,
      costForTwoString: "$500 for two",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 mins",
      lastMileTravel: 4.8,
      price: 250,
      slugs: { restaurant: "the-curry-house-goregaon" },
      avgRating: 4.2,
      description: "Rich Indian curries with authentic flavors.",
      address: "Goregaon East, Mumbai, Maharashtra 400063",
      phone: "+91 0987654321",
      menu: {
        recommended: [
          {
            id: "m68",
            name: "Butter Chicken",
            price: 350,
            description: "Chicken in creamy tomato sauce.",
            image: "https://images.unsplash.com/photo-159292",
            category: "Curry",
            isVeg: false,
            rating: 4.6,
            ingredients: ["Chicken", "Tomato", "Cream"]
          }
        ],
        curry: [
          {
            id: "m69",
            name: "Paneer Butter Masala",
            price: 300,
            description: "Paneer in creamy tomato sauce.",
            image: "https://images.unsplash.com/photo-159292",
            category: "Curry",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Paneer", "Tomato", "Cream"]
          }
        ],
        sides: [
          {
            id: "m70",
            name: "Jeera Rice",
            price: 150,
            description: "Rice flavored with cumin.",
            image: "https://images.unsplash.com/photo-159292",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Rice", "Cumin"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12370",
      name: "The Pizza Place",
      uuid: "abcde-56789-defg-90123",
      city: "Mumbai",
      area: "Colaba",
      totalRatingsString: "1100+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-151205450",
      cuisines: ["Italian", "Pizza"],
      tags: ["Vegetarian", "Fast Food"],
      costForTwo: 450,
      costForTwoString: "$450 for two",
      deliveryTime: 28,
      minDeliveryTime: 23,
      maxDeliveryTime: 33,
      slaString: "23-33 mins",
      lastMileTravel: 4.3,
      price: 230,
      slugs: { restaurant: "the-pizza-place-colaba" },
      avgRating: 4.4,
      description: "Freshly baked pizzas with premium toppings.",
      address: "Colaba Causeway, Mumbai, Maharashtra 400005",
      phone: "+91 210987654",
      menu: {
        recommended: [
          {
            id: "m71",
            name: "Margherita Pizza",
            price: 300,
            description: "Classic pizza with tomato and mozzarella.",
            image: "https://images.unsplash.com/photo-151205",
            category: "Pizza",
            isVeg: true,
            rating: 4.5,
            ingredients: ["Tomato", "Mozzarella", "Basil"]
          }
        ],
        pizza: [
          {
            id: "m72",
            name: "BBQ Chicken Pizza",
            price: 350,
            description: "Pizza with BBQ chicken and onions.",
            image: "https://images.unsplash.com/photo-151205",
            category: "Pizza",
            isVeg: false,
            rating: 4.4,
            ingredients: ["Chicken", "BBQ Sauce", "Onions"]
          }
        ],
        sides: [
          {
            id: "m73",
            name: "Garlic Bread",
            price: 120,
            description: "Toasted bread with garlic butter.",
            image: "https://images.unsplash.com/photo-151205",
            category: "Sides",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Bread", "Garlic", "Butter"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12371",
      name: "The Sushi Spot",
      uuid: "bcdef-67890-efgh-01234",
      city: "Mumbai",
      area: "Bandra",
      totalRatingsString: "700+ ratings",
      cloudinaryImageId: "https://images.unsplash.com/photo-157987149",
      cuisines: ["Japanese", "Sushi"],
      tags: ["Seafood", "Healthy"],
      costForTwo: 800,
      costForTwoString: "$800 for two",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 mins",
      lastMileTravel: 6.0,
      price: 400,
      slugs: { restaurant: "the-sushi-spot-bandra" },
      avgRating: 4.5,
      description: "Fresh sushi crafted with premium ingredients.",
      address: "Bandra West, Mumbai, Maharashtra 400050",
      phone: "+91 0987654321",
      menu: {
        recommended: [
          {
            id: "m74",
            name: "Salmon Roll",
            price: 450,
            description: "Sushi roll with fresh salmon.",
            image: "https://images.unsplash.com/photo-157987",
            category: "Sushi",
            isVeg: false,
            rating: 4.6,
            ingredients: ["Salmon", "Rice", "Seaweed"]
          }
        ],
        sushi: [
          {
            id: "m75",
            name: "Avocado Roll",
            price: 400,
            description: "Sushi roll with avocado and cucumber.",
            image: "https://images.unsplash.com/photo-157987",
            category: "Sushi",
            isVeg: true,
            rating: 4.4,
            ingredients: ["Avocado", "Cucumber", "Rice"]
          }
        ],
        starters: [
          {
            id: "m76",
            name: "Miso Soup",
            price: 150,
            description: "Traditional Japanese soup with tofu.",
            image: "https://images.unsplash.com/photo-157987",
            category: "Starters",
            isVeg: true,
            rating: 4.3,
            ingredients: ["Tofu", "Miso", "Seaweed"]
          }
        ]
      }
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "12372",
      name: "The Coastal Catch",
      uuid: "opqrs-56789-tuvwx-01234",
      city: "Mumai",
      area: "VVersova",
      totalRatingsString: "950+ ratings",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1606851185329-b4b1c2b",
      cuisines: ["Seafood", "Coastal"],
      tags: ["Seafood", "Non-Veg"],
      costForTwo: 700,
      costForTwoString: "$700 for two",
      deliveryTime: 32,
      minDeliveryTime: 27,
      maxDeliveryTime: 37,
      slaString: "27-37 mins",
      lastMileTravel: 5.7,
      price: 350,
      slugs: { restaurant: "the-coastal-catch-versova" },
      avgRating: 3.5,
      description: "Fresh seafood with coastal flavors.",
      address: "Versova Beach, Mumbai, Maharashtra 400061",
      phone: "+91 321098765",
      menu: {
        recommended: [
          {
            id: "m44",
            name: "Prawn Curry",
            price: 400,
            description: "Spicy prawn curry with rice.",
            image: "https://images.unsplash.com/photo-160685",
            category: "PSeafood",
            isVeg: false,
            rating: 4.5,
            ingredients: ["Prawns", "Spices", "Rice"]
          }
        ],
        seafood: [
          {
            id: "m45",
            name: "Fish Fry",
            price: 350,
            description: "Crispy fried fish with spices.",
            image: "https://images.unsplash.com/photo-160685",
            category: "Seafood",
            isVeg: false,
            rating: 4.3,
            ingredients: ["Fish", "Spices", "Oil"]
          }
        ],
        sides: [
          {
            id: "m46",
            name: "Crab Cakes",
            price: 200,
            description: "Crispy crab cakes with sauce.",
            image: "https://images.unsplash.com/photo-160685",
            category: "Sides",
            isVeg: false,
            rating: 4.2,
            ingredients: ["Crab", "Bread Crumbs", "Spices"]
          }
        ]
      }
    },
  },
];

export default resList;