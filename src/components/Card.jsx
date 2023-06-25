import React from "react"

function Card(props)
{
    return (
        <div>
          <div className="card">
            <div className="top">
              <h2 class = "name">{props.name}</h2>
              <img
                class = "circle-img"
                src= {props.image} 
                alt="avatar_img"
              />
            </div>
            <div className="bottom">
              <p className="info">{props.tel}</p>
              <p className="info">{props.email}</p>
            </div>
          </div>
        </div>
      );
}


export default Card; 