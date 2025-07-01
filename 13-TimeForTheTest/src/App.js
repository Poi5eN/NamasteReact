import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import MenuItemDetails from "./components/MenuItemDetails";

const Grocery = lazy(() => import("./components/Grocery"));

import UserContext from "./contexts/UserContext";

import { Provider } from "react-redux";
import appStore from "./Redux/appStore";

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

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Poi5eN",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Gaurav" }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body />, errorElement: <Error /> },
      { path: "/about", element: <About />, errorElement: <Error /> },
      { path: "/contact", element: <Contact />, errorElement: <Error /> },
      { path: "/cart", element: <Cart />, errorElement: <Error /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId/item/:itemId",
        element: <MenuItemDetails />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
