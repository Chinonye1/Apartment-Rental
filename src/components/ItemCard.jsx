import React from "react";
import { useState } from "react";
import list from "../assets/list.json";
import { ItemCardSummary } from "./ItemCardSummary";

export default function ItemCard() {
  const [apartmentList, setApartmentList] = useState(list.results);
 

  function handleDeleteItem(id) {
    setApartmentList(apartmentList.filter((element) => element.id !== id));
  }

  return (
    <div className="card">
      {apartmentList.map((element) => {
        return <ItemCardSummary key={element.id} ItemDetails={element}/>
      })}
    </div>
  );
}
