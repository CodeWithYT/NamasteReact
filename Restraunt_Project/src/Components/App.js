import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { useState, useEffect, use } from "react";
import { data } from "../utils/data";
import AppContext from "../utils/AppContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import UserContext from "../utils/UserContext";
import useRestaurantData from "../utils/useRestaurantData";
import { Provider } from "react-redux";
import appStore from "../utils/appstore";
import Cart from "./Cart";

const root = createRoot(document.getElementById("root"));

const AppLayout = () => {
  const restaurants = useRestaurantData(data);
  const [userName, setUserName] = useState();
  console.log(restaurants);

  useEffect(() => {
    const loggedInUser = {
      name: "Tarun Yelleti",
    };
    setUserName(loggedInUser.name);
  }, []);

  return (
    <Provider store={appStore}>
      <AppContext.Provider
        value={{
          originalData: restaurants,
          freshList: restaurants,
          setFreshList: () => {},
        }}
      >
        <UserContext.Provider value={{ user: { name: userName }, setUserName }}>
          <div id="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </AppContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <h1>About Us</h1>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <h1>404 Not Found</h1>,
  },
]);

root.render(<RouterProvider router={router} />);
