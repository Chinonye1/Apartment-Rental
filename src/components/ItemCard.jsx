import React from "react";
import { useState } from "react";
import list from "../assets/list.json";
import "./itemCard.css";

export default function ItemCard() {
  const [apartmentList, setApartmentList] = useState(list.results);
  console.log(apartmentList)

  function handleDeleteItem(id) {
    setApartmentList(apartmentList.filter(element=> element.id !== id));
  }

  return (
    <div>
      {apartmentList.map((element) => {
        return (
          <div>
            {element.has_availability === true ? (
              <article className="card">
                <header>
                  <h2>{element.name}</h2>
                </header>

                <img src={element.picture_url} alt="" />
                <p></p>
                <h4>{element.host_location}</h4>

                <div className="content">
                  <p>{element.description}</p>
                </div>
                <button onClick={()=>{handleDeleteItem(element.id)}}>delete</button>
                <button>{}</button>
              </article>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
