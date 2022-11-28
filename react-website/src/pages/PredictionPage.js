import React from 'react'
import {ApartmentList} from '../ApartmentList'
import ApartmentItem from '../components/ApartmentItem'
import '../styles/Predictionpage.css'

function PredictionPage() {
  return (
    <div className='prediction'>
        <h1 className="aptTitle">Apartments</h1>
        <div className="apartmentlist">
            {ApartmentList.map((MenuItem, key) => {
                return (
                    <ApartmentItem 
                    key={key}
                        image={MenuItem.image} 
                        name={MenuItem.name} 
                        current_price={MenuItem.current_price} 
                        predicted_price={MenuItem.predicted_prices}
                    />
                );
            })}
        </div>
    </div>
  )
}

export default PredictionPage