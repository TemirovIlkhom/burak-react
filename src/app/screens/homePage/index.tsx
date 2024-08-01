import React, { useEffect } from "react";
import Statistics from "./Statistics";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import "../../../css/home.css";

export default function HomePage() {
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data

    // Slice: Data => Store
    return () => {
      
    }
  }, [])
  

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
  