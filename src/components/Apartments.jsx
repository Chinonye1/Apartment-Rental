import React from "react";
import list from "../assets/list.json";
import "./Apartments.css";



export default function Apartments() {
  return (
    <div>
      {list.results.map((element) => {
        return (
            
          <div>
            <article class="card">
              <header>
                <h2>{element.name}</h2>
              </header>

              <img src={element.picture_url} alt="" />
              <p></p>
              <h4>{element.host_location}</h4>

              <div class="content">
                <p>{element.description}</p>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
