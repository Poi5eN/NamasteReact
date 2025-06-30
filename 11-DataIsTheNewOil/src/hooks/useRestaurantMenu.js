import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import resList from "../utils/mockData"; // adjust the path if needed

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const restaurant = resList.find((res) => res.data.id === resId);
    setResInfo(restaurant ? restaurant.data : null);
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
