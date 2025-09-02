import {createRoot} from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { useState,useEffect } from "react";
import { data } from "../utils/data";
import AppContext from "../utils/AppContext";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const root = createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [api, setApi] = useState(null);
      const [originalData, setOriginalData] = useState(null);
      let [freshList, setFreshList] = useState(null);
      
      useEffect(()=>{
          fetchData();
      }, []);
      
      const fetchData = async () => {
          const response = await fetch(data);
          const jason = await response.json();
          setApi(jason);
          const restraunts = jason?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setFreshList (restraunts);
          setOriginalData(restraunts);
          console.log(restraunts);
      }
      return (
        <AppContext.Provider value={{ api, originalData, freshList, setFreshList }}>
          <div id="app">
            <Header />
            <Outlet />
          </div>
        </AppContext.Provider>
      )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
          path: "/",
          element: (<Body />
      )},
        {
          path: "/about",
          element: <h1>About Us</h1>
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />
        }
      ],  
    errorElement: <h1>404 Not Found</h1>
  },
])

root.render(<RouterProvider router = {router} />);