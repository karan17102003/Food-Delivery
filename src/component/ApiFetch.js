

import { useState, useEffect } from "react";



function ApiFetch() {
  const [listofRes, SetlistofRes] = useState([]);
  const [FilteredlistofRes, SetFilteredlistofRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');

    // swiggy api fetch

    const Data = await data.json();

    console.log(Data);

    //  data  come from api  new swiggy api
    const arrayOfCards = Data?.data?.cards;
    const restaurantListing = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (
        cardObj?.card?.card &&
        cardObj?.card?.card?.id === restaurantListing
      ) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        SetlistofRes(resData);
        SetFilteredlistofRes(resData);
        console.log(" ggjhgh", resData);
      }
    }
  };
      return  (
          <>
          
          </>
      )
  }
  

export default ApiFetch
