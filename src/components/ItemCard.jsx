import React from "react";
import { useState } from "react";
import list from "../assets/list.json";

export default function ItemCard() {
  const [apartmentList, setApartmentList] = useState(list.results);
  console.log(apartmentList);

  function handleDeleteItem(id) {
    setApartmentList(apartmentList.filter((element) => element.id !== id));
  }

  return (
    <div className="card">
      {apartmentList.map((element) => {
        return (
          <div>
            {element.has_availability === true ? (
              <div>
                <h2>{element.name}</h2>

                <img src={element.picture_url} alt="" />

                <h4>{element.host_location}</h4>

                <div className="content">
                  <p>{element.description}</p>
                </div>
                <button
                  onClick={() => {
                    handleDeleteItem(element.id);
                  }}
                >
                  delete
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
