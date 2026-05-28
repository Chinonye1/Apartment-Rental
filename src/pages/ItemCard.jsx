import React from "react";
import { useState } from "react";

import { ItemCardSummary } from "../components/ItemCardSummary";

export default function ItemCard(props) {
 
 



  return (
    <div className="card">
      {props.ItemArr.map((element) => {
        return <ItemCardSummary key={element.id} ItemDetails={element} onDelete={props.onDelete}/>
      })}
    </div>
  );
}
