import React, { useEffect } from "react";
import Statistics from "./Statistics";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = ( dispatch: Dispatch ) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const PopularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(PopularDishesRetriever);
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data

    const result = [
      {
          "_id": "66855a61b22f641470334ae0",
          "productStatus": "PROCESS",
          "productCollection": "DISH",
          "productName": "sad",
          "productPrice": 2,
          "productLeftCount": 3,
          "productSize": "NORMAL",
          "productVolume": 1,
          "productDesc": "de",
          "productImages": [
              "uploads/products/02411389-fdd6-4955-82ac-6cb1001a4338.jpg"
          ],
          "productViews": 0,
          "createdAt": "2024-07-03T14:04:17.576Z",
          "updatedAt": "2024-07-03T14:04:17.576Z",
          "__v": 0
      },
      {
          "_id": "668554d3164a519a9ac99b0b",
          "productStatus": "PROCESS",
          "productCollection": "DISH",
          "productName": "f",
          "productPrice": 4,
          "productLeftCount": 4,
          "productSize": "NORMAL",
          "productVolume": 1,
          "productDesc": "dfs",
          "productImages": [
              "uploads/products/f0960bec-91c6-42c3-9390-b859deff7477.jpg"
          ],
          "productViews": 1,
          "createdAt": "2024-07-03T13:40:35.496Z",
          "updatedAt": "2024-07-25T12:30:27.103Z",
          "__v": 0
      },
  ]

    // Slice: Data => Store
    // @ts-ignore
    setPopularDishes(result);
  }, []);

  console.log("popularDishes:", popularDishes);

    return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events /> 
    </div>
    );
  }
  