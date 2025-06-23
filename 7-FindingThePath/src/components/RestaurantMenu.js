import { useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        console.log("RestaurantMenu component mounted");
    }, []);

    return (
        resInfo === null ? (
            <div className="loading">
                <Shimmer />
            </div>
        ) : (
            <div className="restaurant-menu">
                <h1>{resInfo.name}</h1>
                <p>{resInfo.description}</p>
                <ul>
                    {resInfo.menu.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}

export default RestaurantMenu;