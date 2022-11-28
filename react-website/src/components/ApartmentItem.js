import React from 'react'

function ApartmentItem(image, name, current_price, predicted_price) {
  return (
    <div classname="apartmentItem">
        <div style={{  backgroundImage: `url(${image})`}}></div>
        <h1> {name}</h1>
        <p> ${current_price} </p>
        <p> ${predicted_price}</p>
    </div>
  )
}

export default ApartmentItem